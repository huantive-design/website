import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { InquiryForm } from "@/components/InquiryForm";
import { ProductGallery } from "@/components/ProductGallery";
import { getProduct, getCategory, products, productsByCategory, tradeTerms } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";
import { TrackedLink } from "@/components/TrackedLink";
import { breadcrumbSchema, categoryFaqSchema, productSchema } from "@/lib/schema";

type ProductPageProps = { params: Promise<{ slug: string }> };

type ProductForApplicationCopy = NonNullable<ReturnType<typeof getProduct>>;

const channelValueCopy: Record<string, Record<string, string>> = {
  "wearable-neck-massager": {
    "Wellness retail": "Use this open-neck, cordless format for wellness shelves where buyers need a light device that feels approachable for first-time neck-massager customers.",
    "E-commerce brands": "The TENS pulse, voice prompt and remote-control feature set gives online listings several concrete comparison points beyond a generic neck massager photo.",
    "Corporate gifting": "Cordless use, compact size and customizable voice broadcast make the model easier to position for branded wellness gifts and employee-care campaigns.",
  },
  "shiatsu-neck-shoulder-massager": {
    "Home wellness retail": "The wrap-style body coverage and home or vehicle power options support retail positioning as a multi-area household massager rather than a single neck device.",
    "Automotive accessory channels": "Car lighter support gives automotive and travel channels a concrete reason to compare this model against ordinary plug-in shoulder massagers.",
    "Distributor programs": "Gift-box packing, reversible kneading and documented carton data help distributors evaluate shelf readiness, logistics and repeat replenishment.",
  },
  "hot-cold-massage-gun": {
    "Sports recovery brands": "The thermal-head concept helps recovery brands create a more differentiated line extension than a standard percussion gun, provided the final temperature data is confirmed.",
    "Physiotherapy channels": "Clinics and therapy distributors should use this page to request exact thermal range, attachments and runtime before sample evaluation.",
    "Premium retail": "Hot/cold positioning can support a higher-value retail story when packaging, accessory set and model-specific claims are controlled carefully.",
  },
  "mini-massage-gun": {
    "E-commerce marketplaces": "The compact body, multiple colourways and hot/cold head options provide listing-friendly differentiation for marketplace bundles and private-label storefronts.",
    "Travel retail": "Small size, USB charging and bag packing make the model better suited to travel and portable recovery ranges than full-size massage guns.",
    "Promotional gifting": "Colour selection, accessory set and gift packaging give promotional buyers more room to build tiered branded gift programs.",
  },
  "deep-tissue-massage-gun": {
    "Fitness and gym channels": "The full-size body, 1300-3200 RPM range and eight-head set suit gym and fitness buyers comparing performance feel during sample testing.",
    "Sports retail": "A 2500 mAh battery, LCD control and carry-case style packing give sports retailers concrete specification points for shelf comparison.",
    "Distributor programs": "Carton data, attachment set and established HT-HN026 model information make the page useful for distributors building repeatable wholesale assortments.",
  },
  "air-compression-leg-massager": {
    "Recovery and wellness retail": "The calf-wrap format is easier to position for home recovery shelves than full boot systems when buyers want a softer, more compact wearable device.",
    "Senior mobility channels": "Adjustable straps, heat settings and cordless use give senior mobility buyers practical fit and comfort points to confirm during sampling.",
    "Online health brands": "Single-leg and pair packing options help online brands test different price points and bundle strategies before committing to bulk production.",
  },
  "shiatsu-foot-massager-machine": {
    "Home wellness retail": "The enclosed dual-foot format, rolling, scraping, air compression and heat create a premium home-wellness proposition for retailers.",
    "Senior care channels": "Simple program selection and seated-use positioning make this model relevant for senior-care buyers evaluating comfort and ease of operation.",
    "Department store ranges": "The larger appliance-like form and multi-function specification suit department-store buyers comparing perceived value and packaging presentation.",
  },
  "compression-leg-massager-boots": {
    "Sports recovery brands": "Full-leg boot RFQs should focus on chamber layout, controller logic and pressure range so sports recovery brands can compare against established recovery-boot expectations.",
    "Training facilities": "Facility buyers should confirm sleeve size range, cleaning requirements and controller durability before sample approval.",
    "Physiotherapy distribution": "Therapy distributors need exact pressure, program and documentation data before positioning the product for professional or home recovery channels.",
  },
  "heated-massage-pillow": {
    "Home comfort retail": "The heated pillow concept fits home-comfort shelves where buyers need a compact product story around sofa, bed or desk relaxation routines.",
    "Vehicle accessory channels": "Before quoting vehicle accessory programs, buyers should confirm adapter route, fixing method and heat specification for the selected model.",
    "Seasonal gifting": "Compact size and heat positioning make the product suitable for seasonal wellness gifts once packaging, manual language and claims are approved.",
  },
  "kneading-hand-massager": {
    "Wellness retail": "This RFQ page should be used to confirm whether the final model supports the kneading feel and enclosed hand-chamber experience expected by wellness retailers.",
    "Office and desk-worker channels": "Desk-worker positioning depends on final size, noise, heat and session logic, so buyers should request the approved configuration before listing.",
    "Health distribution": "Health distributors need exact mode, charging and carton data before evaluating whether the product fits hand-care assortments.",
  },
};

