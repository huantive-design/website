export type Product = {
  slug: string;
  name: string;
  category: string;
  code: string;
  summary: string;
  tags: string[];
  specs: { label: string; value: string }[];
  customization: string[];
};

export const categories = [
  { slug: "massage-guns", name: "Massage Guns", note: "Portable percussion solutions" },
  { slug: "neck-shoulder", name: "Neck & Shoulder", note: "Ergonomic targeted recovery" },
  { slug: "back", name: "Back", note: "Support for home and travel" },
  { slug: "foot-leg", name: "Foot & Leg", note: "Compression and relaxation" },
  { slug: "handheld", name: "Handheld", note: "Flexible everyday formats" },
  { slug: "heat-recovery", name: "Heat & Recovery", note: "Thermal wellness concepts" },
];

export const products: Product[] = [
  {
    slug: "percussion-massager-pro",
    name: "Percussion Massager Pro",
    category: "Massage Guns",
    code: "Model pending",
    summary: "A market-ready platform for private-label recovery ranges.",
    tags: ["OEM available", "Specification pending", "MOQ pending"],
    specs: [
      { label: "Speed levels", value: "To be confirmed" },
      { label: "Battery", value: "To be confirmed" },
      { label: "Noise", value: "To be confirmed" },
      { label: "Packaging", value: "Custom options available" },
    ],
    customization: ["Logo", "Color", "Packaging", "Accessories"],
  },
  {
    slug: "neck-shoulder-massager",
    name: "Neck & Shoulder Massager",
    category: "Neck & Shoulder",
    code: "Model pending",
    summary: "An adaptable platform for wellness retail and e-commerce programs.",
    tags: ["Private label", "Sample support", "Certification pending"],
    specs: [
      { label: "Massage modes", value: "To be confirmed" },
      { label: "Heat function", value: "Optional" },
      { label: "Power", value: "To be confirmed" },
      { label: "Target market", value: "Global configurations" },
    ],
    customization: ["Logo", "Fabric", "Functions", "Gift box"],
  },
  {
    slug: "foot-recovery-system",
    name: "Foot Recovery System",
    category: "Foot & Leg",
    code: "Model pending",
    summary: "A retail-ready concept for relaxation and recovery collections.",
    tags: ["OEM available", "Packaging options", "MOQ pending"],
    specs: [
      { label: "Programs", value: "To be confirmed" },
      { label: "Intensity", value: "To be confirmed" },
      { label: "Voltage", value: "Market-specific" },
      { label: "Carton data", value: "To be provided" },
    ],
    customization: ["Logo", "Color", "Control panel", "Manual"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
