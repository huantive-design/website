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
    metaTitle: "Massage Gun Manufacturer | OEM & Private Label Factory",
    metaDescription:
      "China massage gun manufacturer supplying percussion, heated and cooling fascia gun platforms for OEM, private-label and wholesale programs in Europe and North America.",
    heading: "Massage gun and fascia gun manufacturing",
    intro:
      "Percussion massage platforms covering full-size, compact and thermal-attachment formats. Each model is quoted with its own motor, stroke, battery and attachment configuration.",
    buyerNote: "Four percussion platforms, including hot-and-cold and cooling-design concepts.",
    image: "/products/11/image-1.jpg",
  },
  {
    slug: "neck-shoulder-massagers",
    name: "Neck & Shoulder Massagers",
    primaryKeyword: "neck and shoulder massager manufacturer",
    secondaryKeywords: ["shiatsu neck massager supplier", "wearable neck massager factory", "OEM neck massager China"],
    metaTitle: "Neck & Shoulder Massager Manufacturer | OEM Supplier",
    metaDescription:
      "Neck and shoulder massager manufacturer producing wearable, wrap, U-shaped and kneading formats for private-label and wholesale buyers in Europe and North America.",
    heading: "Neck and shoulder massager manufacturing",
    intro:
      "Wearable and wrap-style neck platforms for retail, gifting and e-commerce ranges. Available with kneading mechanisms, optional heat and a choice of power configurations.",
    buyerNote: "Six neck and shoulder platforms across wearable, wrap and structured formats.",
    image: "/products/3/image-1.jpg",
  },
  {
    slug: "foot-massagers",
    name: "Foot Massagers",
    primaryKeyword: "foot massager manufacturer",
    secondaryKeywords: ["shiatsu foot massager supplier", "foot and calf massager factory", "OEM foot massage machine"],
    metaTitle: "Foot Massager Manufacturer | Shiatsu & OEM Supplier",
    metaDescription:
      "Foot massager manufacturer supplying enclosed shiatsu foot and calf massage machines for branded home-wellness, retail and distribution programs.",
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
    metaTitle: "Leg Massager Manufacturer | Air Compression OEM Supplier",
    metaDescription:
      "Air compression leg massager manufacturer producing calf sleeves and full-leg recovery boots for sports recovery, wellness retail and private-label programs.",
    heading: "Compression leg massager manufacturing",
    intro:
      "Pneumatic compression platforms from calf sleeves to full lower-leg boots. Specified by chamber count, pressure range and controller type to suit your programme.",
    buyerNote: "Two compression platforms for calf-only and full lower-leg recovery.",
    image: "/products/8/image-1.jpg",
  },
  {
    slug: "massage-pillows-cushions",
    name: "Massage Pillows & Cushions",
    primaryKeyword: "massage pillow manufacturer",
    secondaryKeywords: ["shiatsu massage pillow supplier", "massage seat cushion manufacturer", "back massage cushion OEM"],
    metaTitle: "Massage Pillow & Seat Cushion Manufacturer | OEM Supplier",
    metaDescription:
      "Massage pillow and seat cushion manufacturer supplying compact kneading pillows and full-back chair cushions for retail, automotive and office wellness programs.",
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
    metaTitle: "Hand, Waist & Facial Massager Manufacturer | OEM Supplier",
    metaDescription:
      "Targeted massager manufacturer producing hand, lumbar, ankle and facial care devices for private-label wellness, beauty and personal-care ranges.",
    heading: "Targeted body massager manufacturing",
    intro:
      "Focused-area devices for hands, lower back, ankles and facial care. Available with heat, EMS and vibration configurations to suit your range.",
    buyerNote: "Five targeted platforms across hand, lumbar, ankle and facial formats.",
    image: "/products/21/image-1.jpg",
  },
];

export const getCategory = (slug: string) => categories.find((category) => category.slug === slug);
export const productsByCategory = (slug: string) => products.filter((product) => product.categorySlug === slug);

const gallery = (folder: number, count: number, pngPositions: number[] = []) =>
  Array.from({ length: count }, (_, index) => `/products/${folder}/image-${index + 1}.${pngPositions.includes(index + 1) ? "png" : "jpg"}`);

