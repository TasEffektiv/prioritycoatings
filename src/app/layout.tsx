import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const proximaNova = localFont({
  src: [
    { path: "../fonts/proxima-nova/ProximaNova-Regular.woff", weight: "400", style: "normal" },
    { path: "../fonts/proxima-nova/ProximaNova-Bold.woff", weight: "500 800", style: "normal" },
    { path: "../fonts/proxima-nova/ProximaNova-Black.woff", weight: "900", style: "normal" },
  ],
  variable: "--font-proxima-nova",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.prioritycoatings.com.au"),
  title: "Painters Sydney | Residential & Commercial Painting | Priority One Coatings",
  description:
    "Affordable residential & commercial painting services in Sydney. Quality workmanship, premium finishes and reliable local painters for over 38 years.",
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-AU"
      className={`${proximaNova.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white font-body text-[#212529] antialiased">
        {children}
      </body>
    </html>
  );
}
