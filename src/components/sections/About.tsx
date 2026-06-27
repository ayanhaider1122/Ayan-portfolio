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
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 h-[400px] w-[400px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          badge="About"
          title="Get to Know Me"
          description="A brief introduction to who I am and what drives me."
        />

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left Column: Asymmetrical Stats Layout */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="grid gap-4 sm:grid-cols-2"
          >
            {/* Tall Highlight Card */}
            <motion.div
              variants={fadeInUp}
              className="group relative flex flex-col justify-between rounded-[24px] border border-cyan-500/25 bg-gradient-to-b from-indigo-500/10 via-cyan-500/5 to-[#09090e]/85 p-8 min-h-[340px] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/50 hover:shadow-[0_20px_50px_rgba(0,229,255,0.15)] overflow-hidden sm:col-span-1"
            >
              {/* Ambient inner glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 group-hover:bg-cyan-500/20 transition-colors">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              
              <div className="flex flex-col mt-auto">
                <span className="text-5xl font-black text-transparent bg-gradient-to-r from-white via-cyan-300 to-indigo-200 bg-clip-text tracking-tight sm:text-6xl">
                  <AnimatedCounter to={15} suffix="+" />
                </span>
                <span className="mt-3 text-sm font-semibold uppercase tracking-widest text-cyan-400">
                  Projects Completed
                </span>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                  Successfully delivered web systems, client tools, and startup solutions from concept to deployment.
                </p>
              </div>
            </motion.div>

            {/* Right Column Stack */}
            <div className="flex flex-col gap-4">
              {stats.filter(s => s.label !== "Projects Completed").map((stat) => (
                <motion.div
                  key={stat.label}
                  variants={fadeInUp}
                  className="group relative flex flex-col justify-center rounded-[16px] border border-white/5 bg-[#09090e] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-[0_15px_40px_rgba(99,102,241,0.1)] overflow-hidden flex-1"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/0 to-cyan-500/0 transition-opacity duration-300 group-hover:from-indigo-500/5 group-hover:to-cyan-500/5" />
                  <span className="bg-gradient-to-r from-indigo-400 to-cyan-400 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
                    <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="mt-1.5 text-xs font-semibold uppercase tracking-widest text-[#64748b] group-hover:text-indigo-400 transition-colors">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Text & Profile Sub-Cards */}
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="flex flex-col justify-center"
          >
            <h3 className="text-2xl font-bold tracking-tight text-[#f1f5f9] sm:text-3xl mb-6">
              Building Scalable Digital Products with Agile Excellence
            </h3>
            
            <p className="text-base leading-relaxed text-[#64748b]">
              I&apos;m a passionate{" "}
              <span className="text-[#f1f5f9] font-medium">Full-Stack Web Developer</span>,{" "}
              <span className="text-[#f1f5f9] font-medium">Project Manager</span>, and{" "}
              <span className="text-[#f1f5f9] font-medium">Software Engineer</span> who
              thrives on turning complex problems into elegant, user-friendly
              solutions.
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#64748b]">
              With expertise across the modern web stack — from React and Next.js
              on the frontend to Node.js and PostgreSQL on the backend — I
              build applications that are not only beautiful but also fast,
              scalable, and maintainable.
            </p>

            {/* Custom Sub-Cards with real brand logos */}
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {/* Card 1: Web Development */}
              <div className="group flex flex-col rounded-2xl border border-white/[0.05] bg-[#09090e] p-5 transition-all duration-300 hover:border-cyan-500/30 hover:bg-[#0c0c14] hover:shadow-[0_10px_30px_rgba(0,229,255,0.05)]">
                {/* Colorful logo strip */}
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#61DAFB]/10 p-1.5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="h-full w-full" />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 p-1.5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-full w-full invert" />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#339933]/10 p-1.5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-full w-full" />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#3178C6]/10 p-1.5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-full w-full" />
                  </div>
                </div>
                <h4 className="mt-4 text-base font-bold text-[#f1f5f9] group-hover:text-cyan-400 transition-colors">
                  Full-Stack Development
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                  Building high-performance interfaces and scalable backends using React, Next.js, Node.js, and databases.
                </p>
              </div>

              {/* Card 2: Agile PM */}
              <div className="group flex flex-col rounded-2xl border border-white/[0.05] bg-[#09090e] p-5 transition-all duration-300 hover:border-indigo-500/30 hover:bg-[#0c0c14] hover:shadow-[0_10px_30px_rgba(99,102,241,0.05)]">
                {/* Colorful logo strip */}
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0052CC]/10 p-1.5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg" alt="Jira" className="h-full w-full" />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#0079BF]/10 p-1.5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/trello/trello-original.svg" alt="Trello" className="h-full w-full" />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 p-1.5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="GitHub" className="h-full w-full invert" />
                  </div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#F05032]/10 p-1.5">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg" alt="Git" className="h-full w-full" />
                  </div>
                </div>
                <h4 className="mt-4 text-base font-bold text-[#f1f5f9] group-hover:text-indigo-400 transition-colors">
                  Agile Project Management
                </h4>
                <p className="mt-2 text-xs leading-relaxed text-[#64748b]">
                  Coordinating cross-functional remote teams, running sprints, and managing backlogs using Jira.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
