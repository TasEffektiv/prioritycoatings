import Image from "next/image";
import { ArrowUp } from "lucide-react";

const COMPANY_LINKS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  { label: "Recent Blog", href: "/blog/" },
  { label: "Contact Us", href: "/contact-us/" },
  { label: "Terms and Conditions", href: "/terms-and-conditions/" },
  { label: "Privacy Policy", href: "/privacy-policy/" },
];

const SERVICE_LINKS = [
  { label: "Commercial Fitouts", href: "/commercial-fitouts/" },
  { label: "Epoxy Floor Coatings", href: "/epoxy-floor-coatings/" },
  { label: "Lead Paint Removal", href: "/lead-paint-removal/" },
  { label: "Residential Painting", href: "/residential-painters/" },
  { label: "Commercial Painting", href: "/commercial-painting/" },
  { label: "Strata Painting Service", href: "/strata-painters-sydney/" },
];

const PORTFOLIO_LINKS = [
  { label: "Commercial", href: "/recent-commercial-projects/" },
  { label: "Residential", href: "/recent-residential-projects/" },
  { label: "Strata", href: "/recent-strata-projects/" },
  { label: "Lead Removal", href: "/recent-lead-removal-projects/" },
];

function FooterColumn({
  heading,
  headingHref,
  links,
}: {
  heading: string;
  headingHref?: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h5 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">
        {headingHref ? (
          <a href={headingHref} className="transition-colors hover:text-brand-teal">
            {heading}
          </a>
        ) : (
          heading
        )}
      </h5>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l.label}>
            <a href={l.href} className="text-sm text-white/70 transition-colors hover:text-brand-teal">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#001c35]">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-[0%_0%] mix-blend-multiply"
        style={{
          backgroundImage:
            "url(/images/foo-bg.png)",
        }}
      />
      <div className="relative mx-auto max-w-[1400px] px-6 py-16">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <Image
              src="/images/footer-logo-up.svg"
              alt="Priority One Coatings Logo"
              width={170}
              height={64}
              className="mb-5 h-auto w-40"
            />
            <p className="text-sm text-white/70">Unit 7, 46-48 Buffalo Rd,<br />Gladesville NSW 2111</p>
            <p className="mt-3 text-sm text-white/70">
              Phone: <a href="tel:+0298085900" className="hover:text-brand-teal">02 9808 5900</a>
            </p>
            <p className="text-sm text-white/70">
              Email:{" "}
              <a href="mailto:jenny@prioritycoatings.com.au" className="hover:text-brand-teal">
                jenny@prioritycoatings.com.au
              </a>
            </p>
          </div>

          <FooterColumn heading="Company" links={COMPANY_LINKS} />
          <FooterColumn heading="Services" links={SERVICE_LINKS} />
          <FooterColumn heading="Portfolio" headingHref="/portfolio/" links={PORTFOLIO_LINKS} />

          <div>
            <h5 className="mb-5 text-sm font-bold uppercase tracking-wide text-white">Follow Us On</h5>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/PriorityOneCoatings"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-teal"
              >
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 12.06C22 6.505 17.523 2 12 2S2 6.505 2 12.06c0 5.02 3.657 9.184 8.438 9.94v-7.03H7.898v-2.91h2.54V9.845c0-2.522 1.492-3.916 3.777-3.916 1.094 0 2.238.196 2.238.196v2.475h-1.26c-1.243 0-1.63.775-1.63 1.57v1.88h2.773l-.443 2.91h-2.33V22c4.78-.756 8.437-4.92 8.437-9.94z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/PriorityCoating"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-teal"
              >
                <svg width={16} height={16} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.643 4.937c-.835.37-1.732.62-2.675.733.962-.576 1.7-1.49 2.048-2.578-.9.534-1.897.922-2.958 1.13-.85-.904-2.06-1.47-3.4-1.47-2.572 0-4.658 2.086-4.658 4.66 0 .364.042.718.12 1.06-3.873-.195-7.304-2.05-9.602-4.868-.4.69-.63 1.49-.63 2.342 0 1.616.823 3.043 2.072 3.878-.764-.025-1.482-.234-2.11-.583v.06c0 2.257 1.605 4.14 3.737 4.568-.392.106-.803.162-1.227.162-.3 0-.593-.028-.877-.082.593 1.85 2.313 3.198 4.352 3.234-1.595 1.25-3.604 1.995-5.786 1.995-.376 0-.747-.022-1.112-.065 2.062 1.323 4.51 2.093 7.14 2.093 8.57 0 13.255-7.098 13.255-13.254 0-.2-.005-.402-.014-.602.91-.658 1.7-1.477 2.323-2.41z" />
                </svg>
              </a>
              <a
                href="https://au.pinterest.com/prioritycoating/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Pinterest"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-teal"
              >
                <svg width={18} height={18} viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12.017 0C5.396 0 0 5.396 0 12.017c0 5.084 3.163 9.426 7.627 11.164-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.171-2.911 1.023 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.056-4.869-4.988-4.869-3.398 0-5.393 2.549-5.393 5.184 0 1.027.395 2.127.889 2.726a.36.36 0 0 1 .083.343c-.091.378-.293 1.192-.332 1.358-.053.218-.173.265-.4.16-1.492-.694-2.424-2.875-2.424-4.627 0-3.769 2.737-7.229 7.892-7.229 4.144 0 7.365 2.953 7.365 6.899 0 4.116-2.595 7.431-6.199 7.431-1.211 0-2.348-.63-2.738-1.373 0 0-.599 2.282-.744 2.84-.269 1.037-.996 2.336-1.482 3.127C9.457 23.802 10.703 24 12.017 24c6.62 0 11.983-5.396 11.983-12.017C24 5.396 18.637 0 12.017 0z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="relative border-t border-white/10">
        <div className="mx-auto flex max-w-[1400px] flex-col items-center justify-between gap-3 px-6 py-6 text-center text-xs text-white/50 sm:flex-row sm:text-left">
          <p>
            © Copyright 2026 - Priority One Coatings | Web Development{" "}
            <a
              href="https://www.webalive.com.au/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-brand-teal"
            >
              Melbourne by WebAlive
            </a>
          </p>
          <a href="#top" className="flex items-center gap-1.5 hover:text-brand-teal">
            Back to top <ArrowUp size={14} />
          </a>
        </div>
      </div>
    </footer>
  );
}
