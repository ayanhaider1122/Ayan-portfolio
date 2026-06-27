"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { contactLinks, siteConfig } from "@/lib/data";
import SectionHeading from "@/components/ui/SectionHeading";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import { GithubIcon, LinkedinIcon, InstagramIcon } from "@/components/ui/icons";
import { contactSchema, type ContactFormData } from "@/lib/schemas";
import { useState } from "react";

const iconMap: Record<string, any> = {
  Email: Mail,
  LinkedIn: LinkedinIcon,
  GitHub: GithubIcon,
  Instagram: InstagramIcon,
};

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    // Simulate API request
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Contact form data submitted:", data);
    setSubmitted(true);
    reset();
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-[500px] w-[500px] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeading
          badge="Get in Touch"
          title="Let's Work Together"
          description="Have a project in mind? Let's connect and make it happen."
        />

        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left Column: Contact Links */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-[#f1f5f9] mb-6">Contact Information</h3>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.1 }}
              className="grid gap-4"
            >
              {contactLinks.map((link) => {
                const Icon = iconMap[link.label];
                return (
                  <motion.a
                    key={link.label}
                    variants={fadeInUp}
                    href={link.href}
                    target={link.label !== "Email" ? "_blank" : undefined}
                    rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
                    className="group flex items-center gap-4 rounded-[16px] border border-white/[0.07] bg-[#111118] p-5 transition-all duration-300 hover:border-indigo-500/50 hover:bg-[#151520] hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(99,102,241,0.15)]"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 group-hover:bg-indigo-500/20 transition-colors">
                      <Icon width={24} height={24} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-[#f1f5f9] group-hover:text-indigo-400 transition-colors duration-200">
                        {link.label}
                      </p>
                      <p className="truncate text-xs text-[#64748b]">
                        {link.username}
                      </p>
                    </div>
                  </motion.a>
                );
              })}
            </motion.div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-[24px] border border-white/[0.07] bg-[#111118] p-8 relative overflow-hidden"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <CheckCircle2 className="h-16 w-16 text-emerald-400 mb-4 animate-bounce" />
                  <h4 className="text-2xl font-bold text-[#f1f5f9]">Message Sent!</h4>
                  <p className="text-[#64748b] mt-2 max-w-sm">
                    Thank you for reaching out. I will get back to you as soon as possible.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Name */}
                  <div>
                    <label className="block text-sm font-semibold text-[#f1f5f9] mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      {...register("name")}
                      className={`w-full rounded-xl border bg-[#0a0a0f] px-4 py-3 text-sm text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        errors.name ? "border-red-500/50" : "border-white/[0.07]"
                      }`}
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.name.message}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-sm font-semibold text-[#f1f5f9] mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      {...register("email")}
                      className={`w-full rounded-xl border bg-[#0a0a0f] px-4 py-3 text-sm text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        errors.email ? "border-red-500/50" : "border-white/[0.07]"
                      }`}
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.email.message}</p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-[#f1f5f9] mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      {...register("message")}
                      className={`w-full rounded-xl border bg-[#0a0a0f] px-4 py-3 text-sm text-[#f1f5f9] placeholder-[#64748b] focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all ${
                        errors.message ? "border-red-500/50" : "border-white/[0.07]"
                      }`}
                      placeholder="What are we building?"
                    />
                    {errors.message && (
                      <p className="text-xs text-red-400 mt-1.5">{errors.message.message}</p>
                    )}
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-indigo-500 text-sm font-semibold text-white shadow-[0_0_20px_rgba(99,102,241,0.4)] transition-all hover:scale-[1.02] hover:bg-indigo-600 disabled:opacity-50 disabled:hover:scale-100 cursor-pointer"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send size={18} />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
