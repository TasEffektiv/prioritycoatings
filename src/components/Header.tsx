"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Menu, X, Headset, Mail, MapPin } from "lucide-react";

const NAV_ITEMS: {
  label: string;
  href: string;
  children?: { label: string; href: string }[];
}[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us/" },
  {
    label: "Services",
    href: "#",
    children: [
      { label: "Commercial Fitouts", href: "/commercial-fitouts/" },
      { label: "Epoxy Floor Coatings", href: "/epoxy-floor-coatings/" },
      { label: "Lead Paint Removal", href: "/lead-paint-removal/" },
      { label: "Residential Painting", href: "/residential-painters/" },
      { label: "Commercial Painting", href: "/commercial-painting/" },
      { label: "Strata Painting Service", href: "/strata-painters-sydney/" },
    ],
  },
  {
    label: "Service Areas",
    href: "#",
    children: [
      { label: "Alexandria", href: "/painters-alexandria/" },
      { label: "Bronte", href: "/painters-bronte/" },
      { label: "Bondi", href: "/painters-bondi/" },
      { label: "Balmain", href: "/painters-balmain/" },
      { label: "Mosman", href: "/painters-mosman/" },
      { label: "Haberfield", href: "/painters-haberfield/" },
      { label: "Leichhardt", href: "/painters-leichhardt/" },
      { label: "Northern Beaches", href: "/painters-northern-beaches/" },
    ],
  },
  {
    label: "Portfolio",
    href: "/portfolio/",
    children: [
      { label: "Commercial", href: "/recent-commercial-projects/" },
      { label: "Residential", href: "/recent-residential-projects/" },
      { label: "Strata", href: "/recent-strata-projects/" },
      { label: "Lead Removal", href: "/recent-lead-removal-projects/" },
    ],
  },
  { label: "Blog", href: "/blog/" },
  { label: "Testimonials", href: "/testimonials/" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openSub, setOpenSub] = useState<string | null>(null);

  return (
    <header className="relative z-50 bg-white">
      {/* Top info bar */}
      <div className="hidden bg-brand-blue lg:block">
        <div className="mx-auto flex max-w-[1400px] items-center justify-between px-6 py-4">
          <Link href="/" className="shrink-0">
            <Image
              src="https://www.prioritycoatings.com.au/wp-content/uploads/2022/04/logo.svg"
              alt="Priority One Coatings Logo"
              width={189}
              height={70}
              priority
            />
          </Link>
          <div className="flex items-center gap-9 text-sm text-white">
            <div className="flex items-center gap-2.5">
              <Headset size={22} strokeWidth={1.75} className="shrink-0" />
              <span>
                <strong className="block text-[13px] font-normal leading-tight">Call</strong>
                <a href="tel:+0298085900" className="text-sm font-bold leading-tight hover:opacity-80">
                  02 9808 5900
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Mail size={22} strokeWidth={1.75} className="shrink-0" />
              <span>
                <strong className="block text-[13px] font-normal leading-tight">Email</strong>
                <a
                  href="mailto:jenny@prioritycoatings.com.au"
                  className="text-sm font-bold leading-tight hover:opacity-80"
                >
                  jenny@prioritycoatings.com.au
                </a>
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <MapPin size={22} strokeWidth={1.75} className="shrink-0" />
              <span>
                <strong className="block text-[13px] font-normal leading-tight">Address</strong>
                <span className="block text-sm font-bold leading-tight">
                  Unit 7, 46-48 Buffalo Rd, Gladesville NSW 2111
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile top bar */}
      <div className="flex items-center justify-between bg-brand-blue px-4 py-3 lg:hidden">
        <Link href="/">
          <Image
            src="https://www.prioritycoatings.com.au/wp-content/uploads/2022/04/logo.svg"
            alt="Priority One Coatings Logo"
            width={140}
            height={52}
            priority
          />
        </Link>
        <button
          aria-label="Toggle navigation"
          onClick={() => setMobileOpen((v) => !v)}
          className="text-white"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Main nav */}
      <div className="hidden border-b border-gray-100 bg-white lg:block">
        <div className="mx-auto max-w-[1400px] px-6">
          <ul className="flex items-stretch font-heading text-lg font-semibold text-brand-navy">
            {NAV_ITEMS.map((item) => (
              <li key={item.label} className="group relative">
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 whitespace-nowrap px-[35px] py-5 transition-colors hover:text-brand-teal ${
                    item.label === "Home" ? "text-brand-teal" : ""
                  }`}
                >
                  {item.label}
                  {item.children && <ChevronDown size={16} />}
                </Link>
                {item.children && (
                  <ul className="invisible absolute left-0 top-full z-50 w-64 translate-y-1 rounded-b-[0.05rem] bg-white py-2 opacity-0 shadow-xl transition-all duration-150 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          className="block px-5 py-2.5 text-sm font-medium text-brand-ink hover:bg-brand-light hover:text-brand-teal"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="ml-auto flex items-center">
              <Link
                href="/contact-us/"
                className="mx-2 rounded-[0.05rem] bg-brand-teal px-[85px] py-3 font-heading text-lg font-semibold whitespace-nowrap text-white transition-colors hover:bg-brand-teal-dark"
              >
                Request A Quote
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Mobile nav panel */}
      {mobileOpen && (
        <div className="max-h-[80vh] overflow-y-auto border-t border-black/10 bg-brand-navy lg:hidden">
          <ul className="divide-y divide-white/10 font-heading text-sm font-semibold text-white">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <div className="flex items-center justify-between px-4 py-3">
                  <Link href={item.href} onClick={() => !item.children && setMobileOpen(false)}>
                    {item.label}
                  </Link>
                  {item.children && (
                    <button
                      onClick={() =>
                        setOpenSub((cur) => (cur === item.label ? null : item.label))
                      }
                      aria-label={`Toggle ${item.label} submenu`}
                    >
                      <ChevronDown
                        size={16}
                        className={openSub === item.label ? "rotate-180 transition-transform" : "transition-transform"}
                      />
                    </button>
                  )}
                </div>
                {item.children && openSub === item.label && (
                  <ul className="bg-brand-navy-deep pb-2">
                    {item.children.map((child) => (
                      <li key={child.label}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block px-8 py-2 text-xs font-medium normal-case text-white/80"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="p-4">
              <Link
                href="/contact-us/"
                onClick={() => setMobileOpen(false)}
                className="block rounded-[0.05rem] bg-brand-teal px-5 py-3 text-center text-xs font-bold tracking-wide text-white"
              >
                Request A Quote
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
