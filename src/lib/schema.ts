export const SITE_URL = "https://www.prioritycoatings.com.au";

export const BUSINESS_NAME = "Priority One Coatings";

export const ORGANIZATION_ID = `${SITE_URL}/#organization`;

const LOGO_URL = `${SITE_URL}/images/logo.svg`;

export function absoluteUrl(path: string) {
  return path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": ORGANIZATION_ID,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: LOGO_URL,
    image: LOGO_URL,
    telephone: "+61-2-9808-5900",
    email: "jenny@prioritycoatings.com.au",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Unit 7, 46-48 Buffalo Rd",
      addressLocality: "Gladesville",
      addressRegion: "NSW",
      postalCode: "2111",
      addressCountry: "AU",
    },
    areaServed: {
      "@type": "City",
      name: "Sydney",
    },
    sameAs: [
      "https://www.facebook.com/PriorityOneCoatings",
      "https://twitter.com/PriorityCoating",
      "https://au.pinterest.com/prioritycoating/",
    ],
  };
}

export type BreadcrumbItem = { label: string; path: string };

export function breadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.label,
      item: absoluteUrl(item.path),
    })),
  };
}

export function serviceSchema({
  name,
  description,
  path,
  areaServed,
}: {
  name: string;
  description: string;
  path: string;
  areaServed?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    name,
    description,
    url: absoluteUrl(path),
    provider: { "@id": ORGANIZATION_ID },
    areaServed: areaServed
      ? { "@type": "Place", name: areaServed }
      : { "@type": "City", name: "Sydney" },
  };
}

export function faqSchema(items: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}

const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

// Parses "Month D, YYYY" into "YYYY-MM-DD" without going through Date(), which
// resolves "January 30, 2026" as local midnight and shifts the date by a day
// under toISOString() whenever the build machine isn't UTC.
function toIsoDate(dateStr: string): string {
  const match = dateStr.match(/^([A-Za-z]+)\s+(\d{1,2}),\s+(\d{4})$/);
  if (!match) throw new Error(`Unrecognised date format: ${dateStr}`);
  const [, monthName, day, year] = match;
  const monthIndex = MONTHS.indexOf(monthName);
  if (monthIndex === -1) throw new Error(`Unrecognised month: ${monthName}`);
  const mm = String(monthIndex + 1).padStart(2, "0");
  const dd = day.padStart(2, "0");
  return `${year}-${mm}-${dd}`;
}

export function articleSchema({
  headline,
  description,
  path,
  image,
  datePublished,
}: {
  headline: string;
  description: string;
  path: string;
  image: string;
  datePublished: string;
}) {
  const iso = toIsoDate(datePublished);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    image: absoluteUrl(image),
    datePublished: iso,
    dateModified: iso,
    url: absoluteUrl(path),
    mainEntityOfPage: { "@type": "WebPage", "@id": absoluteUrl(path) },
    author: { "@type": "Organization", name: BUSINESS_NAME, "@id": ORGANIZATION_ID },
    publisher: {
      "@type": "Organization",
      name: BUSINESS_NAME,
      "@id": ORGANIZATION_ID,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
  };
}
