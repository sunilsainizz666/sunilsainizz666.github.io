"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Work <span className="gradient-text">Experience</span>
      </h2>
      <p className="text-muted mb-12 max-w-2xl">
        Professional journey building mobile applications at scale.
      </p>

      <div className="relative">
        <div className="absolute left-4 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-transparent" />

        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <motion.div
              key={exp.company}
              className="relative pl-12 md:pl-20"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
            >
              <div className="absolute left-2.5 md:left-6.5 top-1 w-3 h-3 rounded-full bg-primary border-2 border-background" />
              <div className="glass p-6">
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold">{exp.company}</h3>
                  <span className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary">
                    {exp.period}
                  </span>
                </div>
                <p className="text-sm text-accent mb-2">{exp.role}</p>
                <p className="text-sm text-muted mb-4">{exp.description}</p>
                <ul className="grid sm:grid-cols-2 gap-1">
                  {exp.highlights.map((h) => (
                    <li key={h} className="text-xs text-muted">
                      • {h}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
