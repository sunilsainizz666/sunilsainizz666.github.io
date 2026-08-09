"use client";

import { motion } from "framer-motion";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const layers = [
  {
    title: "Mobile Client Layer",
    description: "Cross-platform UI with offline cache and state.",
    components: ["Flutter / React Native UI", "Local storage and state"],
  },
  {
    title: "Backend & API Layer",
    description: "Authenticated APIs with validated business logic.",
    components: ["REST / GraphQL gateway", "Auth middleware and services"],
  },
  {
    title: "Data & Cloud Services Layer",
    description: "Databases plus managed auth, push, and analytics.",
    components: ["SQL / NoSQL database", "Push, storage, and analytics"],
  },
];

function FlowArrow({ vertical = false }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div className="flex flex-col items-center gap-0.5 py-2" aria-hidden="true">
        <ArrowDown size={16} className="text-primary" />
        <ArrowUp size={14} className="text-muted" />
        <span className="text-[10px] text-muted tracking-wide">request / response</span>
      </div>
    );
  }

  return (
    <div
      className="hidden md:flex flex-col items-center justify-center shrink-0 px-1"
      aria-hidden="true"
    >
      <ArrowRight size={16} className="text-primary" />
      <ArrowLeft size={14} className="text-muted mt-1" />
      <span className="text-[10px] text-muted mt-1 whitespace-nowrap">req / res</span>
    </div>
  );
}

export default function Architecture() {
  return (
    <SectionWrapper id="architecture">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        System <span className="gradient-text">Architecture</span>
      </h2>
      <p className="text-muted mb-12 max-w-2xl">
        Modern mobile architecture from client to cloud.
      </p>

      <div className="flex flex-col md:flex-row md:items-stretch gap-2 md:gap-3">
        {layers.map((layer, i) => (
          <div key={layer.title} className="contents">
            <motion.div
              className="glass p-6 flex-1 min-w-0"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-primary mb-2">{layer.title}</h3>
              <p className="text-muted text-sm mb-6">{layer.description}</p>
              <div className="flex flex-col items-center gap-3">
                {layer.components.map((component, j) => (
                  <div key={component} className="w-full">
                    <div className="px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center text-sm">
                      {component}
                    </div>
                    {j < layer.components.length - 1 && (
                      <div className="flex justify-center py-1">
                        <div className="w-px h-4 bg-primary/40" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {i < layers.length - 1 && (
              <>
                <div className="md:hidden flex justify-center">
                  <FlowArrow vertical />
                </div>
                <FlowArrow />
              </>
            )}
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
