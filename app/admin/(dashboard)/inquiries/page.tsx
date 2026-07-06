"use client";

import { useState, useEffect } from "react";
import { Inquiry } from "@/lib/data/inquiries";

export default function InquiriesPage() {
  const [inquiries, setInquiries] = useState<Inquiry[]>([]);
  const [stats, setStats] = useState({ total: 0, new: 0, contacted: 0, quoted: 0, closed: 0 });
  const [loading, setLoading] = useState(true);
  const [selected, setSelected] = useState<Inquiry | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchInquiries();
  }, []);

  async function fetchInquiries() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/inquiries");
      if (res.ok) {
        const data = await res.json();
        setInquiries(data.inquiries || []);
        setStats(data.stats || { total: 0, new: 0, contacted: 0, quoted: 0, closed: 0 });
      }
    } catch {
      setMessage("加载失败");
    }
    setLoading(false);
  }

  async function updateStatus(id: string, status: Inquiry["status"]) {
    try {
      const res = await fetch("/api/admin/inquiries", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        setMessage("状态已更新");
        fetchInquiries();
        if (selected && selected.id === id) {
          setSelected({ ...selected, status });
        }
      }
    } catch {
      setMessage("更新失败");
    }
  }

  async function deleteInquiry(id: string) {
    if (!confirm("确定删除此询盘？此操作不可撤销。")) return;
    try {
      const res = await fetch(`/api/admin/inquiries?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMessage("已删除");
        setSelected(null);
        fetchInquiries();
      }
    } catch {
      setMessage("删除失败");
    }
  }

  const statusLabels: Record<string, string> = {
    new: "新询盘",
    contacted: "已联系",
    quoted: "已报价",
    closed: "已关闭",
    spam: "垃圾",
  };

  const statusColors: Record<string, string> = {
    new: "bg-red-50 text-red-700 border-red-200",
    contacted: "bg-blue-50 text-blue-700 border-blue-200",
    quoted: "bg-yellow-50 text-yellow-700 border-yellow-200",
    closed: "bg-gray-100 text-gray-600 border-gray-200",
    spam: "bg-gray-100 text-gray-400 border-gray-200",
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">询盘管理</h1>
          <p className="text-sm text-gray-500 mt-1">共 {stats.total} 条询盘</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-5 gap-3 mb-6">
        {[
          { label: "新询盘", value: stats.new, color: "bg-red-50 text-red-700" },
          { label: "已联系", value: stats.contacted, color: "bg-blue-50 text-blue-700" },
          { label: "已报价", value: stats.quoted, color: "bg-yellow-50 text-yellow-700" },
          { label: "已关闭", value: stats.closed, color: "bg-gray-100 text-gray-600" },
          { label: "总计", value: stats.total, color: "bg-green-50 text-green-700" },
        ].map((s) => (
          <div key={s.label} className={`rounded-xl p-3 border ${s.color.split(" ")[1].replace("text", "border")} ${s.color}`}>
            <p className="text-xl font-bold">{s.value}</p>
            <p className="text-xs opacity-80">{s.label}</p>
          </div>
        ))}
      </div>

      {message && (
        <div className={`mb-4 px-4 py-3 rounded-lg text-sm ${message.includes("失败") ? "bg-red-50 text-red-700 border border-red-200" : "bg-green-50 text-green-700 border border-green-200"}`}>
          {message}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* List */}
        <div className="lg:col-span-2">
          {loading ? (
            <div className="text-center py-12 text-gray-400">加载中...</div>
          ) : (
            <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-200">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">客户</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase hidden md:table-cell">产品</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">状态</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase hidden md:table-cell">日期</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {inquiries.map((inq) => (
                    <tr
                      key={inq.id}
                      className={`hover:bg-gray-50 cursor-pointer ${selected?.id === inq.id ? "bg-green-50" : ""}`}
                      onClick={() => setSelected(inq)}
                    >
                      <td className="px-4 py-3">
                        <p className="text-sm font-medium text-gray-900">{inq.name}</p>
                        <p className="text-xs text-gray-500">{inq.company}</p>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-600 hidden md:table-cell">{inq.product}</td>
                      <td className="px-4 py-3">
                        <span className={`text-xs px-2 py-0.5 rounded-full border ${statusColors[inq.status]}`}>
                          {statusLabels[inq.status]}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-sm text-gray-500 hidden md:table-cell">
                        {new Date(inq.createdAt).toLocaleDateString("zh-CN")}
                      </td>
                    </tr>
                  ))}
                  {inquiries.length === 0 && (
                    <tr>
                      <td colSpan={4} className="text-center py-12 text-gray-400">
                        暂无询盘
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Detail */}
        <div className="lg:col-span-1">
          {selected ? (
            <div className="bg-white border border-gray-200 rounded-xl p-5 sticky top-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-semibold text-gray-900">询盘详情</h2>
                <button
                  onClick={() => deleteInquiry(selected.id)}
                  className="text-xs text-red-600 hover:text-red-700"
                >
                  删除
                </button>
              </div>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-gray-500">姓名：</span>
                  <span className="text-gray-900">{selected.name}</span>
                </div>
                <div>
                  <span className="text-gray-500">邮箱：</span>
                  <a href={`mailto:${selected.email}`} className="text-green-700 hover:underline">{selected.email}</a>
                </div>
                <div>
                  <span className="text-gray-500">公司：</span>
                  <span className="text-gray-900">{selected.company || "—"}</span>
                </div>
                <div>
                  <span className="text-gray-500">网站：</span>
                  <span className="text-gray-900">{selected.website || "—"}</span>
                </div>
                <div>
                  <span className="text-gray-500">产品：</span>
                  <span className="text-gray-900">{selected.product}</span>
                </div>
                <div>
                  <span className="text-gray-500">数量：</span>
                  <span className="text-gray-900">{selected.quantity || "—"}</span>
                </div>
                <div>
                  <span className="text-gray-500">规模：</span>
                  <span className="text-gray-900">{selected.stage}</span>
                </div>
                <div>
                  <span className="text-gray-500">留言：</span>
                  <p className="text-gray-700 mt-1 bg-gray-50 p-2 rounded">{selected.message}</p>
                </div>
                {selected.notes && (
                  <div>
                    <span className="text-gray-500">备注：</span>
                    <p className="text-gray-700 mt-1 bg-yellow-50 p-2 rounded">{selected.notes}</p>
                  </div>
                )}
              </div>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <p className="text-xs text-gray-500 mb-2">更新状态</p>
                <div className="flex flex-wrap gap-2">
                  {(["new", "contacted", "quoted", "closed"] as Inquiry["status"][]).map((status) => (
                    <button
                      key={status}
                      onClick={() => updateStatus(selected.id, status)}
                      className={`text-xs px-2 py-1 rounded border ${statusColors[status]} ${selected.status === status ? "ring-2 ring-offset-1 ring-green-500" : ""}`}
                    >
                      {statusLabels[status]}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-8 text-center text-gray-400 text-sm">
              点击左侧询盘查看详情
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
