"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { testimonials } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import TestimonialCard from "@/components/ui/TestimonialCard";

export default function Testimonials() {
  return (
    <section className="relative py-24 sm:py-32 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          badge="Testimonials"
          title="What Clients Say"
          description="Feedback from people I've had the pleasure of working with."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex justify-center flex-wrap gap-6"
        >
          {testimonials.map((t) => (
            <div key={t.name} className="flex-shrink-0">
              <TestimonialCard testimonial={t} />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
