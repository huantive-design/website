export const site = {
  name: "HUANTIVE",
  legalName: "Huangtai & Wanyang Group",
  manufacturer: "Wenzhou Wanyang Electronic Technology Co., Ltd.",
  tagline: "Massage Device Manufacturing & OEM Solutions",
  description:
    "China-based B2B manufacturer of massage and recovery devices for distributors, retailers, private-label brands, and e-commerce programs in Europe and North America.",
  email: "huantive@huantive.com",
  phone: "+86 577 6305 0999",
  whatsapp: "+86 178 1556 3471",
  // wa.me requires the number without "+", spaces or dashes.
  whatsappNumber: "8617815563471",
  whatsappMessage: "Hello HUANTIVE, I would like to enquire about your massage device OEM programs.",
  address: "No. 952-992, Xingrong Road, Wanquan Town, Pingyang County, Wenzhou, Zhejiang 325409, China",
  responseTime: "Response target: within 24 hours",
};

// wa.me opens the WhatsApp contact/chat screen on both mobile apps and desktop web.
export const whatsappLink = `https://wa.me/${site.whatsappNumber}?text=${encodeURIComponent(site.whatsappMessage)}`;

export const navigation = [
  { label: "Products", href: "/products", hasMega: true },
  { label: "OEM & ODM", href: "/oem-odm" },
  { label: "Manufacturing", href: "/#manufacturing" },
  { label: "Quality", href: "/#quality" },
  { label: "Our Story", href: "/our-story" },
  { label: "Blog", href: "/blog" },
];

export const megaMenuSolutions = [
  { label: "Private label programs", href: "/oem-odm", note: "Launch under your own brand" },
  { label: "Wholesale & distribution", href: "/contact?intent=wholesale", note: "Volume supply by market" },
  { label: "Sample evaluation", href: "/contact?intent=sample", note: "Test before committing" },
];
