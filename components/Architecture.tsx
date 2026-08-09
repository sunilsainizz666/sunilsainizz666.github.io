"use client";

import { motion } from "framer-motion";
import SectionWrapper from "./SectionWrapper";

const flows = [
  {
    title: "Mobile Architecture",
    nodes: ["Flutter App", "REST API", "PostgreSQL"],
    color: "primary",
  },
  {
    title: "Real-time Stack",
    nodes: ["WebRTC", "Agora / Twilio", "Live Streaming"],
    color: "secondary",
  },
  {
    title: "Cloud Services",
    nodes: ["Firebase", "Push Notifications", "Analytics"],
    color: "accent",
  },
];

export default function Architecture() {
  return (
    <SectionWrapper id="architecture">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        System <span className="gradient-text">Architecture</span>
      </h2>
      <p className="text-muted mb-12 max-w-2xl">
        How I structure production mobile applications.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {flows.map((flow, i) => (
          <motion.div
            key={flow.title}
            className="glass p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <h3 className="text-sm font-semibold text-primary mb-6">{flow.title}</h3>
            <div className="flex flex-col items-center gap-3">
              {flow.nodes.map((node, j) => (
                <div key={node} className="w-full">
                  <div className="px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.06] text-center text-sm">
                    {node}
                  </div>
                  {j < flow.nodes.length - 1 && (
                    <div className="flex justify-center py-1">
                      <div className="w-px h-4 bg-primary/40" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
