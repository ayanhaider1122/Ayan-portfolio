"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks, siteConfig } from "@/lib/data";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Determine active section
      const sections = navLinks.map((link) => link.href.substring(1));
      let current = "home";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "py-2.5 bg-[#030303]/70 backdrop-blur-xl border-b border-white/[0.07]"
          : "py-5 bg-transparent border-b border-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#home"
          className="text-3xl font-extrabold tracking-tighter text-[#f1f5f9] transition-opacity hover:opacity-80"
        >
          {siteConfig.brand}
        </a>

        {/* Desktop nav */}
        <div className="hidden items-center gap-6 md:flex">
          <ul className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <li key={link.href} className="relative">
                  <a
                    href={link.href}
                    className={cn(
                      "rounded-lg px-4 py-2 text-sm font-medium transition-colors duration-200 block",
                      isActive
                        ? "text-indigo-400"
                        : "text-[#64748b] hover:text-[#f1f5f9] hover:bg-white/5"
                    )}
                  >
                    {link.label}
                  </a>
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-dot"
                      className="absolute -bottom-1 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </li>
              );
            })}
          </ul>

          <a
            href="#contact"
            className="inline-flex h-9 items-center justify-center gap-1.5 rounded-lg bg-indigo-600 px-5 text-sm font-semibold text-white transition-all hover:bg-indigo-500 hover:scale-105"
          >
            Get in Touch
          </a>
        </div>

        {/* Right side: Mobile menu toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="relative z-50 flex h-10 w-10 items-center justify-center rounded-lg text-[#64748b] transition-colors hover:bg-white/5 hover:text-[#f1f5f9]"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 z-40 bg-[#030303]/95 backdrop-blur-xl md:hidden"
          >
            <nav className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: i * 0.05 }}
                    className={cn(
                      "text-2xl font-medium transition-colors relative",
                      isActive ? "text-indigo-400" : "text-[#64748b] hover:text-[#f1f5f9]"
                    )}
                  >
                    {link.label}
                    {isActive && (
                      <div className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]" />
                    )}
                  </motion.a>
                );
              })}

              <motion.a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-4 inline-flex h-12 items-center justify-center gap-2 rounded-lg bg-indigo-600 px-8 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.4)]"
              >
                Get in Touch
              </motion.a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
