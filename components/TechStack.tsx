"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { techStack } from "@/data/techstack";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 },
};

export default function TechStack() {
  return (
    <SectionWrapper id="stack">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Tech <span className="gradient-text">Stack</span>
      </h2>
      <p className="text-muted mb-12 max-w-2xl">
        Tools and technologies I use to build production-grade mobile applications.
      </p>

      <motion.div
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {techStack.map((tech) => (
          <motion.div
            key={tech.name}
            className="glass p-4 flex flex-col items-center justify-center gap-3 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 cursor-default group"
            variants={item}
            whileHover={{ scale: 1.08, y: -4 }}
          >
            <div className="w-10 h-10 relative group-hover:drop-shadow-[0_0_8px_rgba(124,92,255,0.3)] transition-all">
              <Image
                src={tech.icon}
                alt={tech.name}
                fill
                className={`object-contain ${tech.invert ? "invert" : ""}`}
                unoptimized
              />
            </div>
            <span className="text-xs text-muted text-center group-hover:text-foreground transition-colors">{tech.name}</span>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
