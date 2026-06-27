"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { Service } from "@/lib/data";

interface ServiceCardProps {
  service: Service;
}

export default function ServiceCard({ service }: ServiceCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="group relative flex flex-col rounded-[16px] border border-white/[0.07] bg-[#111118] shadow-none p-6 transition-all duration-300 hover:border-indigo-500/50 hover:bg-[#151520] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] sm:p-8"
    >
      {/* Colorful Devicon Tech Logo */}
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.05] p-2.5 mb-2 transition-all duration-300 group-hover:bg-indigo-500/10 group-hover:border-indigo-500/20 group-hover:scale-105">
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${service.iconName}/${service.iconName}-original.svg`}
          alt={`${service.title} logo`}
          className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(99,102,241,0.2)]"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.includes("-original")) {
              target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${service.iconName}/${service.iconName}-plain.svg`;
            } else {
              target.style.display = "none";
            }
          }}
        />
      </div>

      {/* Title */}
      <h3 className="mt-4 text-lg font-semibold text-[#f1f5f9] transition-colors duration-300 group-hover:text-indigo-400">
        {service.title}
      </h3>

      {/* Description */}
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[#64748b]">
        {service.description}
      </p>

      {/* Gradient border on hover */}
      <div className="absolute inset-0 -z-10 rounded-[16px] bg-gradient-to-br from-indigo-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:from-indigo-500/[0.04] group-hover:to-cyan-500/[0.04] group-hover:opacity-100" />
    </motion.div>
  );
}
