import { INITIAL_POSTS, BLOG_CATEGORIES } from "@/lib/data/blogs";
import Link from "next/link";

export default function DashboardPage() {
  const posts = INITIAL_POSTS;
  const totalPosts = posts.length;
  const featuredPost = posts.find((p) => p.featured);
  const categoryCount = BLOG_CATEGORIES.length;
  const recentPosts = [...posts]
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, 5);

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">仪表盘</h1>
      <p className="text-sm text-gray-500 mb-6">欢迎使用 BUpack 后台管理</p>

      {/* Stats Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard
          label="博客文章"
          value={totalPosts.toString()}
          icon={BlogIcon}
          color="green"
        />
        <StatCard
          label="分类"
          value={categoryCount.toString()}
          icon={CategoryIcon}
          color="blue"
        />
        <StatCard
          label="精选文章"
          value={featuredPost ? 1 : 0}
          icon={StarIcon}
          color="yellow"
        />
        <StatCard
          label="网站状态"
          value="运行中"
          icon={GlobeIcon}
          color="purple"
        />
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h2 className="font-semibold text-gray-900 mb-3">快捷操作</h2>
          <div className="space-y-2">
            <Link
              href="/admin/blogs"
              className="flex items-center gap-2 text-sm text-green-700 hover:text-green-800 font-medium"
            >
              <span className="text-lg">+</span> 管理博客文章
            </Link>
            <Link
              href="/admin/inquiries"
              className="flex items-center gap-2 text-sm text-green-700 hover:text-green-800 font-medium"
            >
              <span className="text-lg">+</span> 查看询盘
            </Link>
            <Link
              href="/admin/products"
              className="flex items-center gap-2 text-sm text-green-700 hover:text-green-800 font-medium"
            >
              <span className="text-lg">+</span> 管理产品
            </Link>
            <Link
              href="/"
              target="_blank"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-800 font-medium"
            >
              <span className="text-lg">↗</span> 查看网站
            </Link>
          </div>
        </div>

        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h2 className="font-semibold text-gray-900 mb-3">分类分布</h2>
          <div className="space-y-1.5">
            {BLOG_CATEGORIES.map((cat) => {
              const count = posts.filter((p) => p.category === cat).length;
              return (
                <div key={cat} className="flex items-center justify-between text-sm">
                  <span className="text-gray-600">{cat}</span>
                  <span className="text-gray-900 font-medium">{count}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Posts */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <div className="flex items-center justify-between mb-4">
          <h2 className="font-semibold text-gray-900">最近文章</h2>
          <Link
            href="/admin/blogs"
            className="text-sm text-green-700 hover:text-green-800 font-medium"
          >
            查看全部 →
          </Link>
        </div>
        <div className="space-y-2">
          {recentPosts.map((post) => (
            <div
              key={post.slug}
              className="flex items-center justify-between py-2 border-b border-gray-100 last:border-0"
            >
              <div className="flex items-center gap-3 min-w-0">
                <span className="text-lg flex-shrink-0">{post.emoji}</span>
                <div className="min-w-0">
                  <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                  <p className="text-xs text-gray-500">{post.category} · {post.date}</p>
                </div>
              </div>
              {post.featured && (
                <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full font-medium flex-shrink-0">
                  精选
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ label, value, icon: Icon, color }: {
  label: string;
  value: string | number;
  icon: React.ComponentType<{ className?: string }>;
  color: "green" | "blue" | "yellow" | "purple";
}) {
  const colors = {
    green: "bg-green-50 text-green-700",
    blue: "bg-blue-50 text-blue-700",
    yellow: "bg-yellow-50 text-yellow-700",
    purple: "bg-purple-50 text-purple-700",
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4">
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${colors[color]}`}>
          <Icon className="w-5 h-5" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-xs text-gray-500">{label}</p>
        </div>
      </div>
    </div>
  );
}

function BlogIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
    </svg>
  );
}

function CategoryIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
    </svg>
  );
}

function StarIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
    </svg>
  );
}
