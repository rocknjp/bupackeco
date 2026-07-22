"use client";

import { useState, useEffect } from "react";
import { Product, INITIAL_PRODUCTS } from "@/lib/data/products";

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState<Product | null>(null);
  const [showNew, setShowNew] = useState(false);
  const [message, setMessage] = useState("");

  const [form, setForm] = useState({
    id: "",
    name: "",
    tags: "",
    badge: "",
    description: "",
    whyBrands: "",
    emoji: "📦",
    image: "https://www.bupackeco.com/images/product_box_1.jpg",
    url: "",
    active: true,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  async function fetchProducts() {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/products/");
      if (res.ok) {
        const data = await res.json();
        setProducts(data.products || []);
      } else {
        setProducts(INITIAL_PRODUCTS);
      }
    } catch {
      setProducts(INITIAL_PRODUCTS);
    }
    setLoading(false);
  }

  function startNew() {
    setEditing(null);
    setForm({
      id: "",
      name: "",
      tags: "",
      badge: "",
      description: "",
      whyBrands: "",
      emoji: "📦",
      image: "https://www.bupackeco.com/images/product_box_1.jpg",
      url: "",
      active: true,
    });
    setShowNew(true);
    setMessage("");
  }

  function startEdit(product: Product) {
    setShowNew(false);
    setForm({
      id: product.id,
      name: product.name,
      tags: product.tags.join(", "),
      badge: product.badge,
      description: product.description,
      whyBrands: product.whyBrands,
      emoji: product.emoji,
      image: product.image,
      url: product.url,
      active: product.active,
    });
    setEditing(product);
    setMessage("");
  }

  function cancelEdit() {
    setEditing(null);
    setShowNew(false);
    setMessage("");
  }

  async function saveProduct() {
    if (!form.name.trim() || !form.description.trim()) {
      setMessage("产品名称和描述为必填项");
      return;
    }

    try {
      const res = await fetch("/api/admin/products/", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: editing?.id,
          name: form.name,
          tags: form.tags.split(",").map((t) => t.trim()).filter(Boolean),
          badge: form.badge,
          description: form.description,
          whyBrands: form.whyBrands,
          emoji: form.emoji,
          image: form.image,
          url: form.url,
          active: form.active,
        }),
      });

      if (res.ok) {
        setMessage(editing ? "产品已更新" : "产品已创建");
        setEditing(null);
        setShowNew(false);
        fetchProducts();
      } else {
        const data = await res.json();
        setMessage(data.error || "保存失败");
      }
    } catch {
      setMessage("网络错误");
    }
  }

  async function toggleActive(id: string) {
    try {
      const res = await fetch("/api/admin/products/", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id, action: "toggle" }),
      });
      if (res.ok) {
        fetchProducts();
      }
    } catch {
      setMessage("更新失败");
    }
  }

  async function deleteProduct(id: string) {
    if (!confirm("确定删除此产品？此操作不可撤销。")) return;
    try {
      const res = await fetch(`/api/admin/products/?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setMessage("产品已删除");
        fetchProducts();
      }
    } catch {
      setMessage("删除失败");
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">产品管理</h1>
          <p className="text-sm text-gray-500 mt-1">共 {products.length} 个产品</p>
        </div>
        <button
          onClick={startNew}
          className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
        >
          + 新增产品
        </button>
      </div>

      {message && (
        <div className={`mb-4 px-4 py-3 rounded-lg text-sm ${message.includes("失败") || message.includes("错误") ? "bg-red-50 text-red-700 border border-red-200" : "bg-green-50 text-green-700 border border-green-200"}`}>
          {message}
        </div>
      )}

      {/* New/Edit Form */}
      {(showNew || editing) && (
        <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
          <h2 className="font-semibold text-gray-900 mb-4">
            {editing ? `编辑：${editing.name}` : "新增产品"}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">产品名称 *</label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="e.g. 电商快递盒"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">标签（逗号分隔）</label>
              <input
                type="text"
                value={form.tags}
                onChange={(e) => setForm({ ...form, tags: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="DTC, 订阅盒, 服装"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">徽章</label>
              <input
                type="text"
                value={form.badge}
                onChange={(e) => setForm({ ...form, badge: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="e.g. 最受欢迎"
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
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">产品描述 *</label>
              <textarea
                value={form.description}
                onChange={(e) => setForm({ ...form, description: e.target.value })}
                rows={3}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="产品描述..."
              />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-medium text-gray-700 mb-1">品牌选择理由</label>
              <textarea
                value={form.whyBrands}
                onChange={(e) => setForm({ ...form, whyBrands: e.target.value })}
                rows={2}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="为什么品牌选择这个产品..."
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">图片URL</label>
              <input
                type="text"
                value={form.image}
                onChange={(e) => setForm({ ...form, image: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-gray-700 mb-1">页面链接</label>
              <input
                type="text"
                value={form.url}
                onChange={(e) => setForm({ ...form, url: e.target.value })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="/products/custom-xxx"
              />
            </div>
            <div className="flex items-center gap-2 pt-5">
              <input
                type="checkbox"
                id="active"
                checked={form.active}
                onChange={(e) => setForm({ ...form, active: e.target.checked })}
                className="w-4 h-4 text-green-700 rounded"
              />
              <label htmlFor="active" className="text-sm text-gray-700">上架展示</label>
            </div>
          </div>
          <div className="flex gap-2 mt-4 pt-4 border-t border-gray-100">
            <button
              onClick={saveProduct}
              className="bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-green-600 transition-colors"
            >
              保存
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

      {/* Product List */}
      {loading ? (
        <div className="text-center py-12 text-gray-400">加载中...</div>
      ) : (
        <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">产品</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase hidden md:table-cell">标签</th>
                <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase">状态</th>
                <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase">操作</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-50">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <span className="text-xl">{product.emoji}</span>
                      <div>
                        <p className="text-sm font-medium text-gray-900">{product.name}</p>
                        <p className="text-xs text-gray-500">{product.badge}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-500 hidden md:table-cell">
                    {product.tags.join(", ")}
                  </td>
                  <td className="px-4 py-3">
                    <button
                      onClick={() => toggleActive(product.id)}
                      className={`text-xs px-2 py-0.5 rounded-full border cursor-pointer ${product.active ? "bg-green-100 text-green-700 border-green-200" : "bg-gray-100 text-gray-500 border-gray-200"}`}
                    >
                      {product.active ? "上架" : "下架"}
                    </button>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1">
                      <button
                        onClick={() => startEdit(product)}
                        className="text-xs text-gray-500 hover:text-green-700 px-2 py-1 rounded hover:bg-green-50 transition-colors"
                      >
                        编辑
                      </button>
                      <button
                        onClick={() => deleteProduct(product.id)}
                        className="text-xs text-gray-500 hover:text-red-600 px-2 py-1 rounded hover:bg-red-50 transition-colors"
                      >
                        删除
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {products.length === 0 && (
                <tr>
                  <td colSpan={4} className="text-center py-12 text-gray-400">
                    暂无产品。点击「新增产品」创建。
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
