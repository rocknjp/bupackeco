// Product data — single source of truth
// Used by both the public products page and the admin panel

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  name: string;
  tags: string[];
  badge: string;
  description: string;
  specs: ProductSpec[];
  whyBrands: string;
  emoji: string;
  active: boolean;
  image: string;
  url: string;
}

export const INITIAL_PRODUCTS: Product[] = [
  {
    id: "ecommerce-boxes",
    name: "eCommerce Mailer Boxes",
    tags: ["DTC", "Subscription Box", "Apparel"],
    badge: "Most Popular",
    description:
      "The packaging your DTC brand deserves. Self-locking, no-tape mailer boxes with full interior and exterior print. Built to survive shipping and deliver a premium unboxing moment.",
    specs: [
      { label: "Material", value: "Corrugated / Rigid paperboard, 300–500gsm" },
      { label: "Print", value: "Full CMYK, Pantone, interior print included" },
      { label: "Finish", value: "Matte, gloss, soft-touch, spot UV" },
      { label: "MOQ", value: "From 100 units" },
      { label: "Lead time", value: "15–20 business days" },
      { label: "Eco options", value: "FSC-certified, recycled paper, soy inks" },
    ],
    whyBrands: "DTC brands that run unboxing-worthy experiences report 2–3x higher UGC and social shares. Start from 100 units.",
    emoji: "📬",
    active: true,
    image: "https://www.bupackeco.com/images/product_box_1.jpg",
    url: "/products/custom-mailer-boxes",
  },
  {
    id: "paper-bags",
    name: "Custom Paper Bags",
    tags: ["Retail", "Events", "Gift"],
    badge: "Eco Choice",
    description:
      "Elevate your retail and event experience with custom paper bags. From kraft to coated, with handles, foil stamping, and full-color print. Perfect for boutiques, pop-ups, and trade shows.",
    specs: [
      { label: "Material", value: "Kraft / Coated paper, 150–350gsm" },
      { label: "Print", value: "Full CMYK, Pantone, foil stamping" },
      { label: "Handle", value: "Twisted paper, flat tape, or die-cut" },
      { label: "MOQ", value: "From 500 units" },
      { label: "Lead time", value: "12–18 business days" },
      { label: "Eco options", value: "FSC-certified, recycled, soy inks" },
    ],
    whyBrands: "Retail brands using branded paper bags see 40% higher customer retention. A walking billboard for your brand.",
    emoji: "🛍️",
    active: true,
    image: "https://www.bupackeco.com/images/product_bag_1.jpg",
    url: "/products/custom-paper-bags",
  },
  {
    id: "subscription-boxes",
    name: "Subscription & Gift Boxes",
    tags: ["Monthly Box", "Premium", "Unboxing"],
    badge: "Premium",
    description:
      "Rigid gift boxes with magnetic closures, velvet inserts, and full custom print. Designed for subscription services, luxury products, and memorable unboxing experiences.",
    specs: [
      { label: "Material", value: "Rigid paperboard, 1.5–3mm thickness" },
      { label: "Print", value: "Full CMYK, Pantone, spot UV, embossing" },
      { label: "Closure", value: "Magnetic, ribbon tie, or slipcase" },
      { label: "MOQ", value: "From 100 units" },
      { label: "Lead time", value: "18–25 business days" },
      { label: "Interior", value: "Custom foam, velvet, or paper insert" },
    ],
    whyBrands: "Subscription brands with premium packaging see up to 40% higher 3-month retention. The box is part of the product.",
    emoji: "🎁",
    active: true,
    image: "https://www.bupackeco.com/images/product_box_2.jpg",
    url: "/products/rigid-gift-boxes",
  },
  {
    id: "folding-cartons",
    name: "Folding Cartons",
    tags: ["Retail", "Food", "Cosmetics"],
    badge: "Versatile",
    description:
      "Folding cartons for retail shelves, food packaging, and cosmetics. Tuck-end, auto-lock, or straight-tuck styles with full custom print and finishing.",
    specs: [
      { label: "Material", value: "SBS / C1S / C2S paperboard, 250–400gsm" },
      { label: "Print", value: "Full CMYK, Pantone, aqueous coating" },
      { label: "Style", value: "Tuck-end, auto-lock, gable, pillow" },
      { label: "MOQ", value: "From 1,000 units" },
      { label: "Lead time", value: "15–20 business days" },
      { label: "Food safe", value: "FDA-compliant coatings available" },
    ],
    whyBrands: "Folding cartons are the most cost-effective way to add brand value to retail products. Used by 80% of CPG brands.",
    emoji: "📦",
    active: true,
    image: "https://www.bupackeco.com/images/product_box_1.jpg",
    url: "/products/folding-cartons",
  },
];

let productsStore: Product[] = [...INITIAL_PRODUCTS];

export function getProducts(): Product[] {
  return [...productsStore];
}

export function getActiveProducts(): Product[] {
  return productsStore.filter((p) => p.active);
}

export function getProductById(id: string): Product | undefined {
  return productsStore.find((p) => p.id === id);
}

export function addProduct(product: Omit<Product, "id">): Product {
  const id = product.name.toLowerCase().replace(/[^a-z0-9]+/g, "-");
  const newProduct: Product = { ...product, id };
  productsStore.push(newProduct);
  return newProduct;
}

export function updateProduct(id: string, updates: Partial<Product>): Product | null {
  const index = productsStore.findIndex((p) => p.id === id);
  if (index === -1) return null;
  productsStore[index] = { ...productsStore[index], ...updates };
  return productsStore[index];
}

export function deleteProduct(id: string): boolean {
  const index = productsStore.findIndex((p) => p.id === id);
  if (index === -1) return false;
  productsStore.splice(index, 1);
  return true;
}

export function toggleProductActive(id: string): Product | null {
  const index = productsStore.findIndex((p) => p.id === id);
  if (index === -1) return null;
  productsStore[index].active = !productsStore[index].active;
  return productsStore[index];
}
