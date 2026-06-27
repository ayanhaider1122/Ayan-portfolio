"use client";

import { motion } from "framer-motion";
import {
  staggerContainer,
  wordRevealContainer,
  wordReveal,
} from "@/lib/animations";
import { siteConfig } from "@/lib/data";
import { Download, ArrowRight, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";

// Helper component for word reveal animation
const WordRevealText = ({
  text,
  className,
  gradient = false,
}: {
  text: string;
  className?: string;
  gradient?: boolean;
}) => {
  const words = text.split(" ");
  return (
    <motion.span
      variants={wordRevealContainer}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          variants={wordReveal}
          className={cn(
            "inline-block mr-2 last:mr-0",
            gradient && "bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          )}
        >
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};

export default function Hero() {
  const name = "Ayan";
  const title = siteConfig.title;

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-20"
    >
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-indigo-500 opacity-15 blur-[120px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400 opacity-15 blur-[120px] pointer-events-none animate-pulse duration-[6000ms]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Side: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start"
          >
            {/* Badge */}
            <motion.span
              variants={wordReveal}
              className="mb-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 backdrop-blur-md px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#64748b] hover:border-indigo-500/30 transition-colors"
            >
              {siteConfig.title.split(" | ")[0]}
            </motion.span>

            {/* Name */}
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl flex flex-wrap">
              <Balancer>
                <span className="text-[#f1f5f9] mr-4">Hi, I&apos;m</span>
                <WordRevealText text={name} gradient={true} />
              </Balancer>
            </h1>

            {/* Title */}
            <h2 className="mt-6 text-xl font-semibold text-[#64748b] sm:text-2xl max-w-xl">
              <Balancer>
                <WordRevealText text={title} />
              </Balancer>
            </h2>

            {/* Description */}
            <motion.p
              variants={wordReveal}
              className="mt-6 max-w-xl text-base leading-relaxed text-[#64748b] sm:text-lg font-medium"
            >
              {siteConfig.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={wordReveal}
              className="mt-10 flex flex-col gap-4 sm:flex-row w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-indigo-500 px-8 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all hover:scale-105 hover:bg-indigo-600 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
              >
                Hire Me
                <Briefcase size={18} />
              </a>
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-indigo-500/50 bg-transparent px-8 text-sm font-semibold text-indigo-400 transition-all hover:bg-indigo-500/10 hover:border-indigo-400 hover:scale-105"
              >
                View Projects
                <ArrowRight size={18} />
              </a>
              <a
                href="/resume.pdf"
                download="Ayan_Haider_Resume.pdf"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/10 bg-white/5 px-8 text-sm font-semibold text-[#f1f5f9] transition-all hover:bg-white/10 hover:scale-105"
              >
                Download CV
                <Download size={18} />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Side: Photo Frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, filter: "blur(15px)" }}
            animate={{
              opacity: 1,
              scale: 1,
              filter: "blur(0px)",
              borderRadius: [
                "60% 40% 30% 70% / 60% 30% 70% 40%",
                "40% 60% 50% 50% / 50% 60% 40% 50%",
                "60% 40% 30% 70% / 60% 30% 70% 40%"
              ]
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.4 },
              scale: { type: "spring", stiffness: 100, damping: 20, delay: 0.4 },
              filter: { duration: 0.5, delay: 0.4 },
              borderRadius: {
                repeat: Infinity,
                duration: 10,
                ease: "easeInOut"
              }
            }}
            whileHover={{
              scale: 1.03,
              transition: { duration: 0.3 }
            }}
            className="relative mx-auto w-full max-w-[400px] h-[500px] lg:ml-auto lg:mr-0 overflow-hidden border-[1.5px] border-indigo-500/40 group shadow-[0_0_50px_rgba(99,102,241,0.15)] hover:border-indigo-400 hover:shadow-[0_0_60px_rgba(99,102,241,0.3)] transition-shadow duration-500"
          >
            {/* User photo */}
            <img
              src="/profile.jpg"
              alt="Syed Ayan Haider"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Bottom Gradient Overlay to bleed into background */}
            <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/60 to-transparent z-10" />

            {/* Inner border glow */}
            <div className="absolute inset-0 z-20 pointer-events-none ring-1 ring-inset ring-white/10" style={{ borderRadius: "inherit" }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
