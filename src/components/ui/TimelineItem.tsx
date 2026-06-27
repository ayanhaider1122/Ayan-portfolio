"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";
import type { Experience } from "@/lib/data";

interface TimelineItemProps {
  experience: Experience;
  index: number;
}

export default function TimelineItem({
  experience,
  index,
}: TimelineItemProps) {
  return (
    <motion.div
      variants={fadeInUp}
      className="relative flex gap-6 pb-12 last:pb-0 md:gap-10"
    >
      {/* Timeline line + dot */}
      <div className="relative flex flex-col items-center">
        <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-indigo-500 bg-[#0a0a0f]">
          <div className="h-1.5 w-1.5 rounded-full bg-indigo-500" />
        </div>
        <div className="absolute top-4 h-full w-px bg-gradient-to-b from-indigo-500/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="flex-1 pb-2">
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-[#f1f5f9]">
              {experience.role}
            </h3>
            <p className="text-sm font-medium text-cyan-400">{experience.company}</p>
          </div>
          <span className="mt-1 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#64748b] sm:mt-0">
            {experience.period}
          </span>
        </div>
        {experience.description && (
          <p className="mt-3 text-sm leading-relaxed text-[#64748b]">
            {experience.description}
          </p>
        )}
        {experience.highlights && experience.highlights.length > 0 && (
          <ul className="mt-3 space-y-1.5">
            {experience.highlights.map((h, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-sm text-[#64748b]"
              >
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-indigo-500/60" />
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
}
