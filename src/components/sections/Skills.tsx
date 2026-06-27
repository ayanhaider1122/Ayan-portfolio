"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { skills } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import SkillBadge from "@/components/ui/SkillBadge";

const categories = ["All", "Frontend", "Backend", "Database", "Tools"] as const;

export default function Skills() {
  const [active, setActive] = useState<string>("All");

  const filtered =
    active === "All"
      ? skills
      : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-24 sm:py-32">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full bg-cyan-500/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          badge="Skills"
          title="My Tech Stack"
          description="Technologies and tools I use to bring ideas to life."
        />

        {/* Filter tabs */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-4 py-2 text-sm font-medium transition-all duration-300 ${
                active === cat
                  ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30"
                  : "text-[#64748b] hover:text-[#f1f5f9] border border-transparent hover:border-white/10 hover:bg-white/5"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <motion.div
          key={active}
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5"
        >
          {filtered.map((skill, index) => (
            <SkillBadge
              key={skill.name}
              name={skill.name}
              deviconName={skill.deviconName}
              index={index}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
