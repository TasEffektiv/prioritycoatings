import type { Metadata } from "next";
import localFont from "next/font/local";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

const proximaNova = localFont({
  src: [
    { path: "../fonts/proxima-nova/ProximaNova-Regular.woff2", weight: "400", style: "normal" },
    { path: "../fonts/proxima-nova/ProximaNova-Bold.woff2", weight: "500 800", style: "normal" },
    { path: "../fonts/proxima-nova/ProximaNova-Black.woff2", weight: "900", style: "normal" },
  ],
  variable: "--font-proxima-nova",
  display: "swap",
});

const SITE_NAME = "Priority One Coatings";
const DEFAULT_TITLE = "Painters Sydney | Residential & Commercial Painting Services";
const DEFAULT_DESCRIPTION =
  "Looking for professional painters in Sydney? Get affordable interior & exterior painting services from a fully insured & licensed painting company in Sydney.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prioritycoatings.com.au"),
  title: DEFAULT_TITLE,
  description: DEFAULT_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_AU",
    siteName: SITE_NAME,
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/android-chrome-512x512.png"],
  },
  twitter: {
    card: "summary",
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    images: ["/android-chrome-512x512.png"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`${proximaNova.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-body text-[#212529] antialiased">
        <JsonLd data={organizationSchema()} />
        {children}
      </body>
    </html>
  );
}
