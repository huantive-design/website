export type Product = {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  intent: "transactional" | "commercial";
  metaTitle: string;
  metaDescription: string;
  summary: string;
  images: string[];
  tags: string[];
  features: string[];
  customization: string[];
  applications: string[];
  complianceNote?: string;
  specs?: ProductSpecs;
  buyerSummary?: string;
  procurementNotes?: string[];
  faqs?: { q: string; a: string }[];
  imageAlts?: string[];
};

/** Listed factory data for a specific model, used on the product detail page. */
export type ProductSpecs = {
  model: string;
  colors?: string;
  battery?: string;
  power?: string;
  productSize?: string;
  netGrossWeight?: string;
  packageSize?: string;
  cartonSize?: string;
  cartonWeight?: string;
};

/**
 * Commercial terms that apply across the massager range. Kept in one place so a
 * change to MOQ, lead time or warranty never has to be edited product by product.
 */
export const tradeTerms = {
  moqBranding: "1,000 pcs per item for custom logo, manual or packaging",
  moqColor: "2,000 pcs per item for a custom color",
  accessoryScope: "Included accessories are confirmed by selected model, bill of materials and approved quotation",
  packagingScope: "Retail box, manual language, carton data and private-label artwork are confirmed by model and order scope",
  complianceScope: "Applicable test reports and conformity documents are confirmed by exact model, certificate holder, standard, date and destination market before quotation",
  warranty: "12-month quality warranty",
  leadTime: "20-30 working days for orders below 5,000 pcs; negotiated above that volume",
  paymentBulk: "Bulk orders: 30% T/T on PI confirmation, 70% balance before shipment",
  paymentSmall: "Small orders: 100% T/T on PI confirmation",
  quoteValidity: "Quotations valid for one month",
};

export type Category = {
  slug: string;
  name: string;
  primaryKeyword: string;
  secondaryKeywords: string[];
  metaTitle: string;
  metaDescription: string;
  heading: string;
  intro: string;
  buyerNote: string;
  image: string;
};

export const categories: Category[] = [
  {
    slug: "massage-guns",
    name: "Massage Guns",
    primaryKeyword: "massage gun manufacturer",
    secondaryKeywords: ["percussion massage gun supplier", "fascia gun OEM factory", "private label massage gun"],
    metaTitle:
      "Massage Gun Manufacturer in China | OEM & Wholesale | HUANTIVE",
    metaDescription:
      "Source mini, deep tissue, and hot & cold massage guns directly from a China manufacturer. Explore OEM options, private label packaging, and factory quotations.",
    heading: "Massage Gun Manufacturer for OEM & Wholesale Buyers",
    intro:
      "HUANTIVE manufactures massage guns for private label brands, distributors, and wholesale buyers. Compare mini, deep tissue, and hot & cold models, explore customization options, and request model-specific specifications, MOQ, and sample details.",
    buyerNote: "Four percussion platforms, including hot-and-cold and cooling-design concepts.",
    image: "/images/massage-gun-gym-hero.jpg",
  },
  {
    slug: "neck-shoulder-massagers",
    name: "Neck & Shoulder Massagers",
    primaryKeyword: "neck and shoulder massager manufacturer",
    secondaryKeywords: ["shiatsu neck massager supplier", "wearable neck massager factory", "OEM neck massager China"],
    metaTitle:
      "Neck & Shoulder Massagers Manufacturer | OEM & Wholesale | HUANTIVE",
    metaDescription:
      "Source neck & shoulder massagers from HUANTIVE. Explore OEM branding, specifications, packaging options, MOQ, lead time and model-specific documentation. Request a factory quote.",
    heading: "Neck and shoulder massager manufacturing",
    intro:
      "Wearable and wrap-style neck platforms for retail, gifting and e-commerce ranges. Available with kneading mechanisms, optional heat and a choice of power configurations.",
    buyerNote: "Six neck and shoulder platforms across wearable, wrap and structured formats.",
    image: "/images/neck-massager-home-reading-hero.jpg",
  },
  {
    slug: "foot-massagers",
    name: "Foot Massagers",
    primaryKeyword: "foot massager manufacturer",
    secondaryKeywords: ["shiatsu foot massager supplier", "foot and calf massager factory", "OEM foot massage machine"],
    metaTitle:
      "Foot Massagers Manufacturer | OEM & Wholesale | HUANTIVE",
    metaDescription:
      "Source foot massagers from HUANTIVE. Explore OEM branding, specifications, packaging options, MOQ, lead time and model-specific documentation. Request a factory quote.",
    heading: "Foot massager manufacturing",
    intro:
      "Enclosed dual-foot and foot-plus-calf platforms for premium home-wellness ranges. Roller layout, heat function and voltage configuration are model specific.",
    buyerNote: "Two enclosed foot platforms covering feet only and feet with lower calves.",
    image: "/products/9/image-1.png",
  },
  {
    slug: "leg-massagers",
    name: "Leg Massagers",
    primaryKeyword: "leg massager manufacturer",
    secondaryKeywords: ["air compression leg massager supplier", "compression boots manufacturer", "OEM leg massager factory"],
    metaTitle:
      "Leg Massagers Manufacturer | OEM & Wholesale | HUANTIVE",
    metaDescription:
      "Source leg massagers from HUANTIVE. Explore OEM branding, specifications, packaging options, MOQ, lead time and model-specific documentation. Request a factory quote.",
    heading: "Compression leg massager manufacturing",
    intro:
      "Pneumatic compression platforms from calf sleeves to full lower-leg boots. Specified by chamber count, pressure range and controller type to suit your program.",
    buyerNote: "Two compression platforms for calf-only and full lower-leg recovery.",
    image: "/products/8/image-1.webp",
  },
  {
    slug: "massage-pillows-cushions",
    name: "Massage Pillows & Cushions",
    primaryKeyword: "massage pillow manufacturer",
    secondaryKeywords: ["shiatsu massage pillow supplier", "massage seat cushion manufacturer", "back massage cushion OEM"],
    metaTitle:
      "Massage Pillows & Cushions Manufacturer | OEM & Wholesale | HUANTIVE",
    metaDescription:
      "Source massage pillows & cushions from HUANTIVE. Explore OEM branding, specifications, packaging options, MOQ, lead time and model-specific documentation. Request a factory quote.",
    heading: "Massage pillow and seat cushion manufacturing",
    intro:
      "Compact kneading pillows and chair-mounted full-back cushions. Node layout, heat option and control method are defined by the selected model.",
    buyerNote: "Three platforms covering compact pillows and full-back seat cushions.",
    image: "/products/16/image-1.jpg",
  },
  {
    slug: "targeted-body-massagers",
    name: "Targeted Body Massagers",
    primaryKeyword: "targeted body massager manufacturer",
    secondaryKeywords: ["hand massager supplier", "lumbar massage belt manufacturer", "facial massager OEM factory"],
    metaTitle:
      "Targeted Body Massagers Manufacturer | OEM & Wholesale | HUANTIVE",
    metaDescription:
      "Source targeted body massagers from HUANTIVE. Explore OEM branding, specifications, packaging options, MOQ, lead time and model-specific documentation. Request a factory quote.",
    heading: "Targeted body massager manufacturing",
    intro:
      "Focused-area devices for hands, lower back, ankles and facial care. Available with heat, EMS and vibration configurations to suit your range.",
    buyerNote: "Five targeted platforms across hand, lumbar, ankle and facial formats.",
    image: "/products/21/image-1.jpg",
  },
];

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const productsByCategory = (slug: string) => products.filter((product) => product.categorySlug === slug);

const imageExtensions: Record<number, Record<number, "jpg" | "png" | "webp">> = {
  1: { 1: "webp" },
  2: { 1: "png", 2: "webp", 3: "png", 4: "png", 5: "png" },
  5: { 2: "webp" },
  7: { 1: "png", 2: "png", 3: "png", 4: "png", 5: "png", 6: "png" },
  8: { 1: "webp", 2: "webp", 3: "webp", 4: "webp", 5: "webp" },
  9: { 1: "png", 2: "png", 3: "png", 4: "png" },
  12: { 1: "webp", 2: "webp", 3: "webp", 4: "webp", 5: "webp", 6: "webp" },
  14: { 1: "webp", 2: "webp", 3: "webp", 4: "webp", 5: "webp", 6: "webp" },
  15: { 1: "jpg", 5: "jpg", 6: "jpg" },
  17: { 1: "webp" },
  19: { 5: "png", 6: "png" },
};

const gallery = (folder: number, count: number, pngPositions: number[] = []) =>
  Array.from({ length: count }, (_, index) => {
    const position = index + 1;
    const extension = imageExtensions[folder]?.[position] ?? (pngPositions.includes(position) ? "png" : "jpg");
    return `/products/${folder}/image-${position}.${extension}`;
  });

