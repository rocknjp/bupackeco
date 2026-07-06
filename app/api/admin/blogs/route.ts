import { NextRequest, NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import { INITIAL_POSTS, BlogPost, BLOG_CATEGORIES } from "@/lib/data/blogs";
import fs from "fs";
import path from "path";

// In-memory store (fallback for serverless environments where fs writes fail)
let postsStore: BlogPost[] = [...INITIAL_POSTS];

function loadPosts(): BlogPost[] {
  try {
    const filePath = path.join(process.cwd(), "lib", "data", "blogs.ts");
    const content = fs.readFileSync(filePath, "utf-8");
    // Extract the INITIAL_POSTS array from the TypeScript file
    const match = content.match(/export const INITIAL_POSTS: BlogPost\[\] = (\[[\s\S]*?\n\]);/);
    if (match) {
      // Use Function to parse the array (safe because it's our own source file)
      const posts = new Function(`return ${match[1]}`)() as BlogPost[];
      postsStore = posts;
      return posts;
    }
  } catch {
    // Fall through to in-memory store
  }
  return postsStore;
}

function savePosts(posts: BlogPost[]) {
  postsStore = posts;

  // Try to write to file (works in dev, may fail in serverless)
  try {
    const filePath = path.join(process.cwd(), "lib", "data", "blogs.ts");
    const postsJson = JSON.stringify(posts, null, 2)
      .split("\n")
      .map((line, i) => (i === 0 ? line : "  " + line))
      .join("\n");

    const newContent = `// Shared blog post data — single source of truth
// Used by both the public blog page and the admin panel

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: BlogCategory;
  date: string; // Format: "Month DD, YYYY"
  readTime: string; // e.g. "7 min"
  featured: boolean;
  emoji: string;
}

export type BlogCategory =
  | "Sustainability"
  | "Unboxing Experience"
  | "DTC Strategy"
  | "Packaging 101"
  | "Startup Guide"
  | "Import Guide"
  | "Eco Guide"
  | "Design Trends";

export const BLOG_CATEGORIES: BlogCategory[] = [
  "Sustainability",
  "Unboxing Experience",
  "DTC Strategy",
  "Packaging 101",
  "Startup Guide",
  "Import Guide",
  "Eco Guide",
  "Design Trends",
];

export const INITIAL_POSTS: BlogPost[] = ${postsJson};
`;

    fs.writeFileSync(filePath, newContent, "utf-8");
    console.log("Blog data written to file. Remember to commit and push.");
  } catch (e) {
    console.warn("Could not write to file (expected in serverless):", e);
  }
}

// Auth middleware check
async function checkAuth() {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  return null;
}

export async function GET() {
  const authError = await checkAuth();
  if (authError) return authError;

  const posts = loadPosts();
  return NextResponse.json({ posts });
}

export async function POST(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  try {
    const body = await request.json();
    const { slug, title, excerpt, category, date, readTime, featured, emoji, oldSlug } = body;

    // Validate required fields
    if (!slug || !title) {
      return NextResponse.json(
        { error: "Slug and title are required" },
        { status: 400 }
      );
    }

    // Validate slug format
    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json(
        { error: "Slug must contain only lowercase letters, numbers, and hyphens" },
        { status: 400 }
      );
    }

    // Validate category
    if (!BLOG_CATEGORIES.includes(category)) {
      return NextResponse.json(
        { error: `Invalid category. Must be one of: ${BLOG_CATEGORIES.join(", ")}` },
        { status: 400 }
      );
    }

    const posts = loadPosts();

    // Update existing post
    if (oldSlug) {
      const index = posts.findIndex((p) => p.slug === oldSlug);
      if (index === -1) {
        return NextResponse.json(
          { error: "Post not found" },
          { status: 404 }
        );
      }

      // If slug changed, check it doesn't conflict
      if (slug !== oldSlug && posts.some((p) => p.slug === slug)) {
        return NextResponse.json(
          { error: "A post with this slug already exists" },
          { status: 409 }
        );
      }

      posts[index] = {
        slug,
        title,
        excerpt: excerpt || "",
        category,
        date: date || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        readTime: readTime || "5 min",
        featured: !!featured,
        emoji: emoji || "📦",
      };

      savePosts(posts);
      return NextResponse.json({ success: true, message: "Post updated" });
    }

    // Create new post
    if (posts.some((p) => p.slug === slug)) {
      return NextResponse.json(
        { error: "A post with this slug already exists" },
        { status: 409 }
      );
    }

    const newPost: BlogPost = {
      slug,
      title,
      excerpt: excerpt || "",
      category,
      date: date || new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
      readTime: readTime || "5 min",
      featured: !!featured,
      emoji: emoji || "📦",
    };

    posts.push(newPost);
    savePosts(posts);

    return NextResponse.json({ success: true, message: "Post created" });
  } catch {
    return NextResponse.json(
      { error: "Invalid request body" },
      { status: 400 }
    );
  }
}

export async function DELETE(request: NextRequest) {
  const authError = await checkAuth();
  if (authError) return authError;

  const slug = request.nextUrl.searchParams.get("slug");
  if (!slug) {
    return NextResponse.json(
      { error: "Slug parameter is required" },
      { status: 400 }
    );
  }

  const posts = loadPosts();
  const index = posts.findIndex((p) => p.slug === slug);

  if (index === -1) {
    return NextResponse.json(
      { error: "Post not found" },
      { status: 404 }
    );
  }

  posts.splice(index, 1);
  savePosts(posts);

  return NextResponse.json({ success: true, message: "Post deleted" });
}
