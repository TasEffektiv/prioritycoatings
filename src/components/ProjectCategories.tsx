import { CheckCircle2 } from "lucide-react";

const CATEGORIES = [
  "Strata & Body Corporate",
  "Commercial Buildings",
  "Residential Buildings",
  "Aged Care Facilities",
  "Schools and Colleges",
  "Retail Shops",
  "Factories or Warehouses",
  "Office towers",
  "New Construction",
  "Hospitals",
  "Entertainment Venues",
  "Carparks",
  "Industrial Projects",
  "Childcare and Educational",
  "Government Buildings",
  "Shopping Centres",
  "Heritage Sites",
  "Townhouses",
  "Hotels or Restaurants",
  "Condominium",
];

export default function ProjectCategories() {
  return (
    <section className="bg-gradient-to-br from-white to-brand-light py-16 md:py-24">
      <div className="mx-auto max-w-[1400px] px-6">
        <div className="rounded-[0.05rem] bg-brand-navy px-8 py-14 sm:px-14">
          <h2 className="max-w-3xl font-heading text-[38px] font-bold leading-[49px] text-white">
            A complete painting solution for residential, commercial, strata, and industrial
            properties:
          </h2>

          <div className="mt-10 grid grid-cols-1 gap-x-10 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
            {CATEGORIES.map((cat) => (
              <div key={cat} className="flex items-center gap-3">
                <CheckCircle2 size={24} className="shrink-0 text-brand-teal" strokeWidth={1.75} />
                <span className="font-heading text-[22px] font-semibold leading-[32px] text-white">
                  {cat}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
