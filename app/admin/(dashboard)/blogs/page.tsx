"use client";

import { useState, useEffect } from "react";
import { INITIAL_POSTS, BLOG_CATEGORIES, BlogPost } from "@/lib/data/blogs";

export default function BlogsPage() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    slug: "",
    title: "",
    excerpt: "",
    category: "Packaging 101" as BlogPost["category"],
    date: "",
    readTime: "",
    featured: false,
    emoji: "📦",
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/blogs/");
      if (res.ok) {
        const data = await res.json();
        setPosts(data.posts || []);
      } else {
        setPosts(INITIAL_POSTS);
      }
    } catch {
      setPosts(INITIAL_POSTS);
    }
    setLoading(false);
  }

  function startNew() {
    setEditing(null);
    setForm({
      slug: "",
      title: "",
      excerpt: "",
      category: "Packaging 101",
      date: new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }),
      readTime: "5 min",
      featured: false,
      emoji: "📦",
    });
    setShowNew(true);
    setMessage("");
  }

  function startEdit(post: BlogPost) {
    setShowNew(false);
    setForm({
      slug: post.slug,
      title: post.title,
      excerpt: post.excerpt,
      category: post.category,
      date: post.date,
      readTime: post.readTime,
      featured: post.featured,
      emoji: post.emoji,
    });
    setEditing(post);
    setMessage("");
  }

  function cancelEdit() {
    setEditing(null);
    setShowNew(false);
    setMessage("");
  }

  async function savePost() {
    if (!form.slug.trim() || !form.title.trim()) {
      setMessage("Slug 和标题为必填项");
      return;
    }

    setSaving(true);
    try {
      const res = await fetch("/api/admin/blogs/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editing ? { ...form, oldSlug: editing.slug } : form),
      });

      if (res.ok) {
        const data = await res.json();
        setMessage(data.message || "保存成功");
        setEditing(null);
        setShowNew(false);
        fetchPosts();
      } else {
        const data = await res.json();
        setMessage(data.error || "保存失败");
      }
    } catch {
      setMessage("网络错误");
    }
    setSaving(false);
  }

  async function deletePost(slug: string) {
    if (!confirm(`确定删除 "${slug}"？此操作不可撤销。`)) return;

    try {
      const res = await fetch(`/api/admin/blogs/?slug=${encodeURIComponent(slug)}`, {
        method: "DELETE",
      });

      if (res.ok) {
        setMessage("文章已删除");
        fetchPosts();
      } else {
        const data = await res.json();
        setMessage(data.error || "删除失败");
      }
    } catch {
      setMessage("网络错误");
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">博客管理</h1>
          <p className="text-sm text-gray-500 mt-1">共 {posts.length} 篇文章</p>
        </div>
        <button
          onClick={startNew}
          className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
        >
          + 新增文章
        </button>
      </div>

      {message && (
        <div className={`mb-4 px-4 py-3 rounded-lg text-sm ${
          message.toLowerCase().includes("error") || message.toLowerCase().includes("failed") || message.includes("失败")
            ? "bg-red-50 text-red-700 border border-red-200"
            : "bg-green-50 text-green-700 border border-green-200"
        }`}>
          {message}
        </div>
      )}

      {/* New/Edit Form */}
      {(showNew || editing) && (
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">
            {editing ? `编辑：${editing.title}` : "新增博客文章"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Slug *</label>
              <input
                type="text"
                value={form.slug}
                onChange={(e) => setForm({ ...form, slug: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="my-post-slug"
                disabled={!!editing}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">标题 *</label>
              <input
                type="text"
                value={form.title}
                onChange={(e) => setForm({ ...form, title: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="文章标题"
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">摘要</label>
              <textarea
                value={form.excerpt}
                onChange={(e) => setForm({ ...form, excerpt: e.target.value })}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="文章摘要，用于博客列表展示"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">分类</label>
              <select
                value={form.category}
                onChange={(e) => setForm({ ...form, category: e.target.value as BlogPost["category"] })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                {BLOG_CATEGORIES.map((c) => (
                  <option key={c} value={c}>{c}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">日期</label>
              <input
                type="text"
                value={form.date}
                onChange={(e) => setForm({ ...form, date: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="June 7, 2026"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">阅读时间</label>
              <input
                type="text"
                value={form.readTime}
                onChange={(e) => setForm({ ...form, readTime: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="7 min"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">Emoji</label>
              <input
                type="text"
                value={form.emoji}
                onChange={(e) => setForm({ ...form, emoji: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="📦"
              />
            </div>
            <div className="flex items-center gap-2 pt-5">
              <input
                type="checkbox"
                id="featured"
                checked={form.featured}
                onChange={(e) => setForm({ ...form, featured: e.target.checked })}
                className="w-4 h-4 text-green-700 rounded focus:ring-green-500"
              />
              <label htmlFor="featured" className="text-sm text-gray-700">精选文章</label>
            </div>
          </div>
          <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
            <button
              onClick={savePost}
              disabled={saving}
              className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 disabled:opacity-50 transition-colors"
            >
              {saving ? "保存中..." : "保存"}
            </button>
            <button
              onClick={cancelEdit}
              className="text-gray-600 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors"
            >
              取消
            </button>
          </div>
        </div>
      )}

      {/* Post List */}
      {loading ? (
        <div className="text-center py-12 text-gray-400">加载中...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">文章</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase hidden md:table-cell">分类</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase hidden md:table-cell">日期</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {posts.map((post) => (
                <tr key={post.slug} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3 min-w-0">
                      <span className="text-lg">{post.emoji}</span>
                      <div className="min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate max-w-xs md:max-w-md">
                          {post.title}
                        </p>
                        {post.featured && (
                          <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded">精选</span>
                        )}
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 hidden md:table-cell">{post.category}</td>
                  <td className="px-4 py-3 text-sm text-gray-500 hidden md:table-cell">{post.date}</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => startEdit(post)}
                        className="text-xs text-gray-500 hover:text-green-700 px-2 py-1 rounded hover:bg-green-50 transition-colors"
                      >
                        编辑
                      </button>
                      <button
                        onClick={() => deletePost(post.slug)}
                        className="text-xs text-gray-500 hover:text-red-600 px-2 py-1 rounded hover:bg-red-50 transition-colors"
                      >
                        删除
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {posts.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-12 text-gray-400">
                    暂无博客文章。点击「新增文章」创建。
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
