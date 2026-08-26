// Inquiry data model — backed by lib/store (Upstash Redis in production,
// JSON file locally). The admin dashboard reads/writes through the API routes.

import { kvGet, kvSet } from "../store";

export interface Inquiry {
  id: string;
  name: string;
  email: string;
  company: string;
  website?: string;
  stage: string;
  product: string;
  quantity: string;
  message: string;
  status: "new" | "contacted" | "quoted" | "closed" | "spam";
  createdAt: string;
  notes: string;
  // Extended fields for quote-calculator / other-packaging inquiries
  source?: "contact" | "quote-calculator" | "other-packaging";
  phone?: string;
  packagingType?: string;
  dims?: string;
  material?: string;
  printing?: string;
  finishes?: string[];
  artworkStatus?: string;
  targetPrice?: string;
  timeline?: string;
  accountEmail?: string;
}

const KEY = "inquiries";

async function all(): Promise<Inquiry[]> {
  return (await kvGet<Inquiry[]>(KEY)) ?? [];
}

export async function getInquiries(): Promise<Inquiry[]> {
  const items = await all();
  return [...items].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export async function getInquiryById(id: string): Promise<Inquiry | undefined> {
  const items = await all();
  return items.find((i) => i.id === id);
}

export async function updateInquiryStatus(
  id: string,
  status: Inquiry["status"],
  notes?: string
): Promise<Inquiry | null> {
  const items = await all();
  const index = items.findIndex((i) => i.id === id);
  if (index === -1) return null;

  items[index] = {
    ...items[index],
    status,
    notes: notes !== undefined ? notes : items[index].notes,
  };
  await kvSet(KEY, items);
  return items[index];
}

export async function deleteInquiry(id: string): Promise<boolean> {
  const items = await all();
  const index = items.findIndex((i) => i.id === id);
  if (index === -1) return false;
  items.splice(index, 1);
  await kvSet(KEY, items);
  return true;
}

export async function addInquiry(
  inquiry: Omit<Inquiry, "id" | "createdAt" | "status" | "notes">
): Promise<Inquiry> {
  const items = await all();
  const newInquiry: Inquiry = {
    ...inquiry,
    id: `inq-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`,
    createdAt: new Date().toISOString(),
    status: "new",
    notes: "",
  };
  items.push(newInquiry);
  await kvSet(KEY, items);
  return newInquiry;
}

export async function getInquiryStats() {
  const inquiries = await getInquiries();
  return {
    total: inquiries.length,
    new: inquiries.filter((i) => i.status === "new").length,
    contacted: inquiries.filter((i) => i.status === "contacted").length,
    quoted: inquiries.filter((i) => i.status === "quoted").length,
    closed: inquiries.filter((i) => i.status === "closed").length,
  };
}
