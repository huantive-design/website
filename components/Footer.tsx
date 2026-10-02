import Link from "next/link";
import { categories } from "@/lib/products";
import { site } from "@/lib/site";

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
        <div><h3>Connect</h3><Link href="/contact">Request a Quote</Link><Link href="/contact?intent=sample">Request Samples</Link><span>{site.phone}</span><span>{site.email}</span></div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} {site.name}</span><span>{site.manufacturer}</span></div>
    </footer>
  );
}
