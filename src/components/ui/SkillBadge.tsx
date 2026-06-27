"use client";

import { motion, Variants } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  deviconName?: string;
  index: number;
}

// Deterministic scatter logic to create a dispersed layout on initial mount
const getScatterStyle = (index: number) => {
  const angle = (index * 45 * Math.PI) / 180;
  const distance = 80 + (index % 3) * 30; // Radius distance
  const x = Math.cos(angle) * distance;
  const y = Math.sin(angle) * distance;
  const rotate = (index % 2 === 0 ? 1 : -1) * (15 + (index % 4) * 10);
  return { x, y, rotate };
};

const scatterVariants: Variants = {
  hidden: (index: number) => {
    const { x, y, rotate } = getScatterStyle(index);
    return {
      opacity: 0,
      x,
      y,
      rotate,
      scale: 0.7,
    };
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    rotate: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 140,
      damping: 15,
    },
  },
};

export default function SkillBadge({ name, deviconName, index }: SkillBadgeProps) {
  return (
    <motion.div
      custom={index}
      variants={scatterVariants}
      className="group relative flex items-center justify-center gap-3 rounded-[16px] border border-white/[0.07] bg-[#09090e] px-4 py-3 shadow-none backdrop-blur-sm transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:bg-[#151520] hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]"
    >
      {/* Devicon Logo */}
      {deviconName && (
        <img
          src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconName}/${deviconName}-original.svg`}
          alt={`${name} icon`}
          width={24}
          height={24}
          className="transition-transform duration-300 group-hover:scale-110"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            if (target.src.includes("-original")) {
              target.src = `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconName}/${deviconName}-plain.svg`;
            } else {
              target.style.display = "none";
            }
          }}
        />
      )}

      <span className="relative z-10 text-sm font-medium text-[#f1f5f9] transition-colors duration-300 group-hover:text-indigo-400">
        {name}
      </span>
      
      {/* Subtle Hover glow effect */}
      <div className="absolute inset-0 -z-10 rounded-[16px] bg-gradient-to-r from-indigo-500/0 to-cyan-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:from-indigo-500/10 group-hover:to-cyan-500/10 group-hover:opacity-100" />
    </motion.div>
  );
}
