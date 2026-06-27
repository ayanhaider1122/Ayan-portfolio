"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  staggerContainer,
  wordRevealContainer,
  wordReveal,
} from "@/lib/animations";
import { siteConfig } from "@/lib/data";
import { Download, ArrowRight, Briefcase } from "lucide-react";
import { cn } from "@/lib/utils";
import Balancer from "react-wrap-balancer";

// Local Typewriter Component
const Typewriter = ({
  words,
  speed = 80,
  delay = 2000,
}: {
  words: string[];
  speed?: number;
  delay?: number;
}) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const fullWord = words[currentWordIndex];

    if (isDeleting) {
      timer = setTimeout(() => {
        setCurrentText((prev) => prev.slice(0, -1));
      }, speed / 2);
    } else {
      timer = setTimeout(() => {
        setCurrentText((prev) => fullWord.slice(0, prev.length + 1));
      }, speed);
    }

    if (!isDeleting && currentText === fullWord) {
      timer = setTimeout(() => setIsDeleting(true), delay);
    }

    if (isDeleting && currentText === "") {
      setIsDeleting(false);
      setCurrentWordIndex((prev) => (prev + 1) % words.length);
    }

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentWordIndex, words, speed, delay]);

  return (
    <span className="relative inline-block min-w-[200px]">
      <span className="bg-gradient-to-r from-cyan-400 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
        {currentText}
      </span>
      <span className="ml-1.5 inline-block w-[3px] h-[1.1em] bg-cyan-400 align-middle animate-pulse" />
    </span>
  );
};

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
            gradient &&
              "bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent"
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
  const roles = [
    "Full-Stack Web Developer",
    "Project Manager",
    "Software Engineer",
  ];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-indigo-500 opacity-10 blur-[140px] pointer-events-none animate-pulse duration-[8000ms]" />
      <div className="absolute top-1/3 right-0 h-[500px] w-[500px] rounded-full bg-cyan-400 opacity-10 blur-[140px] pointer-events-none animate-pulse duration-[6000ms]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-12">
          {/* Left Side: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-start lg:col-span-7"
          >
            {/* Badge */}
            <motion.span
              variants={wordReveal}
              className="mb-6 inline-flex items-center rounded-full border border-cyan-500/20 bg-cyan-500/5 backdrop-blur-md px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:border-cyan-400/40 transition-colors"
            >
              Welcome to my world
            </motion.span>

            {/* Name */}
            <h1 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-6xl lg:text-7xl flex flex-wrap">
              <Balancer>
                <span className="text-[#f1f5f9] mr-4">Hi, I&apos;m</span>
                <WordRevealText text={name} gradient={true} />
              </Balancer>
            </h1>

            {/* Title (Typewriter) */}
            <motion.h2
              variants={wordReveal}
              className="mt-6 text-2xl font-bold sm:text-3xl tracking-tight text-[#f1f5f9] flex flex-wrap items-center gap-2"
            >
              <span>A</span>
              <Typewriter words={roles} />
            </motion.h2>

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
              className="mt-8 flex flex-wrap gap-4 w-full sm:w-auto"
            >
              <a
                href="#contact"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all hover:scale-105 hover:bg-indigo-500 hover:shadow-[0_0_30px_rgba(99,102,241,0.6)]"
              >
                Hire Me
                <Briefcase size={18} />
              </a>
              <a
                href="#projects"
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-indigo-500/40 bg-transparent px-8 text-sm font-semibold text-indigo-400 transition-all hover:bg-indigo-500/10 hover:border-indigo-400 hover:scale-105"
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

            {/* Find Me On & Best Skill On Section */}
            <motion.div
              variants={wordReveal}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-8 w-full border-t border-white/5 pt-8"
            >
              {/* Find Me On */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#64748b]">
                  Find Me On
                </span>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/ayanhaider1122"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-[#09090e] text-[#f1f5f9] transition-all duration-300 hover:border-cyan-400/50 hover:bg-[#0c0c14] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,229,255,0.15)] hover:text-cyan-400"
                    aria-label="GitHub"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                      <path d="M9 18c-4.51 2-5-2-7-2" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/syed-ayan-haider-a947a6296"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-[#09090e] text-[#f1f5f9] transition-all duration-300 hover:border-indigo-400/50 hover:bg-[#0c0c14] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(99,102,241,0.15)] hover:text-indigo-400"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/develop_withsyed"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-[#09090e] text-[#f1f5f9] transition-all duration-300 hover:border-pink-500/50 hover:bg-[#0c0c14] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(236,72,153,0.15)] hover:text-pink-500"
                    aria-label="Instagram"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Best Skill On */}
              <div className="flex flex-col gap-3">
                <span className="text-xs font-bold uppercase tracking-widest text-[#64748b]">
                  Best Skill On
                </span>
                <div className="flex gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-[#09090e] p-2.5 transition-all duration-300 hover:border-cyan-400/50 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,229,255,0.1)]" title="React">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" className="h-full w-full object-contain" />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-[#09090e] p-2.5 transition-all duration-300 hover:border-white/40 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(255,255,255,0.05)]" title="Next.js">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg" alt="Next.js" className="h-full w-full object-contain invert" />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-[#09090e] p-2.5 transition-all duration-300 hover:border-blue-500/50 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(59,130,246,0.1)]" title="TypeScript">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" className="h-full w-full object-contain" />
                  </div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/[0.08] bg-[#09090e] p-2.5 transition-all duration-300 hover:border-green-500/50 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(34,197,94,0.1)]" title="Node.js">
                    <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" alt="Node.js" className="h-full w-full object-contain" />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side: Photo Container with outline text backdrop */}
          <div className="relative flex items-center justify-center lg:col-span-5 lg:ml-auto lg:mr-0 w-full max-w-[400px] h-[550px] sm:mt-10 lg:mt-0">
            {/* Background Glows */}
            <div className="absolute -inset-4 rounded-full bg-indigo-500/10 blur-3xl pointer-events-none" />
            <div className="absolute -inset-10 rounded-full bg-cyan-400/5 blur-3xl pointer-events-none" />
            
            {/* Large background outline text for high-end designer layout */}
            <div className="absolute -top-6 -left-12 select-none pointer-events-none text-8xl font-black text-outline opacity-10 tracking-widest font-sans uppercase">
              Developer
            </div>
            <div className="absolute -bottom-6 -right-12 select-none pointer-events-none text-8xl font-black text-outline opacity-10 tracking-widest font-sans uppercase">
              Haider
            </div>

            {/* Photo morphing frame (kept shape and animation exactly the same) */}
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
              className="relative w-full h-[500px] overflow-hidden border-[1.5px] border-indigo-500/40 group shadow-[0_0_50px_rgba(99,102,241,0.15)] hover:border-indigo-400 hover:shadow-[0_0_60px_rgba(99,102,241,0.3)] transition-shadow duration-500"
            >
              {/* User photo */}
              <img
                src="/profile.jpg"
                alt="Syed Ayan Haider"
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Bottom Gradient Overlay to bleed into background */}
              <div className="absolute bottom-0 left-0 right-0 h-[100px] bg-gradient-to-t from-[#030303] via-[#030303]/60 to-transparent z-10" />

              {/* Inner border glow */}
              <div className="absolute inset-0 z-20 pointer-events-none ring-1 ring-inset ring-white/10" style={{ borderRadius: "inherit" }} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
