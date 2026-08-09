"use client";

import { motion } from "framer-motion";
import {
  Search,
  PenTool,
  Code2,
  Link2,
  Smartphone,
  Rocket,
} from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const steps = [
  {
    number: "01",
    title: "Discover",
    icon: Search,
    items: ["Core problem", "User personas", "Success metrics"],
  },
  {
    number: "02",
    title: "Design",
    icon: PenTool,
    items: ["Screen flows", "UI systems", "Micro-interactions"],
  },
  {
    number: "03",
    title: "Build",
    icon: Code2,
    items: ["Flutter & React Native", "Clean architecture", "State management"],
  },
  {
    number: "04",
    title: "Connect",
    icon: Link2,
    items: ["REST & GraphQL", "Firebase & WebRTC", "Payments & push"],
  },
  {
    number: "05",
    title: "Test",
    icon: Smartphone,
    items: ["Real devices", "iOS & Android", "Edge cases"],
  },
  {
    number: "06",
    title: "Ship",
    icon: Rocket,
    items: ["Play Store", "App Store", "Live monitoring"],
  },
];

export default function Testimonials() {
  return (
    <SectionWrapper id="approach">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        From idea to{" "}
        <span className="gradient-text">store launch</span>, step by step.
      </h2>
      <p className="text-muted mb-12 max-w-2xl">
        A full mobile product cycle — architecture, shipping, and everything between.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {steps.map((step, i) => (
          <motion.div
            key={step.number}
            className="glass p-5 flex flex-col h-full"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-2xl font-bold text-primary/40 tabular-nums">
                {step.number}
              </span>
              <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                <step.icon size={18} className="text-primary" />
              </div>
            </div>
            <h3 className="text-base font-semibold text-foreground mb-3">
              {step.title}
            </h3>
            <ul className="space-y-2 mt-auto">
              {step.items.map((item) => (
                <li key={item} className="text-sm text-muted leading-snug">
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
