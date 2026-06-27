"use client";

import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import SectionHeading from "@/components/ui/SectionHeading";
import AnimatedCounter from "@/components/ui/AnimatedCounter";

const stats = [
  { label: "Years Experience", value: 3, suffix: "+" },
  { label: "Projects Completed", value: 15, suffix: "+" },
  { label: "Happy Clients", value: 10, suffix: "+" },
  { label: "Technologies", value: 14, suffix: "+" },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          badge="About"
          title="Get to Know Me"
          description="A brief introduction to who I am and what drives me."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Text */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center"
          >
            <p className="text-base leading-relaxed text-[#64748b] sm:text-lg">
              I&apos;m a passionate{" "}
              <span className="text-[#f1f5f9] font-medium">Full-Stack Web Developer</span>,{" "}
              <span className="text-[#f1f5f9] font-medium">Project Manager</span>, and{" "}
              <span className="text-[#f1f5f9] font-medium">Software Engineer</span> who
              thrives on turning complex problems into elegant, user-friendly
              solutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg">
              With expertise across the modern web stack — from React and Next.js
              on the frontend to Node.js and PostgreSQL on the backend — I
              build applications that are not only beautiful but also fast,
              scalable, and maintainable.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#64748b] sm:text-lg">
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or mentoring aspiring
              developers. I believe in writing clean code that speaks for itself
              and building products that make a real impact.
            </p>
          </motion.div>

          {/* Stats */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid grid-cols-2 gap-4"
          >
            {stats.map((stat) => (
              <motion.div
                key={stat.label}
                variants={fadeInUp}
                className="group relative flex flex-col items-center justify-center rounded-[16px] border border-white/5 bg-[#111118] p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)] overflow-hidden"
              >
                {/* Subtle hover glow inside the card */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-cyan-500/0 transition-opacity duration-300 group-hover:from-indigo-500/5 group-hover:to-cyan-500/5" />
                
                <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-4xl font-extrabold text-transparent sm:text-5xl">
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </span>
                <span className="mt-3 text-xs font-semibold uppercase tracking-widest text-[#64748b]">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
