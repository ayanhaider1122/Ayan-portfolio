"use client";

import { motion } from "framer-motion";
import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
}: GlassCardProps) {
  return (
    <motion.div
      className={`
        relative rounded-2xl border border-zinc-200 dark:border-white/[0.06]
        bg-white/50 dark:bg-white/[0.03] backdrop-blur-md
        ${hover ? "hover:border-zinc-300 dark:hover:border-white/[0.12] hover:bg-white/80 dark:hover:bg-white/[0.05]" : ""}
        transition-colors duration-300
        ${className}
      `}
      whileHover={hover ? { y: -2 } : undefined}
      transition={{ duration: 0.2 }}
    >
      {children}
    </motion.div>
  );
}
