// Server-side price estimation engine — never shipped to the client.
// Tuned so each product's "From $X/unit" is reachable at reasonable volume.
// Replace the base prices below with real factory costs before going live.

export interface EstimateInput {
  product: "mailer" | "carton" | "rigid" | "bag";
  dims: { l: number; w: number; h: number }; // inches (server converts)
  unit: "in" | "mm";
  qty: number;
  material: string;
  printing: string;
  finishes: string[];
}

interface ProductDef {
  name: string;
  base: number;
  materials: [string, number][];
  printings: [string, number][];
}

export const PRODUCTS: Record<string, ProductDef> = {
  mailer: {
    name: "Mailer Box",
    base: 0.5,
    materials: [
      ["Kraft", 1.0],
      ["White-coated E-flute", 1.15],
      ["B-flute premium", 1.3],
    ],
    printings: [
      ["1-color", 0.92],
      ["Full color outside", 1.0],
      ["Inside + outside print", 1.22],
    ],
  },
  carton: {
    name: "Folding Carton",
    base: 0.3,
    materials: [
      ["SBS C1S", 1.0],
      ["FBB", 1.12],
      ["Kraft board", 0.95],
      ["Metallized board", 1.5],
    ],
    printings: [
      ["1-color", 0.9],
      ["4-color (CMYK)", 1.0],
      ["CMYK + 2 PMS", 1.25],
    ],
  },
  rigid: {
    name: "Rigid Gift Box",
    base: 1.5,
    materials: [
      ["2mm bookboard", 1.0],
      ["2.5mm bookboard", 1.1],
      ["3mm luxury board", 1.25],
    ],
    printings: [
      ["Wrapping paper print", 1.0],
      ["Linen / specialty wrap", 1.35],
    ],
  },
  bag: {
    name: "Paper Bag",
    base: 0.4,
    materials: [
      ["Kraft 150gsm", 1.0],
      ["Coated 200gsm", 1.15],
      ["Textured art paper", 1.3],
    ],
    printings: [
      ["1-color", 0.9],
      ["Full color", 1.0],
      ["Full color + matte lamination", 1.18],
    ],
  },
};

export const FINISHES: [string, number][] = [
  ["Foil stamping", 1.12],
  ["Spot UV", 1.08],
  ["Emboss / deboss", 1.06],
  ["Soft-touch lamination", 1.15],
  ["Gloss lamination", 1.04],
];

const QTY_TIERS = [100, 250, 500, 1000, 2500, 5000, 10000, 25000];
const QTY_DISC = [1.55, 1.35, 1.18, 1.0, 0.86, 0.76, 0.68, 0.6];

export interface EstimateResult {
  productName: string;
  unitLow: number;
  unitHigh: number;
  totalLow: number;
  totalHigh: number;
  currency: "USD";
  note: string;
}

export function estimate(input: EstimateInput): EstimateResult {
  const p = PRODUCTS[input.product];
  const conv = input.unit === "mm" ? 1 / 25.4 : 1;
  const L = input.dims.l * conv || 1;
  const W = input.dims.w * conv || 1;
  const H = input.dims.h * conv || 1;

  // Sub-linear scaling with surface area (doubling size doesn't double price)
  const areaFactor = Math.pow((L * W + W * H) / 108, 0.6);

  const mat = p.materials.find(([n]) => n === input.material)?.[1] ?? 1;
  const pr = p.printings.find(([n]) => n === input.printing)?.[1] ?? 1;

  const qty = input.qty;
  let disc = QTY_DISC[QTY_DISC.length - 1];
  for (let i = 0; i < QTY_TIERS.length; i++) {
    if (qty <= QTY_TIERS[i]) {
      disc = QTY_DISC[i];
      break;
    }
  }

  const fin = input.finishes.reduce(
    (acc, name) => acc * (FINISHES.find(([n]) => n === name)?.[1] ?? 1),
    1
  );

  const mid =
    p.base * mat * pr * disc * (0.5 + 0.5 * Math.max(0.6, areaFactor)) * fin;

  return {
    productName: p.name,
    unitLow: Math.round(mid * 0.85 * 100) / 100,
    unitHigh: Math.round(mid * 1.15 * 100) / 100,
    totalLow: Math.round(qty * mid * 0.85),
    totalHigh: Math.round(qty * mid * 1.15),
    currency: "USD",
    note: "Factory-direct estimate for standard structures. Final quote may vary with artwork, inserts and structural details. EXW Qingdao; DDP available.",
  };
}

/** Options payload for the client (labels + price-impact hints, no base prices) */
export function clientOptions() {
  const products = Object.entries(PRODUCTS).map(([key, p]) => ({
    key,
    name: p.name,
    materials: p.materials.map(([name, m]) => ({
      name,
      pct: Math.round((m - 1) * 100),
    })),
    printings: p.printings.map(([name, m]) => ({
      name,
      pct: Math.round((m - 1) * 100),
    })),
  }));
  const finishes = FINISHES.map(([name, m]) => ({
    name,
    pct: Math.round((m - 1) * 100),
  }));
  const qtyTiers = QTY_TIERS;
  return { products, finishes, qtyTiers };
}
