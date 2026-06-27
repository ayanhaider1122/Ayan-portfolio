"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { projects } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectCard from "@/components/ui/ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 sm:py-32 bg-[#030303]">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          badge="Projects"
          title="Featured Work"
          description="A selection of projects that showcase my skills and experience."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 md:grid-cols-2"
        >
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
