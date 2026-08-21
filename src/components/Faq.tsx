"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";

export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="flex flex-col gap-[2px]">
      {items.map((item, i) => (
        <div key={item.q} className="bg-[#eef4f8]">
          <button
            onClick={() => setOpen((cur) => (cur === i ? null : i))}
            aria-expanded={open === i}
            className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left font-heading text-base font-bold text-black"
          >
            {item.q}
            {open === i ? (
              <Minus size={18} className="shrink-0 text-brand-teal" />
            ) : (
              <Plus size={18} className="shrink-0 text-brand-teal" />
            )}
          </button>
          <div
            className={`grid transition-all duration-300 ease-in-out ${
              open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
            }`}
          >
            <div className="overflow-hidden">
              <p className="px-6 pb-5 text-sm leading-relaxed text-brand-grey">{item.a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
