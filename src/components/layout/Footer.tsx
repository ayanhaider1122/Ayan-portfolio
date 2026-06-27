"use client";

import { siteConfig, contactLinks } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#030303]">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row lg:px-8">
        <p className="text-sm text-[#64748b]">
          &copy; {new Date().getFullYear()} {siteConfig.brand}. All rights
          reserved.
        </p>

        <div className="flex items-center gap-6">
          {contactLinks
            .filter((l) => ["GitHub", "LinkedIn", "Instagram"].includes(l.label))
            .map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-[#64748b] transition-colors duration-200 hover:text-indigo-400"
                aria-label={link.label}
              >
                {link.label}
              </a>
            ))}
        </div>
      </div>
    </footer>
  );
}
