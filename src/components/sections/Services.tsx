"use client";

import { motion } from "framer-motion";
import { staggerContainer } from "@/lib/animations";
import { services } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import ServiceCard from "@/components/ui/ServiceCard";

export default function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 bg-[#0a0a0f]">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          badge="Services"
          title="What I Offer"
          description="End-to-end development services tailored to your needs."
        />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          {services.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