export const products: Product[] = [
  {
    slug: "wearable-neck-massager",
    name: "Wearable Neck Massager",
    category: "Neck & Shoulder Massagers",
    categorySlug: "neck-shoulder-massagers",
    primaryKeyword:
      "wearable neck massager manufacturer",
    secondaryKeywords: ["cordless neck massager OEM", "TENS neck massager supplier", "private label neck massager manufacturer"],
    intent: "transactional",
    metaTitle:
      "Wearable Neck Massager OEM Supplier | HUANTIVE",
    metaDescription:
      "Source NM22 / ST-304 wearable TENS neck massager with heat, voice prompts, remote control and 1200mAh battery. Review private-label packaging and request factory pricing.",
    summary:
      "A cordless NM22 / ST-304 wearable TENS neck massager platform for wellness retail, gifting and e-commerce ranges.",
    images: gallery(1, 4),
    tags: ["OEM / ODM", "Private label", "Sample inquiry"],
    specs: {
      model: "NM22 / ST-304",
      colors: "White",
      battery: "1200 mAh; 120 min charge, 300 min runtime",
      power: "5W / DC 5V 1A",
      productSize: "16 x 16 x 5 cm",
      netGrossWeight: "300 g / 325 g",
      packageSize: "18 x 16 x 6 cm",
      cartonSize: "51.5 x 35 x 24.5 cm (24 pcs/carton)",
      cartonWeight: "9 kg",
    },
    features: [
      "Six massage modes with 15 adjustable intensity levels",
      "TENS pulse output for a compact, wearable neck-care experience",
      "Constant-temperature heat with smart temperature control",
      "Voice prompts plus remote-control operation",
      "Customizable voice-prompt version available for private-label programs",
      "1200 mAh battery: 120-minute charge for 300 minutes of use",
    ],
    customization: ["Logo", "Color", "Packaging", "Market configuration"],
    applications: ["Wellness retail", "E-commerce brands", "Corporate gifting"],
    buyerSummary:
      "NM22 / ST-304 is a cordless wearable neck massager for OEM buyers comparing TENS pulse modes, heat, remote control, battery runtime and retail packaging.",
    procurementNotes: [
          "Use this open-neck platform when your range needs a lightweight cordless neck device with TENS pulse, heat and remote-control positioning.",
          "Specifications include a 1200 mAh battery, 120-minute charging time, 300-minute working time, 5W / DC 5V 1A power and 24 pcs per carton packing.",
          "Voice prompts can be customized, making the model suitable for private-label wellness retail and gifting programs."
    ],
    faqs: [
          {
                "q": "What makes NM22 / ST-304 suitable for private-label neck massager programs?",
                "a": "The model combines six massage modes, 15 intensity levels, TENS pulse, constant-temperature heat, voice prompts, remote control and a customizable voice-prompt option."
          },
          {
                "q": "Which battery and runtime values are available for this model?",
                "a": "Specifications include a 1200 mAh battery, 120-minute charging time and 300-minute working time."
          },
          {
                "q": "What packaging data should buyers use for quotation review?",
                "a": "The listed product size is 16 x 16 x 5 cm, package size is 18 x 16 x 6 cm, and carton size is 51.5 x 35 x 24.5 cm with 24 pcs per carton."
          }
    ],
    imageAlts: [
          "NM22 ST-304 wearable neck massager for OEM wellness buyers",
          "Wearable neck massager open-neck product detail",
          "Cordless neck massager retail packaging and product detail",
          "Private label wearable neck massager side view"
    ],
  },
  {
    slug: "shiatsu-neck-shoulder-massager",
    name: "Shiatsu Neck & Shoulder Massager",
    category: "Neck & Shoulder Massagers",
    categorySlug: "neck-shoulder-massagers",
    primaryKeyword:
      "shiatsu neck and shoulder massager manufacturer",
    secondaryKeywords: ["shiatsu shoulder massager OEM", "heated neck massager supplier", "private label neck and shoulder massager"],
    intent: "transactional",
    metaTitle:
      "Shiatsu Neck & Shoulder Massager Manufacturer | OEM",
    metaDescription:
      "Source OY-S003 Shiatsu Neck & Shoulder Massager with reversible kneading nodes, heat, speed control, home power and car adapter support. Request OEM quotation.",
    summary:
      "A retail-ready OY-S003 shiatsu neck and shoulder massager for wholesale, distributor and private-label wellness programs.",
    images: gallery(2, 5, [1, 3, 4, 5]),
    tags: ["Home and car use", "OEM / ODM", "B2B supply"],
    specs: {
      model: "OY-S003",
      colors: "Black / Red",
      power: "Input 110-240V; Output DC 12.6V 1A; Rated power 24W",
      productSize: "50 x 40 cm",
      netGrossWeight: "1.3 / 1.5 kg",
      packageSize: "40 x 21 x 17 cm",
      cartonSize: "53.5 x 41.5 x 42 cm (6 pcs/carton)",
      cartonWeight: "9.3 / 12.6 kg",
    },
    features: [
      "Reversible shiatsu kneading nodes for multi-direction massage",
      "Infrared heat with two selectable intensity levels",
      "Three adjustable speed levels from gentle to strong",
      "Controller indicator lights show remaining battery status",
      "15-minute auto-off timer",
      "Covers neck, shoulder, back, waist, abdomen, arm, leg and foot",
      "Lithium battery, mains adapter and car plug for home, office or vehicle use",
      "Gift-box packed for retail and corporate gifting",
    ],
    customization: ["Upholstery", "Control layout", "Logo", "Retail box"],
    applications: ["Home wellness retail", "Automotive accessory channels", "Distributor programs"],
    buyerSummary:
      "OY-S003 is a wrap-style shiatsu neck and shoulder massager for buyers comparing kneading nodes, heat settings, power options, gift-box packaging and OEM scope.",
    procurementNotes: [
          "This platform fits buyers sourcing a retail-ready wrap massager that can be positioned for neck, shoulder, back, waist, arm, leg and foot use.",
          "Specifications include 24W rated power, 50 x 40 cm product size, 40 x 21 x 17 cm package size and 6 pcs per carton.",
          "Lithium battery, adapter, car plug and gift-box packaging support distributor, automotive accessory and corporate gifting channels."
    ],
    faqs: [
          {
                "q": "Which functions are available for model OY-S003?",
                "a": "Specifications include reversible shiatsu kneading heads, two-intensity infrared heat, three speeds, controller indicator lights, 15-minute auto-off and use across multiple body areas."
          },
          {
                "q": "Is this model supplied for both home and vehicle use?",
                "a": "Yes. Specifications include lithium battery, adapter and car plug support for home, office or car use."
          },
          {
                "q": "What is the carton configuration for OY-S003?",
                "a": "The carton size is listed as 53.5 x 41.5 x 42 cm with 6 pcs per carton and 9.3 / 12.6 kg carton N.W/G.W."
          }
    ],
    imageAlts: [
          "OY-S003 shiatsu neck and shoulder massager OEM supplier",
          "Wrap-style shiatsu massager control and fabric detail",
          "Neck shoulder massager home and car use product image",
          "Private label shiatsu neck massager gift box detail"
    ],
  },
  {
    slug: "kneading-neck-shoulder-massager",
    name: "Kneading Neck & Shoulder Massager",
    category: "Neck & Shoulder Massagers",
    categorySlug: "neck-shoulder-massagers",
    primaryKeyword:
      "kneading neck shoulder massager supplier",
    secondaryKeywords: ["pull strap shoulder massager wholesale", "heated kneading neck massager OEM", "private label shoulder wrap"],
    intent: "transactional",
    metaTitle:
      "Kneading Neck Shoulder Massager Supplier | HUANTIVE",
    metaDescription:
      "Source WY-NM19 kneading neck and shoulder massager with infrared heat, three speeds, pull-strap design and gift-box packaging. Review OEM options.",
    summary:
      "A WY-NM19 pull-strap kneading neck and shoulder massager for wholesale, retail and private-label programs.",
    images: gallery(3, 6),
    tags: ["Pull-strap design", "Private label", "Wholesale"],
    specs: {
      model: "WY-NM19",
      colors: "Black / Blue",
      power: "Input 110-240V; Output DC 12.6V 1A; Rated power 24W",
      productSize: "50 x 40 cm",
      netGrossWeight: "1.3 / 1.5 kg",
      packageSize: "40 x 17 x 20 cm",
      cartonSize: "53.5 x 41.5 x 42 cm (6 pcs/carton)",
      cartonWeight: "9.3 / 12.6 kg",
    },
    features: [
      "Kneading massage combined with infrared heating",
      "Soft shiatsu heads that reverse in two directions",
      "Three adjustable speed levels from gentle to strong",
      "15-minute auto-off timer",
      "Covers neck, shoulder, back, waist, abdomen, arm, leg and foot",
      "Mains adapter and car plug supplied for home, office or vehicle use",
      "Gift-box packed for retail and corporate gifting",
    ],
    customization: ["Fabric", "Color", "Controls", "Packaging"],
    applications: ["Wholesale distribution", "Pharmacy and wellness retail", "Promotional programs"],
    buyerSummary: "Model WY-NM19 is a pull-strap kneading neck and shoulder massager with infrared heat, three speeds and adapter plus car plug support.",
    procurementNotes: [
          "Use WY-NM19 when your B2B program needs a pull-strap shoulder wrap with kneading and heat rather than a cordless wearable format.",
          "Specifications include 24W rated power, 50 x 40 cm product size, 40 x 17 x 20 cm package size and 6 pcs per carton.",
          "The model is suited to wholesale distribution, pharmacy and wellness retail, and promotional programs that need gift-box packaging."
    ],
    faqs: [
          {
                "q": "What is available for model WY-NM19?",
                "a": "Specifications include kneading massage, infrared heat, soft shiatsu heads that reverse in two directions, three speeds, 15-minute auto-off and multi-area use."
          },
          {
                "q": "Does WY-NM19 include vehicle-use support?",
                "a": "Yes. Specifications include adapter and car plug support for home, office or car use."
          },
          {
                "q": "Which package size is listed for this model?",
                "a": "The listed package size is 40 x 17 x 20 cm, with a 53.5 x 41.5 x 42 cm carton containing 6 pcs."
          }
    ],
    imageAlts: [
          "WY-NM19 kneading neck and shoulder massager wholesale OEM",
          "Pull strap shoulder massager product detail",
          "Kneading neck massager heat function image",
          "Private label neck shoulder massager retail image"
    ],
  },
  {
    slug: "heated-neck-shoulder-massager",
    name: "Heated Neck & Shoulder Massager",
    category: "Neck & Shoulder Massagers",
    categorySlug: "neck-shoulder-massagers",
    primaryKeyword:
      "heated neck shoulder massager OEM",
    secondaryKeywords: ["heated neck massager manufacturer", "infrared shoulder massager supplier", "private label heated shoulder massager"],
    intent: "transactional",
    metaTitle:
      "Heated Neck Shoulder Massager OEM | HUANTIVE",
    metaDescription:
      "Source OY18NM17 heated neck and shoulder massager with shiatsu kneading, infrared heat, PU leather finish and retail gift-box options. Request OEM pricing.",
    summary:
      "An OY18NM17 heated neck and shoulder massager platform for OEM retail, gifting and wellness programs.",
    images: gallery(4, 6),
    tags: ["Heat option", "OEM / ODM", "Retail-ready format"],
    specs: {
      model: "OY18NM17",
      colors: "Black / Grey",
      power: "Input 110-240V; Output DC 12V 2A; Rated power 24W",
      productSize: "50 x 40 cm",
      netGrossWeight: "1.3 / 1.5 kg",
      packageSize: "40 x 17 x 20 cm",
      cartonSize: "53.5 x 41.5 x 42 cm (6 pcs/carton)",
      cartonWeight: "9.3 / 12.6 kg",
    },
    features: [
      "Infrared heating reaching approximately 45 C",
      "Reversible shiatsu kneading nodes for multi-direction massage",
      "Branded pure copper motor for durability, quiet running and torque",
      "Three adjustable speed levels from gentle to strong",
      "15-minute auto-off timer",
      "Eco-friendly ABS massage heads and inner module",
      "PU leather finish with a matching carry bag",
      "Mains adapter and car plug supplied for home, office or vehicle use",
    ],
    customization: ["Logo", "Materials", "Heat settings", "Gift box"],
    applications: ["Retail chains", "Seasonal gifting", "Wellness e-commerce"],
    buyerSummary: "Model OY18NM17 is a heated neck and shoulder massager with reversible shiatsu kneading heads, approximately 45 C infrared heat and PU leather finish.",
    procurementNotes: [
          "This model is appropriate when buyers need a heat-focused neck and shoulder massager with carry bag and retail gift-box presentation.",
          "Specifications include input 110-240V, DC 12V 2A output, 24W rated power, 50 x 40 cm product size and 6 pcs per carton.",
          "Model materials include ABS for massage heads and inner module, PU leather, pure copper motor and matching carry bag."
    ],
    faqs: [
          {
                "q": "What heat value is available for OY18NM17?",
                "a": "Specifications state that the infrared heating function can reach around 45 C."
          },
          {
                "q": "Which materials are listed for this heated neck and shoulder massager?",
                "a": "Specifications include eco-friendly ABS materials for massage heads and inner module, a PU leather finish and a matching carry bag."
          },
          {
                "q": "What power data is shown for this model?",
                "a": "Specifications include input 110-240V, output DC 12V 2A and rated power 24W."
          }
    ],
    imageAlts: [
          "OY18NM17 heated neck and shoulder massager OEM factory",
          "PU leather heated shoulder massager detail",
          "Infrared heat neck massager product image",
          "Private label heated neck shoulder massager carry bag"
    ],
  },
  {
    slug: "wraparound-shoulder-massager",
    name: "Wraparound Shoulder Massager",
    category: "Neck & Shoulder Massagers",
    categorySlug: "neck-shoulder-massagers",
    primaryKeyword:
      "wraparound shoulder massager wholesale",
    secondaryKeywords: ["padded shoulder massager supplier", "upper body massager OEM", "private label massage wrap"],
    intent: "transactional",
    metaTitle:
      "Wraparound Shoulder Massager Wholesale | HUANTIVE",
    metaDescription:
      "Source WY-NM15 wraparound shoulder massager with kneading, infrared heat, three speeds and padded arm straps. Review wholesale and OEM options.",
    summary:
      "A WY-NM15 padded wraparound shoulder massager for distributor, home comfort and private-label collections.",
    images: gallery(5, 4),
    tags: ["Padded wrap", "OEM available", "B2B quotation"],
    specs: {
      model: "WY-NM15",
      colors: "Black",
      power: "Input 110-240V; Output DC 12.6V 1A; Rated power 24W",
      productSize: "50 x 40 cm",
      netGrossWeight: "1.3 / 1.5 kg",
      packageSize: "40 x 21 x 17 cm",
      cartonSize: "53.5 x 41.5 x 42 cm (6 pcs/carton)",
      cartonWeight: "9.3 / 12.6 kg",
    },
    features: [
      "Kneading massage combined with infrared heating",
      "Soft shiatsu heads that reverse in two directions",
      "Three adjustable speed levels from gentle to strong",
      "15-minute auto-off timer",
      "Mains adapter and car plug supplied for home, office or vehicle use",
      "Wrap-over arm straps for hands-free positioning",
    ],
    customization: ["Surface material", "Color", "Control panel", "Branding"],
    applications: ["Distributor ranges", "Home comfort retail", "Private-label collections"],
    buyerSummary: "Model WY-NM15 is a black wraparound shoulder massager with kneading, infrared heat, three speeds and adapter plus car plug support.",
    procurementNotes: [
          "WY-NM15 is a padded wraparound option for buyers comparing shoulder and upper-body massage formats for retail collections.",
          "Specifications include 24W rated power, 50 x 40 cm product size, 40 x 21 x 17 cm package size and 6 pcs per carton.",
          "The function set is based on kneading massage, infrared heat, soft reversible shiatsu heads, three speeds and 15-minute auto-off."
    ],
    faqs: [
          {
                "q": "What functions are available for WY-NM15?",
                "a": "Specifications include kneading massage, infrared heat, soft shiatsu heads reversing in two directions, three speeds and 15-minute auto-off."
          },
          {
                "q": "Which color is listed for this model?",
                "a": "The supplied color is black."
          },
          {
                "q": "What carton data is available?",
                "a": "The carton size is listed as 53.5 x 41.5 x 42 cm with 6 pcs per carton and 9.3 / 12.6 kg carton N.W/G.W."
          }
    ],
    imageAlts: [
          "WY-NM15 wraparound shoulder massager OEM supplier",
          "Black padded shoulder massager detail",
          "Infrared kneading shoulder massager product image",
          "Wholesale wraparound massager retail view"
    ],
  },
  {
    slug: "u-shaped-neck-massager",
    name: "U-Shaped Neck Massager with Heat",
    category: "Neck & Shoulder Massagers",
    categorySlug: "neck-shoulder-massagers",
    primaryKeyword:
      "u shaped neck massager manufacturer",
    secondaryKeywords: ["structured neck massager supplier", "travel neck massager OEM", "gift neck massager wholesale"],
    intent: "transactional",
    metaTitle:
      "U Shaped Neck Massager Manufacturer | HUANTIVE",
    metaDescription:
      "Source HT-ST321 U-shaped neck massager with 1500mAh battery, heating switch, three modes and structured clamping design. Request OEM quote.",
    summary:
      "An HT-ST321 structured U-shaped neck massager for travel retail, gift programs and wellness e-commerce.",
    images: gallery(18, 6),
    tags: ["U-shaped form", "Neck-focused", "OEM available"],
    specs: {
      model: "HT-ST321",
      colors: "Grey",
      battery: "1500 mAh",
      power: "Input DC 5V 2A; charging power 10W",
      productSize: "22 x 22.5 x 8.5 cm",
      netGrossWeight: "1100 g gross with color box",
      packageSize: "24.5 x 25.5 x 9.5 cm",
      cartonSize: "52.5 x 51.5 x 31 cm (12 pcs/carton)",
      cartonWeight: "13 kg",
    },
    features: [
      "Earphone-style clamping design that mimics manual deep-pressure technique",
      "Independent heating switch with smart heat control",
      "Three modes: normal, fast and inching",
      "1500 mAh battery for cordless use",
      "Simple single-hand operation",
    ],
    customization: ["Surface material", "Color", "Logo", "Gift box"],
    applications: ["Travel retail", "Gift programs", "Wellness e-commerce"],
    buyerSummary: "Model HT-ST321 is a grey U-shaped neck massager with 1500 mAh battery, independent heating switch and three operating modes.",
    procurementNotes: [
          "This U-shaped model is useful for travel retail, gifting and neck-focused wellness programs requiring a structured clamping design.",
          "Specifications include 1500 mAh battery, DC 5V 2A input, 10W charging power, 22 x 22.5 x 8.5 cm product size and 12 pcs per carton.",
          "The listed mode set includes normal, fast and inching modes with independent heating control."
    ],
    faqs: [
          {
                "q": "Which operating modes are available for HT-ST321?",
                "a": "Specifications include normal mode, fast mode and inching mode."
          },
          {
                "q": "What battery and charging data is available?",
                "a": "Specifications include a 1500 mAh battery, input DC 5V 2A and 10W charging power."
          },
          {
                "q": "What is the listed carton packing?",
                "a": "The carton size is 52.5 x 51.5 x 31 cm with 12 pcs per carton and 13 kg carton weight."
          }
    ],
    imageAlts: [
          "HT-ST321 U-shaped neck massager OEM gift program",
          "Grey U-shaped neck massager heating switch detail",
          "Structured neck massager clamping design image",
          "Wholesale U-shaped neck massager product detail"
    ],
  },
  {
    slug: "hot-cold-massage-gun",
    name: "Hot and Cold Massage Gun",
    category: "Massage Guns",
    categorySlug: "massage-guns",
    primaryKeyword:
      "hot and cold massage gun manufacturer",
    secondaryKeywords: ["thermal massage gun OEM", "hot cold therapy massage gun supplier", "private label hot cold massage gun"],
    intent: "transactional",
    metaTitle:
      "Hot and Cold Massage Gun Manufacturer | HUANTIVE",
    metaDescription:
      "Source hot and cold massage gun platforms for OEM recovery ranges. Confirm model, thermal head, temperature range, attachments, packaging and carton data before quotation.",
    summary:
      "A hot and cold percussion massage gun platform for recovery brands planning thermal-head options, accessory bundles and private-label packaging before OEM quotation.",
    images: gallery(11, 6),
    tags: ["Hot and cold head", "Percussion format", "OEM / ODM"],
    features: ["Interchangeable heads", "Hot & Cold Therapy Attachment", "Adjustable hot and cold temperature settings"],
    customization: ["Color", "Attachments", "Logo", "Carrying case"],
    applications: ["Sports recovery brands", "Physiotherapy channels", "Premium retail"],
    buyerSummary:
      "A hot and cold massage gun platform for recovery brands that need thermal attachment options, accessory planning, packaging choices and private-label quotation support.",
    procurementNotes: [
          "Use this hot and cold massage gun platform for recovery, sports retail or private-label programs where thermal attachment differentiation matters.",
          "Before sampling, align the thermal-head model, attachment list, temperature range, runtime target, packaging route and destination-market documentation.",
          "This page is structured for commercial RFQs: buyers can request model options, accessory scope, packaging artwork requirements and quotation terms in one brief."
    ],
    faqs: [
          {
                "q": "What should buyers confirm for a hot and cold massage gun program?",
                "a": "Confirm the thermal-head option, hot and cold temperature range, massage heads, battery, charging data, package size and carton quantity."
          },
          {
                "q": "Is this product suitable for private-label recovery ranges?",
                "a": "Yes. It is positioned for recovery brands, sports retail and premium wellness ranges that need a more differentiated percussion massager platform."
          },
          {
                "q": "What should be included in the RFQ?",
                "a": "Send target quantity, destination market, required attachment set, logo or packaging needs, sample request and any compliance checklist."
          }
    ],
    imageAlts: [
          "Hot and cold massage gun OEM platform",
          "Thermal massage gun attachment detail",
          "Percussion massage gun hot cold therapy product image",
          "Private label hot cold massage gun accessory view"
    ],
  },
  {
    slug: "deep-tissue-massage-gun",
    name: "Deep Tissue Massage Gun",
    category: "Massage Guns",
    categorySlug: "massage-guns",
    primaryKeyword:
      "deep tissue massage gun wholesale",
    secondaryKeywords: ["HT-HN026 massage gun OEM", "percussion massage gun manufacturer", "private label fascia gun factory", "2500mAh massage gun supplier"],
    intent: "transactional",
    metaTitle:
      "HT-HN026 Deep Tissue Massage Gun | OEM & Wholesale | HUANTIVE",
    metaDescription:
      "Compare the HT-HN026 deep tissue massage gun for wholesale and private-label programs. Review 1300-3200 RPM, 2500mAh battery, eight heads, MOQ and lead time.",
    summary:
      "A full-size HT-HN026 percussion massage gun platform for OEM, wholesale and private-label recovery programs.",
    images: gallery(12, 6),
    tags: ["Multiple attachments", "OEM available", "Wholesale"],
    specs: {
      model: "HT-HN026",
      colors: "Grey, Black, Blue, Carbon",
      battery: "2500 mAh; 2-3 h charge for 4-6 h use",
      power: "Input 110-240V 50/60Hz; 24V brushless motor 20W; 1300-3200 RPM",
      productSize: "23.6 x 16.6 x 7.5 cm",
      packageSize: "28.5 x 23.8 x 10.2 cm",
      cartonSize: "52.5 x 36.5 x 51.5 cm (10 pcs/carton)",
    },
    features: [
      "Seven intensity levels across a 1300-3200 RPM range",
      "Eight massage heads for different muscle groups",
      "Brushless silent motor running below 50 dB",
      "Dedicated charging chip with constant current and voltage",
      "Overheat and overcharge protection",
      "LCD touch controls with remaining-power display",
      "2500 mAh battery: 2-3 h charge for 4-6 h of use",
      "Handheld storage bag and gift-box packaging",
    ],
    customization: ["Shell color", "Attachments", "Display", "Case and packaging"],
    applications: ["Fitness and gym channels", "Sports retail", "Distributor programs"],
    buyerSummary: "HT-HN026 is a full-size deep tissue massage gun for OEM and wholesale buyers comparing speed range, battery, attachment set, packaging and factory quotation terms.",
    procurementNotes: [
          "Use HT-HN026 when your range needs a full-size percussion massage gun for fitness retailers, sports recovery brands, distributors or private-label wellness programs.",
          "Specifications include a 24V brushless 20W motor, seven intensity levels, 1300-3200 RPM, eight massage heads, 2500 mAh battery and 10 pcs per carton.",
          "Before bulk production, buyers should confirm the final attachment set, carrying bag, gift box artwork, manual language, sample approval terms and destination-market documentation."
    ],
    faqs: [
          {
                "q": "What performance range is available for HT-HN026?",
                "a": "Specifications include seven intensity levels, 1300-3200 RPM frequency and eight massage heads."
          },
          {
                "q": "What motor and battery information is available?",
                "a": "Specifications include a 24V brushless 20W motor, 2500 mAh battery, 2-3 hour charging time and 4-6 hour use."
          },
          {
                "q": "Which package data is listed?",
                "a": "The package size is 28.5 x 23.8 x 10.2 cm and carton size is 52.5 x 36.5 x 51.5 cm with 10 pcs per carton."
          }
    ],
    imageAlts: [
          "HT-HN026 deep tissue massage gun wholesale OEM",
          "Deep tissue massage gun eight heads accessory set",
          "Brushless percussion massager LCD control detail",
          "Private label fascia gun carrying bag packaging"
    ],
  },
  {
    slug: "mini-massage-gun",
    name: "Mini Massage Gun",
    category: "Massage Guns",
    categorySlug: "massage-guns",
    primaryKeyword:
      "mini massage gun OEM",
    secondaryKeywords: ["compact massage gun supplier", "portable fascia gun private label", "travel massage gun manufacturer"],
    intent: "transactional",
    metaTitle:
      "Mini Massage Gun OEM Supplier | HUANTIVE",
    metaDescription:
      "Source HT-HN049 mini massage gun with 2000mAh battery, five heads, five intensities and hot/cold head options. Review private-label packaging.",
    summary:
      "A compact HT-HN049 mini massage gun platform for travel retail, e-commerce, gifting and private-label programs.",
    images: gallery(13, 6),
    tags: ["Compact format", "Private label", "Retail program"],
    specs: {
      model: "HT-HN049",
      colors: "Black, White, Red, Green",
      battery: "2000 mAh Li-ion, USB charging; 2-2.5 h full charge",
      power: "Rated output 5V 2A; rated power 30W",
      productSize: "15.5 x 17 x 5.5 cm",
      netGrossWeight: "0.42 kg",
      cartonSize: "52.5 x 26.5 x 44.3 cm (12 pcs/carton)",
    },
    features: [
      "Five interchangeable massage heads for different body areas",
      "Brushless motor running below 55 dB",
      "Five adjustable intensity levels",
      "Heating and cooling head: 45-50 C heat and 13-19 C cooling",
      "Runtime: 1.5-2 h normal, 3 h heated, 40 min cooling",
      "Auto-off: 15 min normal, 10 min heated, 6 min cooling",
      "Four colorways and premium storage bag packaging per unit",
    ],
    customization: ["Color", "Logo", "Attachment set", "Gift box"],
    applications: ["E-commerce marketplaces", "Travel retail", "Promotional gifting"],
    buyerSummary:
      "HT-HN049 is a compact mini massage gun for OEM buyers comparing portability, hot/cold head options, colorways, runtime, accessory set and gift packaging.",
    procurementNotes: [
          "HT-HN049 is suitable for portable recovery, travel retail and promotional gifting programs that need compact format and color options.",
          "Specifications include black, white, red and green colors, 2000 mAh battery, 5V 2A output, 30W rated power and 12 pcs per carton.",
          "The listed hot/cold head range is 45-50 C heat and 13-19 C cooling, with separate runtime and auto-off values for normal, heating and cooling modes."
    ],
    faqs: [
          {
                "q": "What temperature ranges are listed for HT-HN049?",
                "a": "Specifications include two heating levels at 45-50 C and two cooling levels at 13-19 C."
          },
          {
                "q": "What are the listed runtime values?",
                "a": "Specifications include 1.5-2 hours for normal massage, 40 minutes for cooling massage and 3 hours for heating massage."
          },
          {
                "q": "What packing configuration is available?",
                "a": "Specifications include premium storage bag packaging per unit and a 52.5 x 26.5 x 44.3 cm carton with 12 pcs per carton."
          }
    ],
    imageAlts: [
          "HT-HN049 mini massage gun portable OEM supplier",
          "Mini massage gun hot and cold head detail",
          "Compact percussion massage gun accessory set",
          "Private label mini fascia gun luxury bag packaging"
    ],
  },
  {
    slug: "cooling-massage-gun",
    name: "Cooling Massage Gun",
    category: "Massage Guns",
    categorySlug: "massage-guns",
    primaryKeyword:
      "cooling massage gun supplier",
    secondaryKeywords: ["cold therapy massage gun manufacturer", "massage gun with cooling OEM", "recovery gun factory China"],
    intent: "transactional",
    metaTitle:
      "Cooling Massage Gun Supplier & OEM | HUANTIVE",
    metaDescription:
      "Source HT-HN062 cooling massage gun with 30 speed modes, 2500mAh battery, LCD screen and eight heads. Request OEM quotation and packaging options.",
    summary:
      "An HT-HN062 cooling-positioned massage gun platform for sports recovery, performance retail and specialist distributors.",
    images: gallery(14, 6),
    tags: ["Cooling Plate", "OEM / ODM", "Accessory scope"],
    specs: {
      model: "HT-HN062",
      colors: "Black, Grey",
      battery: "2500 mAh for 4-5 h use",
      power: "Input DC 16.8V 1A; rated 16.8V 20W; brushless motor",
      productSize: "16.5 x 21 x 6 cm",
      packageSize: "29.5 x 23.5 x 8.5 cm",
      cartonSize: "44 x 30.5 x 47.5 cm (10 pcs/carton)",
    },
    features: [
      "30 speed modes for a wide range of recovery protocols",
      "16.8V brushless silent motor",
      "Eight massage heads for different body areas",
      "Large LCD screen showing speed and remaining power",
      "2500 mAh battery for 4-5 hours of use",
      "20-minute auto-off timer",
      "Non-slip handle with single-button power control",
      "Handheld bag packing",
    ],
    customization: ["Color", "Logo", "Head attachment set", "Storage case"],
    applications: ["Sports recovery brands", "Performance retail", "Specialist distributors"],
    buyerSummary: "Model HT-HN062 is a cooling-positioned massage gun with 2500 mAh battery, 30 speed modes, LCD screen and brushless motor.",
    procurementNotes: [
          "HT-HN062 is positioned for sports recovery and performance retail buyers that compare speed range, screen control, runtime and head set.",
          "Specifications include 2500 mAh battery, 4-5 hour use, DC 16.8V 1A input, 16.8V 20W rating and 10 pcs per carton.",
          "Model features include one-button operation, large LCD screen, 30 speed modes, eight massage heads, non-slip handle and handheld storage bag packaging."
    ],
    faqs: [
          {
                "q": "What is available for HT-HN062 speed control?",
                "a": "Specifications include 30 speed modes and a large LCD screen for speed and remaining power display."
          },
          {
                "q": "What battery and power data is shown?",
                "a": "Specifications include a 2500 mAh battery for 4-5 hours of use, DC 16.8V 1A input and 16.8V 20W rated power."
          },
          {
                "q": "What carton data is available?",
                "a": "The carton size is 44 x 30.5 x 47.5 cm with 10 pcs per carton."
          }
    ],
    imageAlts: [
          "HT-HN062 cooling massage gun OEM recovery supplier",
          "Cooling massage gun LCD speed control detail",
          "Brushless massage gun eight heads product image",
          "Wholesale cooling percussion gun handheld bag"
    ],
  },
  {
    slug: "shiatsu-foot-massager-machine",
    name: "Shiatsu Foot Massager with Heat & Air Compression",
    category: "Foot Massagers",
    categorySlug: "foot-massagers",
    primaryKeyword:
      "shiatsu foot massager with heat manufacturer",
    secondaryKeywords: ["air compression foot massager supplier", "heated foot massager OEM", "wholesale shiatsu foot massager"],
    intent: "transactional",
    metaTitle:
      "Shiatsu Foot Massager with Heat & Compression | OEM",
    metaDescription:
      "Source WY-FN054 shiatsu foot massager with heat, air compression, rolling massage, scraping action and 36W power. Request OEM factory pricing.",
    summary:
      "A WY-FN054 enclosed shiatsu foot massager with heat and air compression for home wellness, senior care and department-store programs.",
    images: gallery(9, 4, [1, 2, 3, 4]),
    tags: ["Enclosed foot system", "OEM / ODM", "Wholesale"],
    specs: {
      model: "WY-FN054",
      colors: "Black",
      power: "Input 100-240V 50/60Hz; Output 24V 1.5A; Power 36W",
      productSize: "410 x 350 x 210 mm",
      netGrossWeight: "3.83 kg",
      cartonSize: "46 x 39.8 x 46.5 cm (2 pcs/carton)",
    },
    features: [
      "Constant 41 C infrared heat",
      "Three adjustable air-compression intensity levels",
      "Three massage programs with rolling shiatsu action",
      "Kneading air pressure for the tops of the feet and ankles",
      "Three methods combined: rolling, scraping and air compression",
      "Selectable timer settings from 5 to 30 minutes",
      "Single On/Off control with intensity selection",
    ],
    customization: ["Housing color", "Control panel", "Power configuration", "Packaging"],
    applications: ["Home wellness retail", "Senior care channels", "Department store ranges"],
    buyerSummary: "WY-FN054 is an enclosed shiatsu foot massager with 41 C infrared heat, air compression, rolling massage and scraping action.",
    procurementNotes: [
          "This enclosed foot platform fits home wellness, senior care and department-store ranges where buyers compare heat, rolling massage and air compression functions.",
          "Specifications include 36W power, 410 x 350 x 210 mm product size, 3.83 kg product weight and 2 pcs per carton.",
          "Specifications include selectable auto-off timing from 5 to 30 minutes, three air-compression levels and multiple massage methods."
    ],
    faqs: [
          {
                "q": "Which massage methods are available for WY-FN054?",
                "a": "Specifications include rolling, scraping and squeezing air compression, plus rolling shiatsu and kneading air pressure."
          },
          {
                "q": "What heat value is listed?",
                "a": "Specifications include constant infrared heating at 41 C."
          },
          {
                "q": "What power and size data is available?",
                "a": "Specifications include input 100-240V 50-60Hz, output 24V 1.5A, power 36W and product size 410 x 350 x 210 mm."
          }
    ],
    imageAlts: [
          "WY-FN054 shiatsu foot massager machine OEM manufacturer",
          "Enclosed foot massager roller and air compression detail",
          "Foot massager 41 C infrared heat product image",
          "Wholesale shiatsu foot massager carton program"
    ],
  },
  {
    slug: "foot-and-calf-massager",
    name: "Foot and Calf Massager",
    category: "Foot Massagers",
    categorySlug: "foot-massagers",
    primaryKeyword:
      "foot and calf massager supplier",
    secondaryKeywords: ["leg and foot massager manufacturer", "premium foot massager OEM", "calf massage machine factory"],
    intent: "transactional",
    metaTitle:
      "Foot and Calf Massager Supplier | OEM Wholesale",
    metaDescription:
      "Source HT-FN001 foot and calf massager with six modes, three intensity levels, foot heat settings and enclosed lower-leg coverage. Request OEM quote.",
    summary:
      "An HT-FN001 enclosed foot and calf massager platform for premium wellness retail, clinic supply and gifting programs.",
    images: gallery(10, 6),
    tags: ["Foot and lower-calf format", "Private label", "Sample inquiry"],
    specs: {
      model: "HT-FN001",
      colors: "Grey, Dark Grey",
      power: "Input 100-240V 50/60Hz, 12V 2A; Power 24W",
      packageSize: "33 x 16 x 17.5 cm",
      cartonSize: "51 x 35 x 38.5 cm (6 pcs/carton)",
    },
    features: [
      "Six modes: auto, massage, kneading, relax, calf-focused and foot-focused",
      "Covers feet, heels and calves in one unit",
      "Three intensity levels: weak, medium and strong",
      "Two heat levels plus off, applied at the feet",
      "Three-button control for program, heating and intensity",
      "10-minute auto-off timer",
    ],
    customization: ["Housing finish", "Controls", "Voltage", "Gift box"],
    applications: ["Premium wellness retail", "Clinic and spa supply", "High-value gifting"],
    buyerSummary: "Model HT-FN001 is an enclosed foot and calf massager with six modes, three intensity levels and two heat settings for the feet.",
    procurementNotes: [
          "HT-FN001 is appropriate for premium wellness retail and clinic or spa supply programs needing foot, heel and calf coverage.",
          "Specifications include input 100-240V, 12V 2A adapter, 24W power, package size 33 x 16 x 17.5 cm and 6 pcs per carton.",
          "Buyers can request the approved product size, weight and loading data with the quotation when planning packaging, freight and channel pricing."
    ],
    faqs: [
          {
                "q": "Which massage areas are available for HT-FN001?",
                "a": "Specifications include feet, heel and calf as massage positions, with heating applied at the feet."
          },
          {
                "q": "What modes are listed?",
                "a": "Specifications include auto, massage, kneading, relax, calf-focused and foot-focused modes."
          },
          {
                "q": "Can buyers request product size and weight data?",
                "a": "Yes. Approved product size, weight and loading data can be supplied with the quotation for packaging, freight and channel planning."
          }
    ],
    imageAlts: [
          "HT-FN001 foot and calf massager premium OEM supplier",
          "Foot calf massager six mode control detail",
          "Enclosed leg and foot massager retail product image",
          "Wholesale foot and calf massage machine packaging"
    ],
  },
  {
    slug: "air-compression-leg-massager",
    name: "Air Compression Leg Massager",
    category: "Leg Massagers",
    categorySlug: "leg-massagers",
    primaryKeyword:
      "air compression leg massager manufacturer",
    secondaryKeywords: ["calf compression massager supplier", "pneumatic leg massager OEM", "air pressure leg massager wholesale"],
    intent: "transactional",
    metaTitle:
      "Air Compression Leg Massager Manufacturer | HUANTIVE",
    metaDescription:
      "Source FM10-3 air compression leg massager with calf wrap design, 2000mAh battery, heat settings and single or pair packing options. Request OEM quote.",
    summary:
      "An FM10-3 calf-wrap air compression leg massager for recovery, wellness retail and private-label health programs.",
    images: gallery(6, 6),
    tags: ["Calf wrap", "OEM / ODM", "Compression format"],
    specs: {
      model: "FM10-3",
      colors: "Pink / Grey",
      battery: "2000 mAh; 3.7V operating, 2A charging",
      power: "5W",
      productSize: "57 x 30 cm",
      netGrossWeight: "490 g",
      packageSize: "Single-leg box 32 x 17 x 7 cm; double-leg box 32 x 19.5 x 8.6 cm",
      cartonSize: "Single leg 47.5 x 34 x 53 cm (21 pcs); pair 56 x 34 x 56 cm (18 pcs)",
    },
    features: [
      "Progressive air-pressure massage with a 360-degree wrap",
      "Pressure applied from the bottom upward for lower-leg relief first",
      "Three heat settings: 40 C daily care, 45 C post-workout, 50 C joint comfort",
      "Up to nine combination modes across heat and massage",
      "Three modes (leg relief, kneading, lifting) with three intensity levels",
      "Digital touchscreen for one-handed control",
      "Wide adjustable Velcro straps to fit the whole family",
      "Stain-resistant linen outer fabric, soft and breathable",
      "2000 mAh battery for cordless use",
    ],
    customization: ["Sleeve material", "Controller", "Logo", "Packaging"],
    applications: ["Recovery and wellness retail", "Senior mobility channels", "Online health brands"],
    buyerSummary:
      "FM10-3 is a calf-wrap air compression leg massager for buyers comparing soft wearable compression, heat settings, battery use, sleeve materials and carton options.",
    procurementNotes: [
          "FM10-3 fits recovery and wellness retail buyers seeking a soft wearable compression sleeve rather than full-leg recovery boots.",
          "Specifications include 2000 mAh battery, 5W power, 3.7V operating voltage, 57 x 30 cm product size and single-leg or pair carton options.",
          "Listed materials are polyester fabric, EVA, SBRT fabric and 210D nylon TPU."
    ],
    faqs: [
          {
                "q": "What materials are available for FM10-3?",
                "a": "Specifications include polyester fabric, EVA, SBRT fabric and 210D nylon TPU."
          },
          {
                "q": "Which heat settings are listed?",
                "a": "Specifications include three settings: 40 C daily care, 45 C post-workout care and 50 C relief for joint discomfort."
          },
          {
                "q": "What packing options are listed?",
                "a": "Specifications include single-leg gift box and double-leg gift box sizes, with 21 sets per single-foot unit carton and 18 sets per double-foot unit carton."
          }
    ],
    imageAlts: [
          "FM10-3 air compression leg massager OEM supplier",
          "Calf wrap compression massager heat and touch control",
          "Adjustable Velcro pneumatic leg massager detail",
          "Wholesale air compression leg massager carton program"
    ],
  },
  {
    slug: "compression-leg-massager-boots",
    name: "Air Compression Recovery Boots",
    category: "Leg Massagers",
    categorySlug: "leg-massagers",
    primaryKeyword:
      "air compression recovery boots manufacturer",
    secondaryKeywords: ["compression recovery boots supplier", "leg recovery boots OEM", "private label air compression boots"],
    intent: "transactional",
    metaTitle:
      "Air Compression Recovery Boots Manufacturer | OEM",
    metaDescription:
      "Source air compression recovery boot programs for sports recovery and physiotherapy channels. Confirm chamber layout, pressure range, controller, sleeve size and packaging before quotation.",
    summary:
      "An air compression recovery boots RFQ platform for buyers planning full-leg recovery boot programs before OEM quotation.",
    images: gallery(8, 5),
    tags: ["Leg and foot coverage", "Controller included", "OEM / ODM"],
    features: ["Boot-style air chambers", "Lower-leg and foot coverage", "Multiple compression programs"],
    customization: ["Sleeve size", "Controller", "Color", "Carrying bag"],
    applications: ["Sports recovery brands", "Training facilities", "Physiotherapy distribution"],
    buyerSummary:
      "A compression boot platform for recovery brands and therapy distributors that need boot-style coverage, controller planning, sleeve sizing and packaging quotation support.",
    procurementNotes: [
          "Use this compression boot platform for sports recovery, training facility, physiotherapy distribution or wellness retail programs that need full-leg positioning.",
          "Before sampling, align boot size range, chamber layout, pressure program, controller type, power route, packaging format and destination-market documentation.",
          "This page is structured for RFQs where buyers compare recovery-boot configuration, carrying-bag options, sleeve material direction and quotation terms."
    ],
    faqs: [
          {
                "q": "What should buyers confirm for a compression boot program?",
                "a": "Confirm boot size, chamber layout, pressure range, controller type, battery or adapter data, package size and carton quantity."
          },
          {
                "q": "Which channels are best suited to compression leg massager boots?",
                "a": "Typical channels include sports recovery brands, training facilities, physiotherapy distribution and wellness retail programs."
          },
          {
                "q": "What should be included in the RFQ?",
                "a": "Send target quantity, target user group, destination market, controller requirements, packaging needs, sample request and any compliance checklist."
          }
    ],
    imageAlts: [
          "Air compression recovery boots OEM platform",
          "Full leg recovery boots product detail",
          "Private label air compression boots controller image",
          "Wholesale leg recovery boot carrying bag"
    ],
  },
  {
    slug: "shiatsu-massage-pillow",
    name: "Shiatsu Massage Pillow",
    category: "Massage Pillows & Cushions",
    categorySlug: "massage-pillows-cushions",
    primaryKeyword:
      "shiatsu massage pillow OEM",
    secondaryKeywords: ["kneading massage pillow supplier", "neck and back massage pillow manufacturer", "wholesale massage pillow China"],
    intent: "transactional",
    metaTitle:
      "Shiatsu Massage Pillow OEM Supplier | HUANTIVE",
    metaDescription:
      "Source WY-P001 shiatsu massage pillow with four reversible heads, infrared heat, 15-minute auto-off and six colorway options. Request OEM pricing.",
    summary:
      "A WY-P001 compact shiatsu massage pillow for home, office, automotive and gift-channel OEM programs.",
    images: gallery(16, 6),
    tags: ["Compact pillow", "Kneading nodes", "OEM / ODM"],
    specs: {
      model: "WY-P001",
      colors: "Black/White, Red, Brown, Black, Blue, Beige Check",
      power: "Input 110-240V; Output DC 12V 2A; Rated power 24W",
      productSize: "36 x 18 x 11.5 cm",
      netGrossWeight: "1.1 kg / 1.5 kg",
      packageSize: "36 x 13.5 x 18.5 cm",
      cartonSize: "70.5 x 37 x 39 cm (10 pcs/carton)",
    },
    features: [
      "Four soft shiatsu heads that reverse in two directions",
      "Kneading massage combined with infrared heating",
      "15-minute auto-off timer",
      "Covers neck, back, waist, abdomen, arm, leg and foot",
      "Six colorways available for range segmentation",
      "Mains adapter and car plug supplied for home, office or vehicle use",
    ],
    customization: ["Fabric", "Color", "Logo", "Power configuration"],
    applications: ["Home and office retail", "Automotive channels", "Gift programs"],
    buyerSummary: "Model WY-P001 is a compact shiatsu massage pillow with four reversible massage heads, infrared heat, 15-minute auto-off and home or car power support.",
    procurementNotes: [
          "WY-P001 fits home, office, automotive and gift programs seeking a compact pillow format for neck, back, waist and other body areas.",
          "Specifications include 24W power, 36 x 18 x 11.5 cm product size, 1.1 / 1.5 kg weight and 10 pcs per carton.",
          "Six colorway options are listed, supporting retail range segmentation without inventing additional materials or functions."
    ],
    faqs: [
          {
                "q": "Which functions are available for WY-P001?",
                "a": "Specifications include four soft shiatsu heads that reverse in two directions, kneading massage, infrared heating and 15-minute auto-off."
          },
          {
                "q": "Which color options are listed?",
                "a": "Specifications include black/white, red, brown, black, blue and beige check."
          },
          {
                "q": "What package and carton data is available?",
                "a": "Package size is 36 x 13.5 x 18.5 cm and carton size is 70.5 x 37 x 39 cm with 10 pcs per carton."
          }
    ],
    imageAlts: [
          "WY-P001 shiatsu massage pillow OEM wholesale",
          "Compact massage pillow four shiatsu head detail",
          "Infrared heated massage pillow product image",
          "Private label neck back massage pillow retail colorways"
    ],
  },
  {
    slug: "heated-massage-pillow",
    name: "Heated Shiatsu Massage Pillow",
    category: "Massage Pillows & Cushions",
    categorySlug: "massage-pillows-cushions",
    primaryKeyword:
      "heated shiatsu massage pillow manufacturer",
    secondaryKeywords: ["massage pillow with heat supplier", "shiatsu massage pillow OEM", "private label heated massage pillow"],
    intent: "transactional",
    metaTitle:
      "Heated Shiatsu Massage Pillow Manufacturer | OEM",
    metaDescription:
      "Source heated shiatsu massage pillow programs for home, office and vehicle wellness ranges. Confirm heat function, adapter route and packaging before quotation.",
    summary:
      "A heated shiatsu massage pillow platform for buyers planning heat function, adapter route, upholstery and packaging before OEM quotation.",
    images: gallery(17, 5),
    tags: ["Compact design", "Heat option", "Private label"],
    features: ["Compact pillow construction", "Visible shiatsu kneading area", "Heat function for comfort positioning"],
    customization: ["Upholstery", "Color", "Controls", "Packaging"],
    applications: ["Home comfort retail", "Vehicle accessory channels", "Seasonal gifting"],
    buyerSummary:
      "A heated massage pillow platform for home comfort, vehicle accessory and seasonal gifting programs that need heat positioning, material planning and private-label packaging support.",
    procurementNotes: [
          "Use this heated massage pillow platform when your assortment needs a compact comfort product for sofa, office, vehicle or gifting scenarios.",
          "Before sampling, align the heat function, adapter route, upholstery material, control layout, product size, package size and carton quantity.",
          "This page is structured for commercial RFQs covering material direction, packaging artwork, manual language, accessory route and quotation terms."
    ],
    faqs: [
          {
                "q": "What should buyers confirm for a heated massage pillow program?",
                "a": "Confirm the heat function, power adapter data, material direction, product size, package size and carton quantity for the selected configuration."
          },
          {
                "q": "Which channels are best suited to heated massage pillows?",
                "a": "Typical channels include home comfort retail, vehicle accessory programs, office wellness ranges and seasonal gifting."
          },
          {
                "q": "What should be included in the RFQ?",
                "a": "Send target quantity, destination market, upholstery or color needs, packaging artwork scope, sample request and any retailer compliance checklist."
          }
    ],
    imageAlts: [
          "Heated shiatsu massage pillow OEM platform",
          "Compact heated massage pillow product image",
          "Private label heated cushion detail",
          "Wholesale heated massage pillow packaging view"
    ],
  },
  {
    slug: "full-back-massage-seat-cushion",
    name: "Full Back Massage Seat Cushion",
    category: "Massage Pillows & Cushions",
    categorySlug: "massage-pillows-cushions",
    primaryKeyword:
      "massage seat cushion manufacturer",
    secondaryKeywords: ["full back massage cushion supplier", "chair massage pad OEM", "office chair massager factory"],
    intent: "transactional",
    metaTitle:
      "Massage Seat Cushion Manufacturer | HUANTIVE",
    metaDescription:
      "Source WY-MC013 full back massage seat cushion with neck, back, waist and hip coverage, heat, vibration and adjustable massage head spacing.",
    summary:
      "A WY-MC013 chair-mounted full-back massage seat cushion for office furniture, automotive and home wellness channels.",
    images: gallery(19, 6, [5, 6]),
    tags: ["Full-back format", "Chair-mounted", "B2B supply"],
    specs: {
      model: "WY-MC013",
      colors: "Black, Grey",
      power: "Rated 24V 30W; Input 110-240V; Output DC 12.6V 1A",
      productSize: "78.5 x 23.5 x 44.5 cm",
      netGrossWeight: "5.4 kg / 6.8 kg",
      packageSize: "76 x 20 x 44 cm",
    },
    features: [
      "Four techniques in one unit: kneading, pressing, rolling and pinching",
      "35-60 mm adjustable head spacing with 30 mm variable depth",
      "Widened upper heads for the shoulder and neck muscle group",
      "Extended lower swing arms reaching the trapezius",
      "Adjustable neck height to suit different body heights",
      "Heat function applied during massage",
      "High-frequency vibration section for the hip area",
      "Three speeds: gentle, soothing and vigorous",
      "15-minute auto-off timer",
      "Breathable skin-friendly mesh fabric with remote-control storage pocket",
    ],
    customization: ["Upholstery", "Massage zones", "Controller", "Packaging"],
    applications: ["Office furniture channels", "Automotive accessories", "Home wellness retail"],
    buyerSummary: "Model WY-MC013 is a full back massage seat cushion with neck, back, waist and hip coverage, heat, vibration and adjustable massage head spacing.",
    procurementNotes: [
          "WY-MC013 fits office furniture, automotive accessory and home wellness buyers comparing full-back coverage rather than compact pillow formats.",
          "Specifications include 24V / 30W rating, input 110-240V, 78.5 x 23.5 x 44.5 cm product size, 5.4 / 6.8 kg weight and 76 x 20 x 44 cm package size.",
          "Specifications include four massage techniques, adjustable neck height, hip vibration, heat and breathable mesh fabric."
    ],
    faqs: [
          {
                "q": "Which massage zones are available for WY-MC013?",
                "a": "Specifications include neck, back, waist and hip coverage with heat and hip high-frequency vibration."
          },
          {
                "q": "What adjustable functions are listed?",
                "a": "Specifications include 35-60 mm adjustable neck spacing, 30 mm variable depth, adjustable neck height and three speed levels."
          },
          {
                "q": "Can buyers request carton and loading data?",
                "a": "Yes. Approved carton size, carton weight and loading data can be supplied with the quotation for freight and warehouse planning."
          }
    ],
    imageAlts: [
          "WY-MC013 full back massage seat cushion OEM manufacturer",
          "Full back massage cushion neck height adjustment detail",
          "Chair-mounted massage pad heat and vibration product image",
          "Wholesale massage seat cushion office and automotive channel"
    ],
  },
  {
    slug: "heated-hand-massager",
    name: "Heated Hand Massager",
    category: "Targeted Body Massagers",
    categorySlug: "targeted-body-massagers",
    primaryKeyword:
      "heated hand massager manufacturer",
    secondaryKeywords: ["electric hand massager supplier", "palm massager OEM factory", "hand massage device wholesale"],
    intent: "transactional",
    metaTitle:
      "Heated Hand Massager Manufacturer | HUANTIVE",
    metaDescription:
      "Source WY-ST-1803 heated hand massager with four modes, three heat settings, five intensity levels and 2000mAh battery. Request OEM quote.",
    summary:
      "A WY-ST-1803 enclosed heated hand massager for senior care retail, wellness e-commerce and health gifting programs.",
    images: gallery(21, 5),
    tags: ["Enclosed hand chamber design", "Heat Function", "Private label"],
    specs: {
      model: "WY-ST-1803",
      colors: "White",
      battery: "2000 mAh; 120 min charge, 90 min runtime",
      power: "Input 5V DC 1A; charging power 5W",
      netGrossWeight: "1320 g gross with color box",
      packageSize: "28.8 x 18.6 x 14 cm",
      cartonSize: "44.5 x 39.5 x 59.5 cm (12 pcs/carton)",
      cartonWeight: "17 kg",
    },
    features: [
      "Four massage modes including a finger-stretching technique",
      "Three constant-temperature heat settings with 3-second rapid heating",
      "Five intensity levels for precise adjustment",
      "Built-in silicone nubs for point-to-point deep pressure",
      "2000 mAh battery: 120-minute charge for 90 minutes of use",
    ],
    customization: ["Shell color", "Controls", "Logo", "Gift box"],
    applications: ["Senior care retail", "Wellness e-commerce", "Health gifting"],
    buyerSummary: "Model WY-ST-1803 is an enclosed heated hand massager with four modes, finger-stretching technique, three heat settings and five intensity levels.",
    procurementNotes: [
          "WY-ST-1803 fits senior care, wellness e-commerce and health gifting programs that need an enclosed hand chamber format.",
          "Specifications include 2000 mAh battery, 120-minute charging time, 90-minute runtime, 5W charging power and 12 pcs per carton.",
          "Package, carton and gross color-box weight are available for quotation review; buyers can request approved product size data for packaging and freight planning."
    ],
    faqs: [
          {
                "q": "Which functions are available for WY-ST-1803?",
                "a": "Specifications include four massage modes, a finger-stretching technique, three constant-temperature heat settings, five intensity levels and silicone nubs for point-to-point massage."
          },
          {
                "q": "What battery and runtime data is available?",
                "a": "Specifications include a 2000 mAh battery, 120-minute charging time and 90-minute runtime."
          },
          {
                "q": "Can buyers request product size data?",
                "a": "Yes. Approved product size data can be supplied with the quotation for packaging layout, freight planning and retail listing preparation."
          }
    ],
    imageAlts: [
          "WY-ST-1803 heated hand massager OEM private label",
          "Enclosed hand massager heat and intensity control",
          "Finger stretching hand massager product detail",
          "Wholesale heated hand massager retail packaging"
    ],
  },
  {
    slug: "kneading-hand-massager",
    name: "Hand Massager with Kneading & Heat",
    category: "Targeted Body Massagers",
    categorySlug: "targeted-body-massagers",
    primaryKeyword:
      "hand massager with heat supplier",
    secondaryKeywords: ["kneading hand massager manufacturer", "finger and palm massager OEM", "wholesale hand massager with heat"],
    intent: "transactional",
    metaTitle:
      "Hand Massager with Kneading & Heat | OEM Wholesale",
    metaDescription:
      "Source hand massager with kneading and heat programs for wellness, office and health distribution channels. Confirm kneading mechanism, modes and packing before quote.",
    summary:
      "An enclosed hand massager platform for buyers planning kneading, heat, mode control and private-label packaging before OEM quotation.",
    images: gallery(22, 4),
    tags: ["Kneading & heat format", "Four Massage Modes", "OEM / ODM"],
    features: ["Enclosed hand chamber design", "Finger-style kneading modules", "Four selectable massage modes"],
    customization: ["Shell finish", "Mode control", "Logo", "Packaging"],
    applications: ["Wellness retail", "Office and desk-worker channels", "Health distribution"],
    buyerSummary:
      "A kneading hand massager platform for wellness, office-worker and health distribution programs that need enclosed hand-chamber positioning and private-label quotation support.",
    procurementNotes: [
          "Use this kneading hand massager platform when your range needs an enclosed hand-care product for wellness retail, office-worker channels or health distribution programs.",
          "Before sampling, align the kneading mechanism, mode count, heat function, battery route, product size, carton packing and destination-market documentation.",
          "This page is structured for RFQs covering hand-chamber comfort, control layout, shell finish, packaging artwork and quotation terms."
    ],
    faqs: [
          {
                "q": "What should buyers confirm for a kneading hand massager program?",
                "a": "Confirm model number, kneading mechanism, mode count, heat function, battery, charging data, product size and carton packing."
          },
          {
                "q": "Which channels are best suited to kneading hand massagers?",
                "a": "Typical channels include wellness retail, office and desk-worker ranges, hand-care assortments and health distribution programs."
          },
          {
                "q": "What should be included in the RFQ?",
                "a": "Send target quantity, destination market, required comfort level, shell finish, packaging needs, sample request and any compliance checklist."
          }
    ],
    imageAlts: [
          "Hand massager with kneading and heat OEM platform",
          "Enclosed hand massager kneading module image",
          "Private label hand massage machine product detail",
          "Wholesale kneading hand massager packaging view"
    ],
  },
  {
    slug: "heated-lumbar-massager-belt",
    name: "Heated Lumbar Massager Belt",
    category: "Targeted Body Massagers",
    categorySlug: "targeted-body-massagers",
    primaryKeyword:
      "heated lumbar massager OEM",
    secondaryKeywords: ["heated lumbar massager belt manufacturer", "back massage belt supplier", "waist massager private label"],
    intent: "transactional",
    metaTitle:
      "Heated Lumbar Massager OEM | HUANTIVE",
    metaDescription:
      "Source WY-HZ-Y5 heated lumbar massager belt with support belts, carbon-fibre heat, vibration levels and 2600mAh Type-C battery. Request OEM quote.",
    summary:
      "A WY-HZ-Y5 wearable lower-back massager belt for back-care retail, occupational wellness and online health brands.",
    images: gallery(20, 4),
    tags: ["Lumbar support", "Heat Function", "Vibration Massage"],
    specs: {
      model: "WY-HZ-Y5",
      colors: "Khaki",
      battery: "2600 mAh, Type-C charging",
      power: "Input 5V; power 4W",
      netGrossWeight: "660 g / 1.5 kg",
      packageSize: "27 x 27 x 11 cm",
    },
    features: [
      "Four adjustable support belts to fit different body sizes",
      "Double C-type bionic support design for lumbar stability",
      "Two bionic vertebrae supports plus four PP support strips",
      "360-degree enveloping design with high-density support plate",
      "Carbon-fibre heating across approximately 8000 mm2",
      "Five-second rapid heating with five-level temperature control",
      "Five vibration levels: soft (1-2), common (3-4) and strong (5)",
      "Two massage modes with a 15-minute auto-off timer",
      "2600 mAh Type-C battery for cordless wear",
    ],
    customization: ["Fabric", "Controller", "Logo", "Retail packaging"],
    applications: ["Back-care retail", "Occupational wellness", "Online health brands"],
    buyerSummary: "Model WY-HZ-Y5 is a khaki lumbar massager belt with 2600 mAh Type-C battery, support belts, carbon-fibre heat and vibration modes.",
    procurementNotes: [
          "WY-HZ-Y5 is suited to back-care retail and occupational wellness programs that require wearable lower-back support with heat and vibration.",
          "Specifications include 2600 mAh battery, 5V input, 4W power, 660 g / 1.5 kg weight and 27 x 27 x 11 cm package size.",
          "Specifications include structural support elements, approximately 8000 mm2 heating area, five-level temperature control, five vibration levels and two massage modes."
    ],
    faqs: [
          {
                "q": "Which support structure is available for WY-HZ-Y5?",
                "a": "Specifications include four support belts, double C-type bionic support, two bionic vertebrae supports and four PP support strips."
          },
          {
                "q": "What heat and vibration settings are listed?",
                "a": "Specifications include an approximately 8000 mm2 heating area, five-level smart temperature control, five vibration levels and two massage modes."
          },
          {
                "q": "Can buyers request product size and carton data?",
                "a": "Yes. Approved product size, carton size and loading data can be supplied with the quotation for packaging, freight and warehouse planning."
          }
    ],
    imageAlts: [
          "WY-HZ-Y5 heated lumbar massager belt OEM supplier",
          "Khaki waist support massager carbon fiber heat detail",
          "Lumbar massage belt vibration and support structure",
          "Private label heated waist massager package image"
    ],
  },
  {
    slug: "heated-ankle-massager",
    name: "Heated Ankle Massager",
    category: "Targeted Body Massagers",
    categorySlug: "targeted-body-massagers",
    primaryKeyword:
      "heated ankle massager manufacturer",
    secondaryKeywords: ["ankle massage wrap supplier", "joint massager OEM factory", "ankle heat massager wholesale"],
    intent: "transactional",
    metaTitle:
      "Heated Ankle Massager Manufacturer | HUANTIVE",
    metaDescription:
      "Source WY-FN071 heated ankle massager with dual vibration motors, five heat levels, NTC temperature control and Type-C battery. Request OEM pricing.",
    summary:
      "A WY-FN071 compact heated ankle massager wrap for sports recovery, senior mobility and pharmacy-channel programs.",
    images: gallery(7, 6, [1, 2, 3, 4, 5, 6]),
    tags: ["Ankle wrap", "Heat Function", "Targeted format"],
    specs: {
      model: "WY-FN071",
      battery: "2000 mAh, Type-C charging",
      power: "5V",
      netGrossWeight: "250 g",
      packageSize: "13 x 5.5 x 17.9 cm",
      cartonSize: "30 pcs/carton",
    },
    features: [
      "Dual-motor vibration with three modes: wave, continuous and rhythmic",
      "Five-level hot compress adjustable from 40 C to 60 C",
      "NTC temperature-control chip holds a constant compress temperature",
      "Carbon-fibre heating element emitting far-infrared radiation",
      "360-degree ankle wrap with non-slip fabric",
      "Large LCD display with push-button control",
      "15-minute auto-off timer",
      "2000 mAh Type-C battery for cordless portable use",
    ],
    customization: ["Fabric", "Temperature control", "Logo", "Retail package"],
    applications: ["Sports recovery", "Senior mobility", "Pharmacy channels"],
    buyerSummary: "Model WY-FN071 is a heated ankle massager with 2000 mAh Type-C battery, dual motor vibration, five heat levels and NTC temperature control.",
    procurementNotes: [
          "WY-FN071 suits sports recovery, senior mobility and pharmacy-channel buyers needing a compact ankle wrap format.",
          "Specifications include 2000 mAh battery, 5V rating, 250 g weight, 13 x 5.5 x 17.9 cm package size and 30 pcs per carton.",
          "Specifications include breathable fabric, non-slip joint fit, carbon-fibre far-infrared heating and 15-minute auto-off."
    ],
    faqs: [
          {
                "q": "Which heat settings are available for WY-FN071?",
                "a": "Specifications include five-level hot compress adjustable from 40 C to 60 C with NTC temperature control."
          },
          {
                "q": "What vibration functions are listed?",
                "a": "Specifications include dual motor massage and three vibration modes: wave, continuous and rhythmic."
          },
          {
                "q": "What carton data is available?",
                "a": "Specifications include 30 pcs per carton; carton quantity is 30 pcs; full carton dimensions and loading data can be confirmed with the quotation."
          }
    ],
    imageAlts: [
          "WY-FN071 heated ankle massager OEM supplier",
          "Ankle wrap hot compress and vibration control",
          "Carbon fiber heated ankle massager fabric detail",
          "Wholesale ankle massager package size image"
    ],
  },
  {
    slug: "ems-facial-massager",
    name: "EMS Microcurrent Facial Massager",
    category: "Targeted Body Massagers",
    categorySlug: "targeted-body-massagers",
    primaryKeyword:
      "EMS microcurrent facial massager supplier",
    secondaryKeywords: ["microcurrent facial massager manufacturer", "beauty device OEM supplier", "private label facial massager"],
    intent: "transactional",
    metaTitle:
      "EMS Microcurrent Facial Massager Supplier | OEM",
    metaDescription:
      "Source DYM-062 EMS microcurrent facial massager with vibration, heat, 2000mAh battery, Type-C charging and 40 pcs/carton packing. Request OEM quote.",
    summary:
      "A DYM-062 EMS microcurrent facial massager for beauty retail, skincare brands and private-label e-commerce programs.",
    images: gallery(15, 6, [1, 5, 6]),
    tags: ["EMS Microcurrent", "Heat Function", "Beauty device"],
    specs: {
      model: "DYM-062",
      colors: "White, Black",
      battery: "2000 mAh",
      power: "USB Type-C 5V/1A; charging voltage 100-240V",
      productSize: "150 x 110 x 30 mm",
      netGrossWeight: "340 g / 480 g",
      packageSize: "180 x 180 x 40 mm",
      cartonSize: "39.2 x 37.5 x 37.5 cm (40 pcs/carton)",
      cartonWeight: "20 kg",
    },
    features: [
      "Triple action in one tool: EMS microcurrent, vibration and heat",
      "Nine-level heat from 36 C to 60 C",
      "Nine-level high-frequency vibration",
      "Nine-level EMS microcurrent with maximum output below 100V",
      "Three independent modes (heat, microcurrent, vibration), nine levels each",
      "Stepless speed control so users can build up from the lowest level",
      "2000 mAh battery with 10-minute auto shut-off when idle",
      "Holds domestic and EU design patents; CE certified (No. 00460AX0533CE)",
    ],
    customization: ["Color", "Logo", "Controls", "Retail packaging"],
    applications: ["Beauty retail", "Skincare brands", "Beauty e-commerce"],
    buyerSummary: "Model DYM-062 is a handheld EMS facial and fascia massager with microcurrent, vibration and heat, each with nine adjustable levels.",
    procurementNotes: [
          "DYM-062 suits beauty retail, skincare brand and beauty e-commerce buyers comparing EMS microcurrent, heat and vibration in one handheld tool.",
          "Specifications include 2000 mAh battery, USB Type-C 5V/1A charging, 150 x 110 x 30 mm product size, 340 g / 480 g weight and 40 pcs per carton.",
          "Specifications include CE certificate No. 00460AX0533CE and domestic/EU design patents; this is shown only for this model, not as a universal site-wide claim."
    ],
    faqs: [
          {
                "q": "Which modes are available for DYM-062?",
                "a": "Specifications include heating mode, microcurrent mode and vibration mode, each with nine adjustable levels."
          },
          {
                "q": "What certification information is shown for this model?",
                "a": "Available documentation references domestic and EU design patents and CE certification No. 00460AX0533CE. Applicability still needs certificate-holder, date, standard and destination-market review before quotation."
          },
          {
                "q": "What packaging data is available?",
                "a": "The package size is 180 x 180 x 40 mm and carton size is 39.2 x 37.5 x 37.5 cm with 40 pcs per carton and 20 kg carton weight."
          }
    ],
    imageAlts: [
          "DYM-062 EMS facial massager beauty device OEM supplier",
          "EMS microcurrent heated vibration massager detail",
          "Handheld facial fascia massager Type-C product image",
          "Private label EMS facial massager carton data"
    ],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
