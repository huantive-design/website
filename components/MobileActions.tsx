import Link from "next/link";

export function MobileActions() {
  return (
    <div className="mobile-sticky" aria-label="Quick inquiry actions">
      <Link href="/contact">Request Quote</Link>
      <Link href="/contact?intent=sample">Request Sample</Link>
    </div>
  );
}
