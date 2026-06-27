"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { Testimonial } from "@/lib/data";
import { Quote } from "lucide-react";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({
  testimonial,
}: TestimonialCardProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="flex min-w-[300px] max-w-[400px] flex-col rounded-[16px] border border-white/[0.07] bg-[#111118] shadow-none p-6 sm:p-8"
    >
      {/* Quote icon */}
      <div className="mb-4 text-indigo-500/40">
        <Quote size={32} />
      </div>

      {/* Quote */}
      <p className="flex-1 text-sm leading-relaxed text-[#64748b] italic">
        &ldquo;{testimonial.quote}&rdquo;
      </p>

      {/* Author */}
      <div className="mt-6 flex items-center gap-3">
        <div>
          <p className="text-sm font-medium text-[#f1f5f9]">
            {testimonial.name}
          </p>
          <p className="text-xs text-[#64748b]">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
