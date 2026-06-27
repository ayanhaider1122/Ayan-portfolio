import { Variants } from "framer-motion";

// Spring Physics and Easing for premium Vercel/Stripe feel
export const springTransition = {
  type: "spring",
  stiffness: 300,
  damping: 20,
};

export const easeOutTransition = {
  ease: "easeOut" as const,
  duration: 0.5,
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: easeOutTransition,
  },
};

// New Premium Variants

export const wordRevealContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

export const wordReveal: Variants = {
  hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20,
    },
  },
};

export const slideInFromOutside: Variants = {
  hidden: { opacity: 0, x: -100, y: 50, scale: 0.9 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

// This is applied via whileHover in the components, but we define the physical properties here if needed.
// E.g., cards will use: whileHover={{ y: -8, boxShadow: "0 20px 60px rgba(99,102,241,0.15)", borderColor: "rgba(99,102,241,0.5)" }}

