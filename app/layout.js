import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/site";

const sans = Manrope({ subsets: ["latin"], display: "swap", variable: "--font-sans" });
const serif = Cormorant_Garamond({ subsets: ["latin"], style: ["normal", "italic"], weight: ["500", "600", "700"], display: "swap", variable: "--font-serif" });

export const viewport = { width: "device-width", initialScale: 1, themeColor: "#0a1511" };

export const metadata = {
  metadataBase: new URL(SITE.url),
  title: { default: SITE.title, template: "%s | Sarah" },
  description: SITE.description,
  keywords: ["UGC creator", "beauty UGC", "skincare reviews", "TikTok creator", "Reels", "product reviews", "brand collaborations", "lifestyle creator"],
  authors: [{ name: SITE.name }],
  creator: SITE.name,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", locale: "en_US", url: SITE.url, siteName: SITE.brand, title: SITE.title, description: SITE.description, images: [{ url: "/profile.jpg", width: 1200, height: 1511, alt: "Sarah, UGC creator" }] },
  twitter: { card: "summary_large_image", title: SITE.title, description: SITE.description, images: ["/profile.jpg"] },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body>{children}</body>
    </html>
  );
}
