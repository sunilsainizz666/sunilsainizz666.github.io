"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const testimonials = [
  {
    text: "I build apps that handle 10K+ concurrent users with zero downtime, focusing on clean architecture and performance-first development.",
    label: "Performance Engineering",
  },
  {
    text: "From real-time video calls to payment processing, I ship complex features that work reliably across iOS and Android from a single codebase.",
    label: "Cross-Platform Expertise",
  },
  {
    text: "I treat every project like a startup product — fast iteration, clean code, and a relentless focus on user experience and business metrics.",
    label: "Product Mindset",
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper>
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        What I <span className="gradient-text">Build</span>
      </h2>
      <p className="text-muted mb-12 max-w-2xl">
        My approach to mobile development.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((item, i) => (
          <motion.div
            key={item.label}
            className="glass p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <p className="text-sm text-muted mb-4 leading-relaxed">"{item.text}"</p>
            <p className="text-xs font-semibold text-primary">{item.label}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
