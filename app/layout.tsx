import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/url";
import { MotionEffects } from "@/components/MotionEffects";
import { MobileActions } from "@/components/MobileActions";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} | B2B Massage & Recovery Solutions`, template: `%s | ${site.name}` },
  description: site.description,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MotionEffects />
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileActions />
      </body>
    </html>
  );
}
