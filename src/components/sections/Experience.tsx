"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeInUp } from "@/lib/animations";
import { experiences, education } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import TimelineItem from "@/components/ui/TimelineItem";
import { GraduationCap, Briefcase } from "lucide-react";

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 sm:py-32">
      {/* Background glow */}
      <div className="absolute top-1/3 right-0 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
        <SectionHeading
          badge="Journey"
          title="Experience & Education"
          description="A timeline of my professional career and academic growth."
        />

        <div className="grid gap-16 lg:grid-cols-2">
          {/* Work Experience */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-indigo-500/10 rounded-lg text-indigo-400">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#f1f5f9]">Work Experience</h3>
            </div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {experiences.map((exp, i) => (
                <TimelineItem key={exp.company} experience={exp} index={i} />
              ))}
            </motion.div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="p-2 bg-cyan-500/10 rounded-lg text-cyan-400">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-[#f1f5f9]">Education</h3>
            </div>
            
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
            >
              {education.map((edu, i) => (
                <motion.div
                  key={edu.institution}
                  variants={fadeInUp}
                  className="relative flex gap-6 pb-12 last:pb-0 md:gap-8"
                >
                  <div className="relative flex flex-col items-center">
                    <div className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border-2 border-cyan-500 bg-[#0a0a0f]">
                      <div className="h-1.5 w-1.5 rounded-full bg-cyan-500" />
                    </div>
                    <div className="absolute top-4 h-full w-px bg-gradient-to-b from-cyan-500/40 to-transparent" />
                  </div>
                  <div className="flex-1 pb-2">
                    <h3 className="text-lg font-semibold text-[#f1f5f9]">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-medium text-cyan-400 mt-1">{edu.institution}</p>
                    <span className="mt-3 inline-block rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-[#64748b]">
                      {edu.period}
                    </span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
