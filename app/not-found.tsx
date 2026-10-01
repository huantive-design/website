import Link from "next/link";

export default function NotFound() {
  return (
    <section className="simple-page">
      <p className="eyebrow">404</p>
      <h1>Page not found.</h1>
      <p>The page may have moved. Continue exploring our product platforms.</p>
      <Link className="button button-primary" href="/products">View products</Link>
    </section>
  );
}
