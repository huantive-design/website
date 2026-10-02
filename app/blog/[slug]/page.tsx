import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts, getPost, otherPosts } from "@/lib/blog";
import { getCategory } from "@/lib/products";
import { articleSchema, blogFaqSchema, breadcrumbSchema } from "@/lib/schema";

type PostPageProps = { params: Promise<{ slug: string }> };

// Section headings follow the article language so non-English pages do not mix locales.
const labels: Record<string, { faq: string; sources: string; disclaimer: string }> = {
  en: {
    faq: "Frequently asked questions",
    sources: "Sources",
    disclaimer:
      "This article is general information, not medical advice. A therapeutic massager is intended to relieve minor muscle aches and pains; it does not diagnose, treat, cure or prevent any disease. Consult a qualified healthcare professional about your individual circumstances.",
  },
  de: {
    faq: "Haeufige Fragen",
    sources: "Quellen",
    disclaimer:
      "Dieser Beitrag dient der allgemeinen Information und ersetzt keine medizinische Beratung. Ein Massagegeraet dient der Linderung leichter Muskelbeschwerden; es diagnostiziert, behandelt oder heilt keine Krankheiten. Wenden Sie sich bei gesundheitlichen Fragen an qualifiziertes Fachpersonal.",
  },
  fr: {
    faq: "Questions frequentes",
    sources: "Sources",
    disclaimer:
      "Cet article fournit une information generale et ne constitue pas un avis medical. Un appareil de massage vise a soulager des douleurs musculaires legeres ; il ne diagnostique, ne traite ni ne guerit aucune maladie. Consultez un professionnel de sante qualifie pour votre situation personnelle.",
  },
  it: {
    faq: "Domande frequenti",
    sources: "Fonti",
    disclaimer:
      "Questo articolo ha finalita informative e non costituisce un parere medico. Un dispositivo di massaggio e destinato ad alleviare lievi fastidi muscolari; non diagnostica, cura ne previene alcuna malattia. Per la propria situazione consultare un professionista sanitario qualificato.",
  },
  es: {
    faq: "Preguntas frecuentes",
    sources: "Fuentes",
    disclaimer:
      "Este articulo ofrece informacion general y no constituye consejo medico. Un dispositivo de masaje esta destinado a aliviar molestias musculares leves; no diagnostica, trata ni cura ninguna enfermedad. Consulte a un profesional sanitario cualificado sobre su caso concreto.",
  },
};

export function generateStaticParams() { return blogPosts.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: PostPageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: `/blog/${post.slug}`, languages: { [post.locale]: `/blog/${post.slug}` } },
    openGraph: { title: post.metaTitle, description: post.metaDescription, images: [post.cover], type: "article", locale: post.locale },
  };
}

export default async function BlogPostPage({ params }: PostPageProps) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const category = getCategory(post.relatedCategory);
  const related = post.relatedPosts.map((related) => getPost(related)).filter(Boolean);
  const more = related.length ? related : otherPosts(post.slug, 2);

  return (
    <article lang={post.lang}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema(post)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(blogFaqSchema(post.faq)) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Blog", path: "/blog" }, { name: post.title, path: `/blog/${post.slug}` }])) }} />

      <header className="post-head">
        <div className="shell post-head-inner">
          <nav className="crumbs" aria-label="Breadcrumb"><Link href="/">Home</Link><span>/</span><Link href="/blog">Blog</Link><span>/</span><span>{post.market}</span></nav>
          <span className="blog-flag">{post.market} · {post.intent} · {post.readingMinutes} min read</span>
          <h1>{post.title}</h1>
          <p className="post-excerpt">{post.excerpt}</p>
          <p className="post-meta">
            Published <time dateTime={post.published}>{post.published}</time>
            {post.updated !== post.published && <> · Updated <time dateTime={post.updated}>{post.updated}</time></>}
          </p>
        </div>
      </header>

      <div className="post-cover">
        <div className="shell">
          <Image src={post.cover} alt={post.coverAlt} width={1400} height={760} sizes="100vw" priority />
        </div>
      </div>

      <div className="shell post-body">
        {post.sections.map((section) => (
          <section className="post-section" key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs?.map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
            {section.bullets && <ul>{section.bullets.map((bullet) => <li key={bullet.slice(0, 40)}>{bullet}</li>)}</ul>}
            {section.table && (
              <div className="post-table-wrap">
                <table>
                  <thead><tr>{section.table.head.map((cell) => <th key={cell || "blank"}>{cell}</th>)}</tr></thead>
                  <tbody>{section.table.rows.map((row) => <tr key={row.join("-")}>{row.map((cell, index) => index === 0 ? <th scope="row" key={cell}>{cell}</th> : <td key={cell + index}>{cell}</td>)}</tr>)}</tbody>
                </table>
              </div>
            )}
          </section>
        ))}

        <section className="post-section post-faq">
          <h2>{labels[post.lang]?.faq ?? labels.en.faq}</h2>
          {post.faq.map((item) => (
            <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>
          ))}
        </section>

        <aside className="post-cta">
          <p>{post.cta.text}</p>
          <div className="post-cta-actions">
            <Link className="button-primary" href={post.cta.primary.href}>{post.cta.primary.label}</Link>
            <Link className="button-ghost" href={post.cta.secondary.href}>{post.cta.secondary.label}</Link>
          </div>
        </aside>

        <section className="post-section post-sources">
          <h2>{labels[post.lang]?.sources ?? labels.en.sources}</h2>
          <ul>
            {post.sources.map((source) => (
              <li key={source.url}>
                <a href={source.url} target="_blank" rel="noopener noreferrer nofollow">{source.label}</a> — {source.date}
              </li>
            ))}
          </ul>
          <p className="post-disclaimer">{labels[post.lang]?.disclaimer ?? labels.en.disclaimer}</p>
        </section>
      </div>

      <section className="post-next">
        <div className="shell">
          <div className="post-next-grid">
            {category && (
              <Link className="post-next-card" href={`/products/category/${category.slug}`}>
                <span className="blog-flag">Related products</span>
                <h3>{category.name}</h3>
                <p>{category.intro}</p>
              </Link>
            )}
            {more.map((item) => item && (
              <Link className="post-next-card" key={item.slug} href={`/blog/${item.slug}`}>
                <span className="blog-flag">Read next</span>
                <h3>{item.title}</h3>
                <p>{item.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
}
