"use client";

import { useState, useEffect } from "react";

interface SeoData {
  totalPages: number;
  indexedPages: number;
  indexRate: number;
  healthScore: number;
  redirectErrors: number;
  sitemapIssues: number;
  schemaErrors: number;
  corePages: { path: string; status: string; title: string }[];
  keywords: { keyword: string; rank: string; volume: string }[];
  recentFixes: { date: string; fix: string }[];
  pendingIssues: { severity: string; issue: string }[];
}

export default function SeoPage() {
  const [data, setData] = useState<SeoData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/admin/seo")
      .then((res) => res.json())
      .then((d) => {
        setData(d);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center py-12 text-gray-400">加载中...</div>;
  if (!data) return <div className="text-center py-12 text-gray-400">加载失败</div>;

  const severityColors: Record<string, string> = {
    high: "bg-red-50 text-red-700 border-red-200",
    medium: "bg-yellow-50 text-yellow-700 border-yellow-200",
    low: "bg-blue-50 text-blue-700 border-blue-200",
  };

  const severityLabels: Record<string, string> = {
    high: "高",
    medium: "中",
    low: "低",
  };

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-1">SEO 概览</h1>
      <p className="text-sm text-gray-500 mb-6">网站健康度与搜索引擎优化状态</p>

      {/* Health Score */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <HealthCard label="总页面数" value={data.totalPages} icon="📄" color="blue" />
        <HealthCard label="Google索引" value={data.indexedPages} icon="🔍" color={data.indexedPages > 0 ? "green" : "red"} />
        <HealthCard label="健康评分" value={`${data.healthScore}/100`} icon="💚" color={data.healthScore > 80 ? "green" : data.healthScore > 50 ? "yellow" : "red"} />
        <HealthCard label="待修复问题" value={data.pendingIssues.length} icon="⚠️" color={data.pendingIssues.length > 0 ? "red" : "green"} />
      </div>

      {/* Issues Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        {/* Pending Issues */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h2 className="font-semibold text-gray-900 mb-4">待修复问题</h2>
          <div className="space-y-2">
            {data.pendingIssues.map((issue, i) => (
              <div key={i} className={`flex items-center gap-3 p-3 rounded-lg border ${severityColors[issue.severity]}`}>
                <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/60">
                  {severityLabels[issue.severity]}
                </span>
                <span className="text-sm">{issue.issue}</span>
              </div>
            ))}
            {data.pendingIssues.length === 0 && (
              <p className="text-sm text-gray-400 text-center py-4">暂无待修复问题</p>
            )}
          </div>
        </div>

        {/* Recent Fixes */}
        <div className="bg-white border border-gray-200 rounded-xl p-5">
          <h2 className="font-semibold text-gray-900 mb-4">最近修复</h2>
          <div className="space-y-2">
            {data.recentFixes.map((fix, i) => (
              <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-green-50 border border-green-100">
                <span className="text-xs text-green-600 font-medium whitespace-nowrap">{fix.date}</span>
                <span className="text-sm text-green-800">{fix.fix}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Pages Status */}
      <div className="bg-white border border-gray-200 rounded-xl p-5 mb-8">
        <h2 className="font-semibold text-gray-900 mb-4">核心页面状态</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">页面</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">Title</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">状态</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.corePages.map((page) => (
                <tr key={page.path} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900">{page.path}</td>
                  <td className="px-4 py-3 text-sm text-gray-600 max-w-md truncate">{page.title}</td>
                  <td className="px-4 py-3">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${page.status === "ok" ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                      {page.status === "ok" ? "正常" : "异常"}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Keywords */}
      <div className="bg-white border border-gray-200 rounded-xl p-5">
        <h2 className="font-semibold text-gray-900 mb-4">目标关键词</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">关键词</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">当前排名</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">月搜索量</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {data.keywords.map((kw) => (
                <tr key={kw.keyword} className="hover:bg-gray-50">
                  <td className="px-4 py-3 text-sm text-gray-900">{kw.keyword}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{kw.rank}</td>
                  <td className="px-4 py-3 text-sm text-gray-500">{kw.volume}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function HealthCard({ label, value, icon, color }: { label: string; value: string | number; icon: string; color: string }) {
  const colors: Record<string, string> = {
    green: "bg-green-50 text-green-700 border-green-200",
    blue: "bg-blue-50 text-blue-700 border-blue-200",
    yellow: "bg-yellow-50 text-yellow-700 border-yellow-200",
    red: "bg-red-50 text-red-700 border-red-200",
  };

  return (
    <div className={`rounded-xl p-4 border ${colors[color] || colors.blue}`}>
      <div className="flex items-center gap-2 mb-1">
        <span className="text-lg">{icon}</span>
        <span className="text-xs font-medium opacity-80">{label}</span>
      </div>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  );
}
