// Inquiry data model — single source of truth for contact form submissions
// For now, this is an in-memory store. In production, connect to a database.

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
}

let inquiriesStore: Inquiry[] = [
  {
    id: "inq-001",
    name: "Sarah Johnson",
    email: "sarah@beautybrand.com",
    company: "Glow Beauty Co.",
    website: "https://glowbeauty.com",
    stage: "Growing (500–5,000 units)",
    product: "eCommerce Mailer Box",
    quantity: "1,000",
    message: "Looking for custom eco-friendly mailer boxes for our skincare line. Need FSC-certified materials with full CMYK print.",
    status: "new",
    createdAt: "2026-07-05T14:30:00Z",
    notes: "",
  },
  {
    id: "inq-002",
    name: "Michael Chen",
    email: "mike@candleco.com",
    company: "Wick & Wax",
    website: "https://wickwax.com",
    stage: "Just Starting (< 500 units)",
    product: "Subscription / Gift Box",
    quantity: "200",
    message: "Need subscription box packaging for our monthly candle box. Interested in rigid boxes with magnetic closure.",
    status: "contacted",
    createdAt: "2026-07-04T09:15:00Z",
    notes: "Sent sample catalog on 7/4",
  },
  {
    id: "inq-003",
    name: "Emma Rodriguez",
    email: "emma@jewelrybox.com",
    company: "Luxe Jewelry",
    website: "https://luxejewelry.com",
    stage: "Scaling (5,000+ units)",
    product: "Paper Bags",
    quantity: "5,000",
    message: "Looking for premium paper bags with foil stamping for our retail stores. Need custom size with logo.",
    status: "quoted",
    createdAt: "2026-07-03T16:45:00Z",
    notes: "Quote sent: $0.85/unit for 5K, 15-day lead time",
  },
  {
    id: "inq-004",
    name: "David Kim",
    email: "david@teatime.com",
    company: "Tea Time Co.",
    stage: "Growing (500–5,000 units)",
    product: "Not sure — need recommendation",
    quantity: "500",
    message: "Need packaging for our tea subscription service. Not sure what type of box would work best.",
    status: "new",
    createdAt: "2026-07-02T11:20:00Z",
    notes: "",
  },
  {
    id: "inq-005",
    name: "Lisa Wang",
    email: "lisa@pettreats.com",
    company: "Paws & Treats",
    website: "https://pawstreats.com",
    stage: "Just Starting (< 500 units)",
    product: "Kraft Eco Mailers",
    quantity: "300",
    message: "Eco-friendly mailers for our pet treat subscription. Need compostable materials.",
    status: "closed",
    createdAt: "2026-06-28T08:00:00Z",
    notes: "Customer chose competitor (lower price)",
  },
];

export function getInquiries(): Inquiry[] {
  return [...inquiriesStore].sort(
    (a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
  );
}

export function getInquiryById(id: string): Inquiry | undefined {
  return inquiriesStore.find((i) => i.id === id);
}

export function updateInquiryStatus(
  id: string,
  status: Inquiry["status"],
  notes?: string
): Inquiry | null {
  const index = inquiriesStore.findIndex((i) => i.id === id);
  if (index === -1) return null;

  inquiriesStore[index] = {
    ...inquiriesStore[index],
    status,
    notes: notes !== undefined ? notes : inquiriesStore[index].notes,
  };
  return inquiriesStore[index];
}

export function deleteInquiry(id: string): boolean {
  const index = inquiriesStore.findIndex((i) => i.id === id);
  if (index === -1) return false;
  inquiriesStore.splice(index, 1);
  return true;
}

export function addInquiry(inquiry: Omit<Inquiry, "id" | "createdAt">): Inquiry {
  const newInquiry: Inquiry = {
    ...inquiry,
    id: `inq-${String(inquiriesStore.length + 1).padStart(3, "0")}`,
    createdAt: new Date().toISOString(),
  };
  inquiriesStore.push(newInquiry);
  return newInquiry;
}

export function getInquiryStats() {
  const inquiries = getInquiries();
  return {
    total: inquiries.length,
    new: inquiries.filter((i) => i.status === "new").length,
    contacted: inquiries.filter((i) => i.status === "contacted").length,
    quoted: inquiries.filter((i) => i.status === "quoted").length,
    closed: inquiries.filter((i) => i.status === "closed").length,
  };
}
