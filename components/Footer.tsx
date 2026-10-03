import Link from "next/link";
import { categories } from "@/lib/products";
import { site, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="shell footer-grid">
        <div>
          <Link className="brand brand-light" href="/"><span className="brand-mark">H</span>{site.name}</Link>
          <p>{site.tagline} for global B2B programs.</p>
        </div>
        <div><h3>Product categories</h3>{categories.map((category) => <Link key={category.slug} href={`/products/category/${category.slug}`}>{category.name}</Link>)}</div>
        <div><h3>Company</h3><Link href="/products">All Products</Link><Link href="/oem-odm">OEM & ODM</Link><Link href="/blog">Blog</Link><Link href="/our-story">Our Story</Link><Link href="/#manufacturing">Manufacturing</Link><Link href="/#quality">Quality</Link></div>
        <div className="footer-connect">
          <h3>Contact us</h3>
          <a href={`mailto:${site.email}`}>
            <span className="connect-label">Email</span>
            <span className="connect-value">{site.email}</span>
          </a>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <span className="connect-label">WhatsApp</span>
            <span className="connect-value">{site.whatsapp}</span>
          </a>
          <a href={`tel:${site.phone.replace(/[^+\d]/g, "")}`}>
            <span className="connect-label">Phone</span>
            <span className="connect-value">{site.phone}</span>
          </a>
          <span className="connect-block">
            <span className="connect-label">Address</span>
            <span className="connect-value">{site.address}</span>
          </span>
          <span className="connect-block">
            <span className="connect-label">Business hours</span>
            <span className="connect-value">Mon–Sat, 09:00–18:00 (GMT+8)</span>
          </span>
          <Link className="connect-cta" href="/contact">Request a quote →</Link>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>{site.manufacturer}</span></div>
    </footer>
  );
}
