"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

import Balancer from "react-wrap-balancer";

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
}

export default function SectionHeading({
  badge,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <motion.div
      className="mb-16 text-center"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
    >
      <span className="mb-4 inline-block rounded-full border border-indigo-500/30 bg-indigo-500/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-indigo-400">
        {badge}
      </span>
      <h2 className="mt-4 text-3xl font-bold tracking-tight text-[#f1f5f9] sm:text-4xl lg:text-5xl">
        <Balancer>{title}</Balancer>
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-base text-[#64748b] sm:text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
