"use client";

import { motion } from "framer-motion";
import { slideInFromOutside } from "@/lib/animations";
import type { Project } from "@/lib/data";
import { ExternalLink } from "lucide-react";
import { GithubIcon } from "@/components/ui/icons";

interface ProjectCardProps {
  project: Project;
}

// Simple map for tech stack strings to Devicon names
const techToDevicon: Record<string, string> = {
  "React": "react",
  "Next.js": "nextjs",
  "TypeScript": "typescript",
  "JavaScript": "javascript",
  "Node.js": "nodejs",
  "Tailwind CSS": "tailwindcss",
  "MongoDB": "mongodb",
  "PostgreSQL": "postgresql",
  "Supabase": "supabase",
  "Firebase": "firebase",
  "HTML": "html5",
  "CSS": "css3",
  "Git": "git",
};

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <motion.div
      variants={slideInFromOutside}
      className="group relative flex flex-col overflow-hidden rounded-[16px] border border-white/[0.07] bg-[#09090e] shadow-none transition-all duration-300 hover:-translate-y-2 hover:border-indigo-500/50 hover:bg-[#151520] hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]"
    >
      {/* Project Image Header - Styled as Premium Browser Window Mockup */}
      {project.image && (
        <div className="relative w-full aspect-video overflow-hidden border-b border-white/[0.07] bg-[#0c0c12]">
          {/* Browser Header Bar */}
          <div className="flex items-center gap-1.5 px-4 py-2 border-b border-white/5 bg-white/[0.01]">
            <div className="h-2.5 w-2.5 rounded-full bg-red-500/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/50" />
            <div className="h-2.5 w-2.5 rounded-full bg-green-500/50" />
            <div className="ml-4 rounded bg-white/5 px-3 py-0.5 text-[9px] text-[#64748b] font-mono tracking-tight">
              {project.title.toLowerCase().replace(/\s+/g, "")}.com
            </div>
          </div>
          {/* Browser Window Content */}
          <div className="relative w-full h-[calc(100%-28px)] overflow-hidden bg-black/20">
            <img
              src={project.image}
              alt={`${project.title} screenshot`}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090e] via-transparent to-transparent opacity-40 pointer-events-none" />
        </div>
      )}

      {/* Gradient top bar */}
      <div className="h-1 w-full bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 opacity-60 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="flex flex-1 flex-col p-6 sm:p-8">
        {/* Title */}
        <h3 className="text-xl font-semibold text-[#f1f5f9] transition-colors duration-300 group-hover:text-indigo-400">
          {project.title}
        </h3>

        {/* Description */}
        <p className="mt-3 flex-1 text-sm leading-relaxed text-[#64748b]">
          {project.description}
        </p>

        {/* Tech stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.map((t) => {
            const deviconName = techToDevicon[t];
            return (
              <span
                key={t}
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.07] bg-white/[0.02] px-3 py-1 text-xs font-medium text-[#64748b]"
              >
                {deviconName && (
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${deviconName}/${deviconName}-original.svg`}
                    alt={`${t} icon`}
                    width={14}
                    height={14}
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
                {t}
              </span>
            );
          })}
        </div>

        {/* Links */}
        <div className="mt-6 flex items-center gap-4">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 transition-colors duration-200 hover:text-cyan-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[#64748b] transition-colors duration-200 hover:text-[#f1f5f9]"
            >
              <GithubIcon width={16} height={16} />
              GitHub
            </a>
          )}
        </div>
      </div>

      {/* Background hover gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-indigo-500/0 to-cyan-500/0 opacity-0 transition-opacity duration-500 group-hover:from-indigo-500/[0.03] group-hover:to-cyan-500/[0.03] group-hover:opacity-100" />
    </motion.div>
  );
}
