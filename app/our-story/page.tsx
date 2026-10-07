import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Our Story | China Massage Device Manufacturer",
  description: "Meet Huangtai & Wanyang Group: an integrated massage device manufacturer with product development, production, quality control and global B2B support.",
};

const milestones = [
  ["2006", "Business founded and entered massage-device manufacturing."],
  ["2010", "Expanded from product manufacturing into a broader health-technology portfolio."],
  ["2013", "Established a Wenzhou production base and strengthened integrated manufacturing."],
  ["2018", "Established a Zhejiang base and expanded product development and supply capacity."],
  ["2023", "Established the Hubei production base and continued building group manufacturing capability."],
];

const compliance = [
  ["EU LVD", "Selected shoulder massager and massage pillow models were evaluated against Directive 2014/35/EU and listed EN 60335 standards."],
  ["UK electrical safety", "Selected models have conformity documentation against the UK Electrical Equipment (Safety) Regulations 2016 and listed BS EN standards."],
  ["EU RoHS", "Test results for selected models were reported as complying with Directive 2011/65/EU and amendment (EU) 2015/863."],
  ["REACH Annex XVII", "Samples from listed massage models passed azo colourants and azo dyes testing against Entry 43."],
  ["UL / CSA testing", "Selected neck and shoulder massager models were tested against specified UL 1647 and CSA C22.2 requirements."],
  ["amfori BSCI monitoring", "The Wenzhou manufacturing site has undergone amfori BSCI monitoring; documentation is available on request."],
  ["FDA documentation", "Establishment registration and device listing documentation exists for an electric therapeutic massager; registration does not denote FDA approval."],
  ["FCC documentation", "Part 15 test documentation and an SDoC document are available for selected shoulder massager models on request."],
];

export default function OurStoryPage() {
  return (
    <>
      <section className="story-hero">
        <Image src="/company/factory-campus.png" alt="Huangtai and Wanyang Group manufacturing campus in China" fill priority sizes="100vw" />
        <div className="story-overlay" />
        <div className="shell story-hero-copy"><p className="eyebrow eyebrow-light">Our story</p><h1>Built around product development and manufacturing.</h1><p>{site.legalName} integrates product research, design, manufacturing and B2B delivery for massage and recovery device programs.</p></div>
      </section>

      <section className="section shell"><div className="story-intro"><div><p className="eyebrow">China source manufacturer</p><h2>From an idea to a repeatable product program.</h2></div><p>{site.manufacturer} focuses on massage and personal wellness products for distributors, retailers, private-label brands and e-commerce operators. The group presents more than 18 years of industry experience and supports OEM/ODM development for global markets.</p></div><div className="story-stats"><div><strong>18+</strong><span>Years of industry experience</span></div><div><strong>15+</strong><span>R&amp;D engineers</span></div><div><strong>260+</strong><span>Team members</span></div><div><strong>34,000+ m²</strong><span>Combined factory space</span></div><div><strong>3M</strong><span>Approx. annual massage-device capacity</span></div></div></section>

      <section className="story-media-grid shell"><figure><Image src="/company/office-team.jpg" alt="Huangtai and Wanyang office team" fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Team collaboration and commercial support</figcaption></figure><figure><Image src="/company/showroom.jpg" alt="Massage device showroom with multiple product categories" fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Product showroom and portfolio evaluation</figcaption></figure></section>

      <section className="section section-muted"><div className="shell split-grid"><div><p className="eyebrow">Development path</p><h2>Manufacturing capability built over time.</h2><p>Our operating model connects market feedback, product development, sourcing, assembly, inspection and delivery. Each project is reviewed against the selected model, destination market and required compliance scope.</p></div><ol className="timeline">{milestones.map(([year, copy]) => <li key={year}><strong>{year}</strong><p>{copy}</p></li>)}</ol></div></section>

      <section className="section shell"><div className="section-heading"><div><p className="eyebrow">Inside manufacturing</p><h2>Real production, not stock imagery.</h2></div><p>Our website uses photographs from the group’s actual campus, workshop, inspection area and showroom.</p></div><div className="factory-gallery"><figure><Image src="/company/cutting-workshop.jpg" alt="Material cutting process in the massage device workshop" fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Material cutting</figcaption></figure><figure><Image src="/company/inspection-area.jpg" alt="Inspection area in the massage device factory" fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Inspection area</figcaption></figure><figure><Image src="/company/patent-wall.jpg" alt="Patent and award display at the company" fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Patent and award display</figcaption></figure><figure><Image src="/company/scalp-showroom.jpg" alt="Targeted massager product display in the showroom" fill sizes="(max-width: 800px) 100vw, 50vw" /><figcaption>Targeted wellness product display</figcaption></figure></div></section>

      <section className="section quality-section"><div className="shell"><div className="section-heading"><div><p className="eyebrow eyebrow-light">Compliance evidence</p><h2>Documentation matched to the selected model.</h2></div><p>We do not apply one certificate to every product. Buyers receive the documents applicable to the quoted model and market.</p></div><div className="compliance-grid">{compliance.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div><p className="compliance-notice light">Certificates, declarations and test reports apply only to the companies, models, samples, materials, standards and dates identified in the applicable documents. They do not automatically cover all products or later production changes. Availability and current validity must be confirmed for each order and destination market. FDA registration or listing does not denote FDA approval. amfori BSCI monitoring is not a product certification. Test reports do not imply certification unless expressly stated by the issuing body.</p></div></section>

      <section className="section shell contact-band"><div><p className="eyebrow">Factory contact</p><h2>Build your next massage product with us.</h2><p>{site.address}</p><p>{site.phone}</p><p>Sales inquiries: <a href={`mailto:${site.email}`}>{site.email}</a></p></div><Link className="button button-primary" href="/contact">Send your sourcing brief</Link></section>
    </>
  );
}
