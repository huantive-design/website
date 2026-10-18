import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CertificateCarousel } from "@/components/CertificateCarousel";
import { InquiryForm } from "@/components/InquiryForm";
import { breadcrumbSchema, categoryFaqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Quality Control & Compliance | HUANTIVE Massage Devices",
  description:
    "Review HUANTIVE quality control and compliance evidence for massage device OEM programs: IQC, IPQC, FQC, model-specific documentation and destination-market checks.",
  alternates: { canonical: "/quality" },
};

const certificates = [
  { src: "https://sc04.alicdn.com/kf/Af336e50e1c9d431a932a4e764588e8673.jpg", alt: "Factory ISO 9001 quality management system certificate image" },
  { src: "https://sc04.alicdn.com/kf/A7e7c2b9d35a14550950a725fa44b6b20l.jpg", alt: "UK electrical equipment safety certificate image" },
  { src: "https://sc04.alicdn.com/kf/A58e5ae3b4d6a4f41bc665c0e1b101737Z.jpg", alt: "REACH test report certificate image" },
  { src: "https://sc04.alicdn.com/kf/Ac514a3dd8c354465bd7af6f394fc0defy.jpg", alt: "EU low voltage directive certificate image" },
  { src: "https://sc04.alicdn.com/kf/A7c049f219f604aa5a10f111e1dfd9b2dn.jpg", alt: "amfori BSCI monitoring summary report image" },
  { src: "https://sc04.alicdn.com/kf/A5030cc751f824ca1adebacb767c43511y.jpg", alt: "CE certificate image" },
  { src: "https://sc04.alicdn.com/kf/Acc5c113e5bc543b9b3d63f0828e3318aO.jpg", alt: "UKCA certificate image" },
  { src: "https://sc04.alicdn.com/kf/Afa27abaec4c8451098f42ae308b7fc83p.jpg", alt: "RoHS certificate image" },
  { src: "https://sc04.alicdn.com/kf/A9e50d1089be84ae48a84e2aff59730c3H.jpg", alt: "FCC supplier declaration of conformity image" },
];

const checkpoints = [
  { title: "IQC", copy: "Incoming materials and key components are checked before production use according to the selected product and order scope." },
  { title: "IPQC", copy: "In-process control reviews assembly, function, appearance and packaging requirements during production." },
  { title: "FQC", copy: "Finished products are checked before shipment release, with inspection scope and reporting format confirmed per order." },
];

const evidence = [
  ["Model-specific scope", "Certificates, declarations and test reports are matched to the quoted model, certificate holder, standard, date and destination market."],
  ["EU and UK documents", "Selected products have supporting EU LVD, UK electrical safety, RoHS and REACH documentation that must be verified by model."],
  ["North America checks", "Selected neck and shoulder massager models have UL/CSA testing references, and FCC documentation is available for selected models."],
  ["Factory monitoring", "The Wenzhou manufacturing site has undergone amfori BSCI monitoring; this is not a product certification."],
];

const faqs = [
  { q: "Do the same certificates apply to every product?", a: "No. Documentation must be confirmed by exact model, certificate holder, standard, issue date and destination market before quotation or shipment." },
  { q: "Does FDA registration mean FDA approval?", a: "No. FDA registration or listing documentation does not denote FDA approval." },
  { q: "Can buyers request inspection records?", a: "Yes. Inspection scope and reporting format can be confirmed with the selected model, order quantity and destination-market requirements." },
  { q: "When should compliance be checked?", a: "Compliance scope should be checked before sample approval and again before mass production if configuration, material, packaging or market requirements change." },
];

export default function QualityPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([
        { name: "Home", path: "/" },
        { name: "Quality", path: "/quality" },
      ])) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(categoryFaqSchema(faqs)) }} />

      <section className="page-hero quality-hero">
        <div className="shell">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true">/</span><b>Quality</b></nav>
          <p className="eyebrow">Quality control and compliance</p>
          <h1>Model-specific quality evidence for massage device buyers.</h1>
          <p>Quality and compliance documents are reviewed by exact model and destination market, not applied as universal claims across every product.</p>
          <div className="button-row">
            <Link className="button button-primary" href="/contact?intent=documentation">Request documentation</Link>
            <Link className="button button-secondary" href="/manufacturing">Review factory capability</Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Quality checkpoints</p><h2>Inspection before shipment release.</h2></div><p>Quality control is handled through project-specific checkpoints. Final inspection scope depends on product category, order requirements and destination market.</p></div>
        <div className="scope-grid">{checkpoints.map((item) => <article key={item.title}><strong>{item.title}</strong><p>{item.copy}</p></article>)}</div>
      </section>

      <section className="story-media-grid shell">
        <figure><Image src="/company/inspection-area.jpg" alt="Inspection area in the massage device factory" fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Inspection area</figcaption></figure>
        <figure><Image src="/company/patent-wall.jpg" alt="Patent and award display at the company" fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Patent and award display</figcaption></figure>
      </section>

      <section className="section quality-section">
        <div className="shell">
          <div className="section-heading"><div><p className="eyebrow eyebrow-light">Compliance evidence</p><h2>Documents matched to the selected model.</h2></div><p>Buyers should request the applicable documents for the quoted model and target market before final purchasing decisions.</p></div>
          <div className="compliance-grid">{evidence.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div>
          <p className="compliance-notice light">Certificates, declarations and test reports apply only to the companies, models, samples, materials, standards and dates identified in the applicable documents. They do not automatically cover all products or later production changes. Availability and current validity must be confirmed for each order and destination market. FDA registration or listing does not denote FDA approval. amfori BSCI monitoring is not a product certification. Test reports do not imply certification unless expressly stated by the issuing body.</p>
        </div>
      </section>

      <CertificateCarousel certificates={certificates} />

      <section className="section shell">
        <div className="section-heading"><div><p className="eyebrow">Buyer questions</p><h2>Quality and compliance FAQ</h2></div></div>
        <div className="faq-list">{faqs.map((faq) => <details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div>
      </section>

      <section className="final-rfq editorial-rfq">
        <div className="shell rfq-layout">
          <div>
            <p className="eyebrow eyebrow-light">Documentation review</p>
            <h2>Confirm the correct documents before quotation.</h2>
            <p>Share the target model, destination market, retailer checklist and expected quantity so the applicable quality and compliance scope can be reviewed.</p>
            <div className="rfq-badges"><span>Model-specific</span><span>Market-specific</span><span>Order-specific</span></div>
          </div>
          <InquiryForm compact />
        </div>
      </section>
    </>
  );
}
