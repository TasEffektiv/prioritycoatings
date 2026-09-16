import type { Metadata } from "next";
import localFont from "next/font/local";
import Script from "next/script";
import JsonLd from "@/components/JsonLd";
import { organizationSchema } from "@/lib/schema";
import "./globals.css";

// The live site's old Universal Analytics property (UA-29443955-1) stopped
// collecting data when Google sunset UA in July 2024 — there's nothing to
// migrate from it. Set NEXT_PUBLIC_GA_MEASUREMENT_ID (a GA4 "G-XXXXXXX" ID)
// in Netlify's environment variables once a GA4 property exists; until then
// this stays unset and no analytics script loads.
const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

// Set GOOGLE_SITE_VERIFICATION in Netlify's environment variables with the
// meta-tag verification code from Google Search Console once the property
// is (re)verified for this domain. Leave unset to omit the tag entirely.
const GOOGLE_SITE_VERIFICATION = process.env.GOOGLE_SITE_VERIFICATION;

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
  verification: GOOGLE_SITE_VERIFICATION ? { google: GOOGLE_SITE_VERIFICATION } : undefined,
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
        {GA_MEASUREMENT_ID && (
          <>
            {/* lazyOnload (vs. @next/third-parties' default afterInteractive) keeps
                gtag.js off the main thread during initial render — it's ~140KB and
                was the single biggest contributor to mobile Total Blocking Time.
                It still loads during browser idle time shortly after, so normal
                sessions are tracked; only sub-second bounces may go uncounted. */}
            <Script id="ga-init" strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){window.dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_MEASUREMENT_ID}');
              `}
            </Script>
            <Script
              id="ga-script"
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
            />
          </>
        )}
      </body>
    </html>
  );
}
