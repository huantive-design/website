import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog | Massage Device Research, Safety and Sourcing",
  description:
    "Evidence-based guides on massage and recovery devices: independent test findings, safe use, specification literacy and sourcing compliance for European and North American markets.",
  alternates: { canonical: "/blog" },
};

export default function BlogIndexPage() {
  const [lead, ...rest] = blogPosts;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])) }} />

      <section className="blog-head">
        <div className="shell">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Blog</span></nav>
          <h1>Research, safety and sourcing</h1>
          <p className="blog-lede">
            Guides built on independent consumer testing, peer-reviewed research and published regulation — not marketing claims.
            Every article states its sources and the limits of the evidence.
          </p>
        </div>
      </section>

      <section className="shell blog-lead-wrap">
        <Link className="blog-lead" href={`/blog/${lead.slug}`}>
          <div className="blog-lead-media">
            <Image src={lead.cover} alt={lead.coverAlt} width={900} height={900} sizes="(max-width: 980px) 100vw, 50vw" priority />
          </div>
          <div className="blog-lead-body">
            <span className="blog-flag">{lead.market} · {lead.readingMinutes} min read</span>
            <h2>{lead.title}</h2>
            <p>{lead.excerpt}</p>
            <span className="blog-more">Read article →</span>
          </div>
        </Link>
      </section>

      <section className="shell blog-grid-wrap">
        <h2 className="blog-section-title">All articles</h2>
        <div className="blog-grid">
          {rest.map((post) => (
            <Link className="blog-card" key={post.slug} href={`/blog/${post.slug}`}>
              <div className="blog-card-media">
                <Image src={post.cover} alt={post.coverAlt} width={600} height={600} sizes="(max-width: 700px) 100vw, 33vw" />
              </div>
              <div className="blog-card-body">
                <span className="blog-flag">{post.market} · {post.readingMinutes} min</span>
                <h3>{post.title}</h3>
                <p>{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="blog-note">
        <div className="shell">
          <h2>How these articles are written</h2>
          <div className="note-grid">
            <div>
              <h3>Sources are named</h3>
              <p>Every factual claim links to its origin with a publication date — consumer test bodies, peer-reviewed journals or published regulation.</p>
            </div>
            <div>
              <h3>Claims stay within scope</h3>
              <p>A therapeutic massager is a Class I device intended to relieve minor muscle aches and pains. We do not claim treatment of any medical condition.</p>
            </div>
            <div>
              <h3>Limitations are stated</h3>
              <p>Where the underlying research is modest or methodologically limited, the article says so rather than overstating the result.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