function productApplicationCopy(product: ProductForApplicationCopy, application: string) {
  const explicit = channelValueCopy[product.slug]?.[application];
  if (explicit) return explicit;
  if (product.categorySlug === "massage-guns") return `${application} buyers should compare motor feel, speed range, battery runtime, attachment set and case or gift-box configuration before adding this massage gun to a recovery range.`;
  if (product.categorySlug === "neck-shoulder-massagers") return `${application} buyers should evaluate wearing style, kneading comfort, heat feel, power route and fabric finish because these details shape return risk and repeat purchase potential.`;
  if (product.categorySlug === "foot-massagers") return `${application} buyers should review massage coverage, heat position, user controls, appliance size and carton data because foot massagers affect shelf space and freight planning more than handheld devices.`;
  if (product.categorySlug === "leg-massagers") return `${application} buyers should confirm compression coverage, sleeve fit, controller logic, heat function and packing route so the product matches the intended recovery or mobility use case.`;
  if (product.categorySlug === "massage-pillows-cushions") return `${application} buyers should compare body coverage, mounting method, heat option, power route and upholstery finish to decide whether the item fits home, office or vehicle use.`;
  return `${application} buyers should confirm contact area, comfort level, heat or vibration logic, charging method and packaging format before positioning this targeted massager in a retail range.`;
}

