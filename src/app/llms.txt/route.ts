import { BUSINESS_NAME, SITE_URL } from "@/lib/schema";

// Follows the llms.txt convention (https://llmstxt.org/) so LLM-based tools
// can get an accurate, concise overview of the site instead of relying on
// a full crawl. Kept in sync by hand — update alongside src/app/sitemap.ts
// when pages are added, renamed, or removed.
function content(): string {
  return `# ${BUSINESS_NAME}

> Sydney painting and decorating company operating since 1988, offering residential, commercial, strata, epoxy flooring, and lead paint removal services across Sydney and surrounding suburbs.

Priority One Coatings is a family-owned painting contractor based in Gladesville, NSW. This file follows the llms.txt convention (https://llmstxt.org/) to help AI tools and LLM-based crawlers understand the site. For the full, always-current list of pages, see ${SITE_URL}/sitemap.xml.

## Services

- [Residential Painters](${SITE_URL}/residential-painters): Interior and exterior house painting services in Sydney.
- [Commercial Painting](${SITE_URL}/commercial-painting): Painting services for offices, retail, and government buildings.
- [Commercial Fitouts](${SITE_URL}/commercial-fitouts): Commercial office fitout painting and finishing.
- [Strata Painters](${SITE_URL}/strata-painters-sydney): Painting services for strata-managed residential and commercial properties.
- [Epoxy Floor Coatings](${SITE_URL}/epoxy-floor-coatings): Epoxy flooring for commercial and industrial premises.
- [Lead Paint Removal](${SITE_URL}/lead-paint-removal): Safe removal of lead-based paint by trained staff.

## Service Areas

- [Painters in Alexandria](${SITE_URL}/painters-alexandria)
- [Painters in Balmain](${SITE_URL}/painters-balmain)
- [Painters in Bondi](${SITE_URL}/painters-bondi)
- [Painters in Bronte](${SITE_URL}/painters-bronte)
- [Painters in Haberfield](${SITE_URL}/painters-haberfield)
- [Painters in Leichhardt](${SITE_URL}/painters-leichhardt)
- [Painters in Mosman](${SITE_URL}/painters-mosman)
- [Painters in Northern Beaches](${SITE_URL}/painters-northern-beaches)

## Company

- [About Us](${SITE_URL}/about-us): Company history and background, established 1988.
- [Contact Us](${SITE_URL}/contact-us): Phone, email, and quote request details.
- [Portfolio](${SITE_URL}/portfolio): Completed project galleries.
- [Testimonials](${SITE_URL}/testimonials): Client reviews and feedback.

## Optional

- [Blog](${SITE_URL}/blog): Articles on painting techniques, colour trends, and industry news, organised by category.
- [Privacy Policy](${SITE_URL}/privacy-policy)
- [Terms and Conditions](${SITE_URL}/terms-and-conditions)
`;
}

export const dynamic = "force-static";

export async function GET() {
  return new Response(content(), {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