export const products: Product[] = [
  {
    slug: "wearable-neck-massager",
    name: "Wearable Neck Massager",
    category: "Neck & Shoulder Massagers",
    categorySlug: "neck-shoulder-massagers",
    primaryKeyword: "wearable neck massager manufacturer",
    secondaryKeywords: ["cordless neck massager supplier", "private label neck massager", "OEM wearable massager China"],
    intent: "transactional",
    metaTitle: "Wearable Neck Massager Manufacturer | OEM & Private Label",
    metaDescription:
      "Wearable neck massager manufacturer in China. Open-neck cordless format for private-label wellness brands, retail chains and e-commerce programs. Request MOQ and OEM options.",
    summary: "An open-neck wearable format for private-label wellness and personal-care programs.",
    images: gallery(1, 4),
    tags: ["OEM / ODM", "Private label", "Sample inquiry"],
    features: ["Open-neck wearable form", "Compact retail concept", "Multi-mode massage control"],
    customization: ["Logo", "Color", "Packaging", "Market configuration"],
    applications: ["Wellness retail", "E-commerce brands", "Corporate gifting"],
  },
  {
    slug: "shiatsu-neck-shoulder-massager",
    name: "Shiatsu Neck and Shoulder Massager",
    category: "Neck & Shoulder Massagers",
    categorySlug: "neck-shoulder-massagers",
    primaryKeyword: "shiatsu neck and shoulder massager manufacturer",
    secondaryKeywords: ["shiatsu massager supplier China", "car and home neck massager OEM", "wholesale shiatsu massager"],
    intent: "transactional",
    metaTitle: "Shiatsu Neck & Shoulder Massager Manufacturer | OEM Supplier",
    metaDescription:
      "Shiatsu neck and shoulder massager manufacturer supplying wrap-style platforms with home and vehicle power options for wholesale and private-label buyers.",
    summary: "A plug-in wrap-style massage platform supplied with home and vehicle power options.",
    images: gallery(2, 5, [1, 3, 4, 5]),
    tags: ["Home and car use", "OEM / ODM", "B2B supply"],
    features: ["Wrap-style construction", "Home and vehicle power options", "Multi-mode massage control"],
    customization: ["Upholstery", "Control layout", "Logo", "Retail box"],
    applications: ["Home wellness retail", "Automotive accessory channels", "Distributor programs"],
  },
  {
    slug: "kneading-neck-shoulder-massager",
    name: "Kneading Neck and Shoulder Massager",
    category: "Neck & Shoulder Massagers",
    categorySlug: "neck-shoulder-massagers",
    primaryKeyword: "kneading neck and shoulder massager supplier",
    secondaryKeywords: ["shoulder massager wholesale China", "pull strap massager manufacturer", "private label shoulder wrap"],
    intent: "transactional",
    metaTitle: "Kneading Neck & Shoulder Massager Supplier | Wholesale OEM",
    metaDescription:
      "Kneading neck and shoulder massager supplier producing pull-strap shoulder wraps for wholesale, private-label and distributor massage ranges.",
    summary: "A pull-strap shoulder wrap designed for wholesale and private-label massage ranges.",
    images: gallery(3, 6),
    tags: ["Pull-strap design", "Private label", "Wholesale"],
    features: ["Neck and shoulder wrap", "Manual pull-strap positioning", "Model-specific functions on request"],
    customization: ["Fabric", "Color", "Controls", "Packaging"],
    applications: ["Wholesale distribution", "Pharmacy and wellness retail", "Promotional programs"],
  },
  {
    slug: "heated-neck-shoulder-massager",
    name: "Heated Neck and Shoulder Massager",
    category: "Neck & Shoulder Massagers",
    categorySlug: "neck-shoulder-massagers",
    primaryKeyword: "heated neck and shoulder massager manufacturer",
    secondaryKeywords: ["heat therapy neck massager supplier", "U shape shoulder massager OEM", "heated massager factory China"],
    intent: "transactional",
    metaTitle: "Heated Neck & Shoulder Massager Manufacturer | OEM Factory",
    metaDescription:
      "Heated neck and shoulder massager manufacturer supplying U-shaped platforms with integrated controls and heat options for branded retail programs.",
    summary: "A U-shaped shoulder massage platform with an integrated control area for branded programs.",
    images: gallery(4, 6),
    tags: ["Heat option", "OEM / ODM", "Retail-ready format"],
    features: ["U-shaped shoulder wrap", "Integrated controls", "Optional heat function"],
    customization: ["Logo", "Materials", "Heat settings", "Gift box"],
    applications: ["Retail chains", "Seasonal gifting", "Wellness e-commerce"],
  },
  {
    slug: "wraparound-shoulder-massager",
    name: "Wraparound Shoulder Massager",
    category: "Neck & Shoulder Massagers",
    categorySlug: "neck-shoulder-massagers",
    primaryKeyword: "wraparound shoulder massager supplier",
    secondaryKeywords: ["padded shoulder massager manufacturer", "upper body massager wholesale", "OEM massage wrap China"],
    intent: "transactional",
    metaTitle: "Wraparound Shoulder Massager Supplier | B2B OEM Factory",
    metaDescription:
      "Wraparound shoulder massager supplier producing padded upper-body massage wraps for distributor, retail and private-label product collections.",
    summary: "A padded wraparound massage format for shoulder and upper-body product collections.",
    images: gallery(5, 4),
    tags: ["Padded wrap", "OEM available", "B2B quotation"],
    features: ["Wide padded construction", "Shoulder-wrap product form", "Neck, shoulder and upper-back coverage"],
    customization: ["Surface material", "Color", "Control panel", "Branding"],
    applications: ["Distributor ranges", "Home comfort retail", "Private-label collections"],
  },
  {
    slug: "u-shaped-neck-massager",
    name: "U-Shaped Neck Massager",
    category: "Neck & Shoulder Massagers",
    categorySlug: "neck-shoulder-massagers",
    primaryKeyword: "U shaped neck massager manufacturer",
    secondaryKeywords: ["travel neck massager supplier", "neck massage pillow OEM", "gift neck massager wholesale"],
    intent: "transactional",
    metaTitle: "U-Shaped Neck Massager Manufacturer | OEM & Gift Programs",
    metaDescription:
      "U-shaped neck massager manufacturer supplying structured neck massage platforms for consumer wellness, travel retail and gifting ranges.",
    summary: "A structured U-shaped neck massage platform for consumer wellness and gifting ranges.",
    images: gallery(18, 6),
    tags: ["U-shaped form", "Neck-focused", "OEM available"],
    features: ["Structured neck fit", "Rotating massage nodes", "Heat function with multi-level control"],
    customization: ["Surface material", "Color", "Logo", "Gift box"],
    applications: ["Travel retail", "Gift programs", "Wellness e-commerce"],
  },
  {
    slug: "hot-cold-massage-gun",
    name: "Hot and Cold Massage Gun",
    category: "Massage Guns",
    categorySlug: "massage-guns",
    primaryKeyword: "hot and cold massage gun manufacturer",
    secondaryKeywords: ["heated massage gun supplier", "thermal percussion gun OEM", "hot cold therapy gun factory"],
    intent: "transactional",
    metaTitle: "Hot & Cold Massage Gun Manufacturer | OEM Factory China",
    metaDescription:
      "Hot and cold massage gun manufacturer producing percussion platforms with thermal attachments for recovery brands, sports retail and private-label ranges.",
    summary: "A percussion massage gun with hot and cold therapy attachments for recovery ranges.",
    images: gallery(11, 6),
    tags: ["Hot and cold head", "Percussion format", "OEM / ODM"],
    features: ["Interchangeable heads", "Hot & Cold Therapy Attachment", "Adjustable hot and cold temperature settings"],
    customization: ["Color", "Attachments", "Logo", "Carrying case"],
    applications: ["Sports recovery brands", "Physiotherapy channels", "Premium retail"],
  },
  {
    slug: "deep-tissue-massage-gun",
    name: "Deep Tissue Massage Gun",
    category: "Massage Guns",
    categorySlug: "massage-guns",
    primaryKeyword: "deep tissue massage gun manufacturer",
    secondaryKeywords: ["professional massage gun supplier", "percussion massager wholesale China", "fascia gun OEM factory"],
    intent: "transactional",
    metaTitle: "Deep Tissue Massage Gun Manufacturer | Wholesale OEM Supplier",
    metaDescription:
      "Deep tissue massage gun manufacturer supplying full-size percussion platforms with multiple attachments for wholesale, OEM and private-label programs.",
    summary: "A full-size percussion massage gun with multiple attachment options for wholesale programs.",
    images: gallery(12, 6),
    tags: ["Multiple attachments", "OEM available", "Wholesale"],
    features: ["Full-size percussion form", "Multiple interchangeable massage heads", "Multi-speed control with rechargeable battery"],
    customization: ["Shell color", "Attachments", "Display", "Case and packaging"],
    applications: ["Fitness and gym channels", "Sports retail", "Distributor programs"],
  },
  {
    slug: "mini-massage-gun",
    name: "Mini Massage Gun",
    category: "Massage Guns",
    categorySlug: "massage-guns",
    primaryKeyword: "mini massage gun manufacturer",
    secondaryKeywords: ["portable massage gun supplier", "travel massage gun OEM", "compact fascia gun wholesale"],
    intent: "transactional",
    metaTitle: "Mini Massage Gun Manufacturer | Portable OEM Supplier",
    metaDescription:
      "Mini massage gun manufacturer producing compact percussion platforms for travel retail, gifting and high-volume e-commerce programs.",
    summary: "A compact percussion massage gun platform for travel, gifting and e-commerce ranges.",
    images: gallery(13, 6),
    tags: ["Compact format", "Private label", "Retail program"],
    features: ["Compact T-shaped body", "Interchangeable massage heads", "Portable product positioning"],
    customization: ["Color", "Logo", "Attachment set", "Gift box"],
    applications: ["E-commerce marketplaces", "Travel retail", "Promotional gifting"],
  },
  {
    slug: "cooling-massage-gun",
    name: "Cooling Massage Gun",
    category: "Massage Guns",
    categorySlug: "massage-guns",
    primaryKeyword: "cooling massage gun supplier",
    secondaryKeywords: ["cold therapy massage gun manufacturer", "massage gun with cooling OEM", "recovery gun factory China"],
    intent: "transactional",
    metaTitle: "Cooling Massage Gun Supplier | Cold Therapy OEM Factory",
    metaDescription:
      "Cooling massage gun supplier producing percussion platforms with cold-therapy design for sports recovery, wellness retail and OEM brand programs.",
    summary: "A full-size percussion massage gun with a rear cooling plate for extended sessions.",
    images: gallery(14, 6),
    tags: ["Cooling Plate", "OEM / ODM", "Accessory set"],
    features: ["Full-size percussion format", "Rear cooling plate", "Digital display with multi-speed control"],
    customization: ["Color", "Logo", "Head set", "Storage case"],
    applications: ["Sports recovery brands", "Performance retail", "Specialist distributors"],
  },
  {
    slug: "shiatsu-foot-massager-machine",
    name: "Shiatsu Foot Massager Machine",
    category: "Foot Massagers",
    categorySlug: "foot-massagers",
    primaryKeyword: "shiatsu foot massager manufacturer",
    secondaryKeywords: ["electric foot massager supplier", "foot massage machine OEM", "wholesale foot massager China"],
    intent: "transactional",
    metaTitle: "Shiatsu Foot Massager Manufacturer | OEM & Wholesale Factory",
    metaDescription:
      "Shiatsu foot massager manufacturer supplying enclosed dual-foot massage machines with heat options for branded home-wellness and retail ranges.",
    summary: "An enclosed dual-foot massage platform for branded home-wellness ranges.",
    images: gallery(9, 4, [1, 2, 3, 4]),
    tags: ["Enclosed foot system", "OEM / ODM", "Wholesale"],
    features: ["Dual-foot enclosure", "Kneading massage with heat function", "Multi-level intensity control"],
    customization: ["Housing color", "Control panel", "Power configuration", "Packaging"],
    applications: ["Home wellness retail", "Senior care channels", "Department store ranges"],
  },
  {
    slug: "foot-and-calf-massager",
    name: "Foot and Calf Massager",
    category: "Foot Massagers",
    categorySlug: "foot-massagers",
    primaryKeyword: "foot and calf massager manufacturer",
    secondaryKeywords: ["leg and foot massager supplier", "premium foot massager OEM", "calf massage machine factory"],
    intent: "transactional",
    metaTitle: "Foot & Calf Massager Manufacturer | Premium OEM Supplier",
    metaDescription:
      "Foot and calf massager manufacturer producing enclosed platforms covering feet and lower calves for premium wellness and private-label programs.",
    summary: "A larger enclosed massage platform covering feet and lower calves for premium wellness programs.",
    images: gallery(10, 6),
    tags: ["Foot and lower-calf format", "Private label", "Sample inquiry"],
    features: ["Deep foot wells", "Lower-calf contact area", "Model-specific programs available"],
    customization: ["Housing finish", "Controls", "Voltage", "Gift box"],
    applications: ["Premium wellness retail", "Clinic and spa supply", "High-value gifting"],
  },
  {
    slug: "air-compression-leg-massager",
    name: "Air Compression Leg Massager",
    category: "Leg Massagers",
    categorySlug: "leg-massagers",
    primaryKeyword: "air compression leg massager manufacturer",
    secondaryKeywords: ["calf compression massager supplier", "pneumatic leg massager OEM", "circulation leg massager factory"],
    intent: "transactional",
    metaTitle: "Air Compression Leg Massager Manufacturer | OEM Supplier",
    metaDescription:
      "Air compression leg massager manufacturer supplying calf-wrap pneumatic platforms for recovery, wellness retail and private-label programs.",
    summary: "A calf-wrap compression format for recovery, wellness and private-label retail programs.",
    images: gallery(6, 6),
    tags: ["Calf wrap", "OEM / ODM", "Compression format"],
    features: ["Wearable calf sleeves", "External control panel", "Sequential air compression modes"],
    customization: ["Sleeve material", "Controller", "Logo", "Packaging"],
    applications: ["Recovery and wellness retail", "Senior mobility channels", "Online health brands"],
  },
  {
    slug: "compression-leg-massager-boots",
    name: "Compression Leg Massager Boots",
    category: "Leg Massagers",
    categorySlug: "leg-massagers",
    primaryKeyword: "compression leg massager boots manufacturer",
    secondaryKeywords: ["recovery boots supplier China", "athlete compression boots OEM", "full leg massager factory"],
    intent: "transactional",
    metaTitle: "Compression Boots Manufacturer | Leg Recovery OEM Supplier",
    metaDescription:
      "Compression leg massager boots manufacturer producing full lower-leg recovery systems with foot coverage for sports recovery and wellness brands.",
    summary: "Full lower-leg compression boots with foot coverage for recovery and wellness programs.",
    images: gallery(8, 5),
    tags: ["Leg and foot coverage", "Controller included", "OEM / ODM"],
    features: ["Boot-style air chambers", "Lower-leg and foot coverage", "Multiple compression programmes"],
    customization: ["Sleeve size", "Controller", "Color", "Carrying bag"],
    applications: ["Sports recovery brands", "Training facilities", "Physiotherapy distribution"],
  },
  {
    slug: "shiatsu-massage-pillow",
    name: "Shiatsu Massage Pillow",
    category: "Massage Pillows & Cushions",
    categorySlug: "massage-pillows-cushions",
    primaryKeyword: "shiatsu massage pillow manufacturer",
    secondaryKeywords: ["kneading massage pillow supplier", "neck and back massage pillow OEM", "wholesale massage pillow China"],
    intent: "transactional",
    metaTitle: "Shiatsu Massage Pillow Manufacturer | OEM & Wholesale",
    metaDescription:
      "Shiatsu massage pillow manufacturer supplying compact kneading pillows for neck, back and waist positioning in retail and private-label ranges.",
    summary: "A compact kneading massage pillow for neck, back and waist positioning.",
    images: gallery(16, 6),
    tags: ["Compact pillow", "Kneading nodes", "OEM / ODM"],
    features: ["Butterfly pillow form", "Visible kneading nodes", "Multi-position product concept"],
    customization: ["Fabric", "Color", "Logo", "Power configuration"],
    applications: ["Home and office retail", "Automotive channels", "Gift programs"],
  },
  {
    slug: "heated-massage-pillow",
    name: "Heated Massage Pillow",
    category: "Massage Pillows & Cushions",
    categorySlug: "massage-pillows-cushions",
    primaryKeyword: "heated massage pillow supplier",
    secondaryKeywords: ["massage pillow with heat manufacturer", "car massage pillow OEM", "soft massage cushion wholesale"],
    intent: "transactional",
    metaTitle: "Heated Massage Pillow Supplier | OEM Factory China",
    metaDescription:
      "Heated massage pillow supplier producing soft compact platforms with heat options for home, office and vehicle wellness product ranges.",
    summary: "A soft compact massage pillow platform for home, office and vehicle wellness ranges.",
    images: gallery(17, 5),
    tags: ["Compact design", "Heat option", "Private label"],
    features: ["Soft pillow construction", "Visible kneading area", "Optional heat function"],
    customization: ["Upholstery", "Color", "Controls", "Packaging"],
    applications: ["Home comfort retail", "Vehicle accessory channels", "Seasonal gifting"],
  },
  {
    slug: "full-back-massage-seat-cushion",
    name: "Full Back Massage Seat Cushion",
    category: "Massage Pillows & Cushions",
    categorySlug: "massage-pillows-cushions",
    primaryKeyword: "full back massage seat cushion manufacturer",
    secondaryKeywords: ["massage chair pad supplier", "back massage cushion OEM", "office chair massager factory"],
    intent: "transactional",
    metaTitle: "Massage Seat Cushion Manufacturer | Full Back Pad OEM Supplier",
    metaDescription:
      "Full back massage seat cushion manufacturer supplying chair-mounted massage pads with seat, back and neck sections for office, home and automotive channels.",
    summary: "A chair-mounted full-back massage pad with seat, back and neck support sections.",
    images: gallery(19, 6, [5, 6]),
    tags: ["Full-back format", "Chair-mounted", "B2B supply"],
    features: ["Seat and back pad", "Neck support area", "Wired handheld controller"],
    customization: ["Upholstery", "Massage zones", "Controller", "Packaging"],
    applications: ["Office furniture channels", "Automotive accessories", "Home wellness retail"],
  },
  {
    slug: "heated-hand-massager",
    name: "Heated Hand Massager",
    category: "Targeted Body Massagers",
    categorySlug: "targeted-body-massagers",
    primaryKeyword: "heated hand massager manufacturer",
    secondaryKeywords: ["electric hand massager supplier", "palm massager OEM factory", "hand therapy device wholesale"],
    intent: "transactional",
    metaTitle: "Heated Hand Massager Manufacturer | OEM & Private Label",
    metaDescription:
      "Heated hand massager manufacturer producing enclosed hand massage devices with heat functions for wellness, senior care and private-label ranges.",
    summary: "An enclosed hand massage device with heat function for wellness and personal-care ranges.",
    images: gallery(21, 5),
    tags: ["Enclosed hand chamber", "Heat Function", "Private label"],
    features: ["Hand and wrist entry", "Heat function", "Air pressure massage mechanism"],
    customization: ["Shell color", "Controls", "Logo", "Gift box"],
    applications: ["Senior care retail", "Wellness e-commerce", "Health gifting"],
  },
  {
    slug: "kneading-hand-massager",
    name: "Kneading Hand Massager",
    category: "Targeted Body Massagers",
    categorySlug: "targeted-body-massagers",
    primaryKeyword: "kneading hand massager supplier",
    secondaryKeywords: ["hand massage machine manufacturer", "finger massager OEM China", "wholesale hand massager device"],
    intent: "transactional",
    metaTitle: "Kneading Hand Massager Supplier | OEM Manufacturer China",
    metaDescription:
      "Kneading hand massager supplier producing enclosed devices with finger-style kneading modules for wellness retail and private-label programs.",
    summary: "An enclosed hand massage device with finger-like kneading modules.",
    images: gallery(22, 4),
    tags: ["Kneading format", "Four Massage Modes", "OEM / ODM"],
    features: ["Enclosed hand chamber", "Finger-like kneading modules", "Four selectable massage modes"],
    customization: ["Shell finish", "Mode control", "Logo", "Packaging"],
    applications: ["Wellness retail", "Office and desk-worker channels", "Health distribution"],
  },
  {
    slug: "heated-lumbar-massager-belt",
    name: "Heated Lumbar Massager Belt",
    category: "Targeted Body Massagers",
    categorySlug: "targeted-body-massagers",
    primaryKeyword: "heated lumbar massager belt manufacturer",
    secondaryKeywords: ["waist massager supplier China", "back massage belt OEM", "lumbar heat belt factory"],
    intent: "transactional",
    metaTitle: "Lumbar Massage Belt Manufacturer | Heated Waist Massager OEM",
    metaDescription:
      "Heated lumbar massager belt manufacturer supplying wearable lower-back massage belts with heat and vibration for wellness and private-label programs.",
    summary: "A wearable lower-back massage belt with heat and vibration functions.",
    images: gallery(20, 4),
    tags: ["Lumbar support", "Heat Function", "Vibration Massage"],
    features: ["Wide waist wrap", "Lower-back positioning", "Heat and vibration functions"],
    customization: ["Fabric", "Controller", "Logo", "Retail packaging"],
    applications: ["Back-care retail", "Occupational wellness", "Online health brands"],
  },
  {
    slug: "heated-ankle-massager",
    name: "Heated Ankle Massager",
    category: "Targeted Body Massagers",
    categorySlug: "targeted-body-massagers",
    primaryKeyword: "heated ankle massager supplier",
    secondaryKeywords: ["ankle massage wrap manufacturer", "joint massager OEM factory", "ankle heat therapy wholesale"],
    intent: "transactional",
    metaTitle: "Heated Ankle Massager Supplier | Joint Wrap OEM Manufacturer",
    metaDescription:
      "Heated ankle massager supplier producing compact ankle wraps with heat and vibration for targeted recovery and private-label wellness ranges.",
    summary: "A compact wrap designed around the ankle for targeted heat and vibration product lines.",
    images: gallery(7, 6, [1, 2, 3, 4, 5, 6]),
    tags: ["Ankle wrap", "Heat Function", "Targeted format"],
    features: ["Ankle-focused wearable form", "Multi-level heat control", "Vibration massage function"],
    customization: ["Fabric", "Temperature control", "Logo", "Retail package"],
    applications: ["Sports recovery", "Senior mobility", "Pharmacy channels"],
  },
  {
    slug: "ems-facial-massager",
    name: "EMS Facial Massager",
    category: "Targeted Body Massagers",
    categorySlug: "targeted-body-massagers",
    primaryKeyword: "EMS facial massager manufacturer",
    secondaryKeywords: ["facial massage device supplier", "beauty device OEM China", "face massager private label"],
    intent: "transactional",
    metaTitle: "EMS Facial Massager Manufacturer | Beauty Device OEM Supplier",
    metaDescription:
      "EMS facial massager manufacturer supplying handheld facial-care devices with EMS, vibration and heat functions for beauty and private-label brands.",
    summary: "A handheld facial-care device with EMS, vibration and heat functions.",
    images: gallery(15, 6, [1, 5, 6]),
    tags: ["EMS Microcurrent", "Heat Function", "Beauty device"],
    features: ["Handheld facial format", "EMS and vibration functions", "Performance substantiation provided per order"],
    customization: ["Color", "Logo", "Controls", "Retail packaging"],
    applications: ["Beauty retail", "Skincare brands", "Beauty e-commerce"],
  },
];

export function getProduct(slug: string) {
  return products.find((product) => product.slug === slug);
}