export function generateStaticParams() { return products.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  return product ? {
    title: product.metaTitle,
    description: product.metaDescription,
    alternates: { canonical: `/products/${product.slug}` },
  } : {};
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();
  const category = getCategory(product.categorySlug);
  const related = productsByCategory(product.categorySlug).filter((item) => item.slug !== product.slug).slice(0, 3);
  const sourcingChannels = product.applications.join(", ").toLowerCase();
  const specificationFocus = product.specs
    ? `Model ${product.specs.model} is presented with model-specific electrical, dimensional and packing data for quotation review.`
    : "A quotation specialist can confirm the selected model, electrical data, dimensional data and packing route for your target market.";
  const productH1 = product.specs?.model
    ? `${product.specs.model} ${product.name} for OEM & Wholesale`
    : product.slug === "hot-cold-massage-gun"
      ? "Hot and Cold Massage Gun Manufacturer for Private Label Brands"
      : `${product.name} Manufacturer for OEM & Private Label Programs`;
  const procurementNotes = product.procurementNotes ?? [
    `${product.name} is positioned for ${sourcingChannels} where buyers compare function set, packing data, OEM scope and sample availability before purchase orders.`,
    specificationFocus,
    "For Europe and North America, compliance documents, plug or voltage requirements, manual language and packaging artwork should be confirmed against the exact destination market before production.",
  ];
  const specificationItems = [
    product.specs?.model ? "model number" : "model number to confirm",
    product.specs?.power ? "power or voltage data" : "power and plug requirements",
    product.specs?.battery ? "battery and runtime data" : "battery, charging and runtime data",
    product.specs?.packageSize || product.specs?.cartonSize ? "package and carton data" : "package size, carton quantity and loading data",
  ];
  const faqs = product.faqs ?? [
    {
      q: `Can HUANTIVE manufacture ${product.name.toLowerCase()} for private-label programs?`,
      a: `Yes. HUANTIVE supports OEM, ODM and private-label sourcing for this ${product.category.toLowerCase()} platform. Logo, colour, packaging, manual language and market configuration are confirmed against order volume and the selected model.`,
    },
    {
      q: `Which specifications are available for ${product.name}?`,
      a: product.specs
        ? `The page displays the model number${product.specs.battery ? ", battery" : ""}${product.specs.power ? ", power or voltage" : ""}${product.specs.productSize ? ", product size" : ""}${product.specs.packageSize ? ", package size" : ""}${product.specs.cartonSize ? " and carton data" : ""} needed for quotation review.`
        : "Buyers can request the selected-model specification, electrical data, packaging data and documentation scope with the quotation.",
    },
    {
      q: "What should a buyer include in the RFQ?",
      a: "Send target quantity, destination market, required plug or voltage, logo and packaging needs, sample request, launch timeline and any retailer compliance checklist.",
    },
    {
      q: "Are certifications shown as universal approvals?",
      a: "No. Certificates and test reports are treated as model-specific documents. Applicability is checked by model, certificate holder, standard, issue date and destination market before quotation.",
    },
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema(product.name, product.summary, { model: product.specs?.model, colors: product.specs?.colors, battery: product.specs?.battery, power: product.specs?.power, productSize: product.specs?.productSize, weight: product.specs?.netGrossWeight, packageSize: product.specs?.packageSize, cartonSize: product.specs?.cartonSize, cartonWeight: product.specs?.cartonWeight, images: product.images.slice(0, 3), category: product.category, url: `/products/${product.slug}` })) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryFaqSchema(faqs)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: product.category, path: `/products/category/${product.categorySlug}` },
        { name: product.name, path: `/products/${product.slug}` },
      ])) }} />

      <section className="product-hero section"><div className="shell product-hero-grid">
        <ProductGallery images={product.images} alts={product.imageAlts} productName={product.name} />
        <div className="product-info">
          <nav className="crumbs" aria-label="Breadcrumb">
            <Link href="/products">Products</Link><span aria-hidden="true">/</span>
            <Link href={`/products/category/${product.categorySlug}`}>{product.category}</Link>
          </nav>
          <p className="product-seo-kicker">{product.primaryKeyword}</p>
          <h1>{productH1}</h1>
          <p className="hero-lede">{product.buyerSummary ?? product.summary}</p>
          <div className="tag-list">{product.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
          <dl className="quick-specs">
            {product.specs?.model ? <div><dt>Model</dt><dd>{product.specs.model}</dd></div> : null}
            <div><dt>Product category</dt><dd><Link href={`/products/category/${product.categorySlug}`}>{product.category}</Link></dd></div>
            <div><dt>Business model</dt><dd>OEM / ODM / private label</dd></div>
            <div><dt>Sales enquiries</dt><dd><a href={`mailto:${site.email}`}>{site.email}</a></dd></div>
          </dl>
          <div className="button-row product-cta-row">
            <TrackedLink className="button button-primary" href={`/contact?intent=quotation&product=${product.slug}`} tracking={{ event: "quote_click", category: "product_hero", label: product.slug }}>Get MOQ &amp; Lead Time</TrackedLink>
            <TrackedLink className="button button-secondary" href={`/contact?intent=oem&product=${product.slug}`} tracking={{ event: "quote_click", category: "product_hero", label: `${product.slug}:oem` }}>Ask OEM Options</TrackedLink>
            <TrackedLink className="button button-secondary" href={whatsappLink} target="_blank" rel="noopener noreferrer" tracking={{ event: "whatsapp_click", category: "product_hero", label: product.slug }}>WhatsApp Supplier</TrackedLink>
          </div>
          <p className="quote-promise">Send the model and target quantity. We reply with MOQ, lead time, packaging options and available compliance documents.</p>
          <div className="buyer-summary-card" aria-label="B2B sourcing summary">
            <div><span>Best-fit buyers</span><strong>{product.applications.slice(0, 3).join(" / ")}</strong></div>
            <div><span>Factory program</span><strong>OEM / ODM / private label</strong></div>
            <div><span>Quotation scope</span><strong>MOQ, sample, packaging, lead time</strong></div>
            <div><span>Document review</span><strong>By model and destination market</strong></div>
          </div>
        </div>
      </div></section>

      <section className="section section-muted"><div className="shell">
        <div className="section-heading"><div><p className="eyebrow">Product overview</p><h2>{product.name} sourcing overview.</h2></div><p>Technical values, claims and compliance scope are confirmed against the selected model before quotation.</p></div>
        <div className="procurement-copy">
          {procurementNotes.map((note) => <p key={note}>{note}</p>)}
        </div>
        <div className="seo-asset-grid" aria-label="Procurement decision details">
          <article>
            <span>01</span>
            <strong>Model and specifications</strong>
            <p>Buyers should compare {specificationItems.join(", ")} before confirming samples or bulk production.</p>
          </article>
          <article>
            <span>02</span>
            <strong>Accessories and packaging</strong>
            <p>Confirm included accessories, manual language, retail box artwork, carton data and any private-label packaging requirement.</p>
          </article>
          <article>
            <span>03</span>
            <strong>OEM / ODM scope</strong>
            <p>{product.customization.join(", ")} can be reviewed against order volume, tooling needs, lead time and destination market requirements.</p>
          </article>
          <article>
            <span>04</span>
            <strong>Compliance documents</strong>
            <p>Certification and test-report applicability must be checked by exact model, certificate holder, standard, issue date and destination market.</p>
          </article>
        </div>
        <div className="due-grid">{product.features.map((feature) => <div key={feature}><span>✓</span>{feature}</div>)}</div>
      </div></section>

      {product.specs ? (
        <section className="section shell" id="specifications">
          <div className="section-heading"><div><p className="eyebrow">Technical specification</p><h2>Verified data for model {product.specs.model}.</h2></div><p>Electrical, dimensional and packaging data for this model. Values are confirmed again on the pro-forma invoice for your destination market.</p></div>
          <div className="spec-table">
            <table>
              <tbody>
                <tr><th scope="row">Model number</th><td>{product.specs.model}</td></tr>
                {product.specs.colors ? <tr><th scope="row">Standard colours</th><td>{product.specs.colors}</td></tr> : null}
                {product.specs.battery ? <tr><th scope="row">Battery</th><td>{product.specs.battery}</td></tr> : null}
                {product.specs.power ? <tr><th scope="row">Rated power / voltage</th><td>{product.specs.power}</td></tr> : null}
                {product.specs.productSize ? <tr><th scope="row">Product size</th><td>{product.specs.productSize}</td></tr> : null}
                {product.specs.netGrossWeight ? <tr><th scope="row">Net / gross weight</th><td>{product.specs.netGrossWeight}</td></tr> : null}
                {product.specs.packageSize ? <tr><th scope="row">Package size</th><td>{product.specs.packageSize}</td></tr> : null}
                {product.specs.cartonSize ? <tr><th scope="row">Carton size and quantity</th><td>{product.specs.cartonSize}</td></tr> : null}
                {product.specs.cartonWeight ? <tr><th scope="row">Carton weight</th><td>{product.specs.cartonWeight}</td></tr> : null}
              </tbody>
            </table>
          </div>
        </section>
      ) : null}

      <section className="section section-muted"><div className="shell">
        <div className="section-heading"><div><p className="eyebrow">Ordering terms</p><h2>Factory terms for this product range.</h2></div><p>Commercial terms are confirmed by selected model, customization scope, destination market and approved quotation.</p></div>
        <dl className="terms-grid">
          <div><dt>Branding MOQ</dt><dd>{tradeTerms.moqBranding}</dd></div>
          <div><dt>Custom colour MOQ</dt><dd>{tradeTerms.moqColor}</dd></div>
          <div><dt>Production lead time</dt><dd>{tradeTerms.leadTime}</dd></div>
          <div><dt>Warranty</dt><dd>{tradeTerms.warranty}</dd></div>
          <div><dt>Accessory set</dt><dd>{tradeTerms.accessoryScope}</dd></div>
          <div><dt>Packaging scope</dt><dd>{tradeTerms.packagingScope}</dd></div>
          <div><dt>Compliance scope</dt><dd>{tradeTerms.complianceScope}</dd></div>
          <div><dt>Payment — bulk</dt><dd>{tradeTerms.paymentBulk}</dd></div>
          <div><dt>Payment — small order</dt><dd>{tradeTerms.paymentSmall}</dd></div>
        </dl>
      </div></section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Target channels</p><h2>Best-fit B2B applications.</h2></div><p>Positioning guidance based on the product format. Final market and channel strategy remain your commercial decision.</p></div>
        <div className="application-grid">{product.applications.map((item) => <article key={item}><strong>{item}</strong><p>{productApplicationCopy(product, item)}</p></article>)}</div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Buyer FAQ</p><h2>{product.name} OEM sourcing questions.</h2></div><p>Answers focus on model-specific quotation details and the factory sourcing workflow.</p></div>
        <div className="faq-list">
          {faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}
        </div>
      </section>

      <section className="section dark-section"><div className="shell split-grid">
        <div><p className="eyebrow eyebrow-light">Customization</p><h2>Adapt the platform to your program.</h2><p>Scope depends on volume, tooling, compliance, and target launch date.</p><Link className="button button-light" href="/oem-odm">See the OEM process →</Link></div>
        <div className="capability-grid">{product.customization.map((item) => <span key={item}>{item}</span>)}</div>
      </div></section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Buyer due diligence</p><h2>Information supplied with your quotation.</h2></div><p>Designed for importers, distributors, retail buyers and private-label teams comparing factory partners.</p></div>
        <div className="due-grid">{["Selected-model technical specification", "Applicable test and conformity documentation", "Packaging, carton and loading data", "MOQ, sample policy and lead time", "Warranty and quality-control scope", "Branding and market configuration options"].map((item) => <div key={item}><span>✓</span>{item}</div>)}</div>
        <p className="compliance-notice">Certificates and test reports apply only to the companies, models, samples, materials, standards and dates identified in each document. Applicability and current validity are confirmed for every order and destination market.</p>
      </section>

      <section className="section section-muted"><div className="shell">
        <div className="section-heading"><div><p className="eyebrow">RFQ checklist</p><h2>Send the details buyers usually compare.</h2></div><p>Including these items helps us answer with a model-specific quotation instead of a generic catalogue reply.</p></div>
        <div className="scope-grid">
          <article><strong>Product and quantity</strong><p>Target model, estimated first order quantity, sample requirement and expected launch window.</p></article>
          <article><strong>Market and compliance</strong><p>Destination country, voltage or plug needs, document requirements and retailer onboarding checks.</p></article>
          <article><strong>Branding scope</strong><p>Logo, colour, manual language, packaging artwork, accessory set and any private-label changes.</p></article>
        </div>
        <div className="product-seo-links" aria-label="Product sourcing links">
          <Link href={`/products/category/${product.categorySlug}`}>Compare OEM models</Link>
          <Link href="/oem-odm">Review OEM / ODM process</Link>
          <Link href={`/contact?intent=specifications&product=${product.slug}`}>Request specifications</Link>
          <Link href={`/contact?intent=quotation&product=${product.slug}`}>Get MOQ &amp; lead time</Link>
        </div>
      </div></section>

      {related.length > 0 && (
        <section className="section section-muted related-products"><div className="shell">
          <div className="section-heading"><div><p className="eyebrow">Same category</p><h2>Related {category?.name.toLowerCase()}.</h2></div><Link href={`/products/category/${product.categorySlug}`}>View all in category →</Link></div>
          <div className="related-product-grid">
            {related.map((item) => (
              <Link className="related-product-card" key={item.slug} href={`/products/${item.slug}`}>
                <span className="related-product-thumb"><Image src={item.images[0]} alt={`${item.name} product image`} fill sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw" /></span>
                <span className="related-product-copy">
                  <strong>{item.name}</strong>
                  <small>{item.summary}</small>
                  <b>View details →</b>
                </span>
              </Link>
            ))}
          </div>
        </div></section>
      )}

      <section className="section final-rfq"><div className="shell rfq-layout">
        <div><p className="eyebrow eyebrow-light">Factory quote</p><h2>Get MOQ, lead time and OEM options.</h2><p>Tell us the product and your approximate quantity. We will reply with the available specification, MOQ, sample option, packaging route, lead time and applicable compliance documents.</p></div>
        <InquiryForm compact defaultProduct={product.name} defaultMessage={`Please send MOQ, sample cost, lead time, packaging options and applicable compliance documents for ${product.name}.`} />
      </div></section>
    </>
  );
}
