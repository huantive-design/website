import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/lib/blog";
import { procurementBlogPosts } from "@/lib/procurementBlogPosts";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Blog | Massage Device Manufacturing, OEM and Sourcing Guides",
  description:
    "B2B guides for massage device sourcing, OEM and ODM manufacturing, wholesale specifications, private-label programs, compliance and safe product selection.",
  alternates: { canonical: "/blog" },
};

const procurementTopics = procurementBlogPosts.map((post) => ({
  title: post.title,
  href: `/blog/${post.slug}`,
  keyword: post.primaryKeyword,
  intent: post.intent,
}));

export default function BlogIndexPage() {
  const [lead, ...rest] = blogPosts;

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }])) }} />

      <section className="blog-head">
        <div className="shell">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><span>Blog</span></nav>
          <h1>Massage device manufacturing, OEM and sourcing guides</h1>
          <p className="blog-lede">
            B2B buying guides for massage guns, neck massagers, air compression leg massagers, OEM/ODM programs, wholesale specifications and compliance-aware product selection.
          </p>
        </div>
      </section>

      <section className="shell blog-topic-hub" aria-labelledby="procurement-topic-title">
        <div className="blog-topic-copy">
          <p className="blog-flag">High-intent procurement topics</p>
          <h2 id="procurement-topic-title">Start with the searches most likely to become RFQs.</h2>
          <p>These pages concentrate buying intent around wholesale comparison, private-label manufacturer selection and OEM vs ODM planning.</p>
        </div>
        <div className="blog-topic-grid">
          {procurementTopics.map((topic) => (
            <Link href={topic.href} key={topic.href}>
              <small>{topic.keyword}</small>
              <strong>{topic.title}</strong>
              <span>{topic.intent}</span>
            </Link>
          ))}
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
