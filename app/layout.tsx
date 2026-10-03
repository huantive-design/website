import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import { siteUrl } from "@/lib/url";
import { MotionEffects } from "@/components/MotionEffects";
import { MobileActions } from "@/components/MobileActions";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: `${site.name} | B2B Massage & Recovery Solutions`, template: `%s | ${site.name}` },
  description: site.description,
  verification: { google: "PoGiBzXzzztqTXcRM9xwNI1dXlQbWem4-FbMYqA2JRM" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <MotionEffects />
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
        <MobileActions />
      </body>
    </html>
  );
}
