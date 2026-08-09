"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Zap, Smartphone, Download, Server } from "lucide-react";

const metrics = [
  { icon: Zap, value: 4, suffix: "+", label: "Years Experience" },
  { icon: Smartphone, value: 15, suffix: "+", label: "Apps Delivered" },
  { icon: Download, value: 10, suffix: "K+", label: "Downloads" },
  { icon: Server, value: 5, suffix: "+", label: "SaaS & Real-time Systems" },
];

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const step = Math.ceil(target / 30);
    const interval = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(interval);
      }
      setCount(current);
    }, 40);
    return () => clearInterval(interval);
  }, [inView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
}

export default function Metrics() {
  return (
    <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {metrics.map((metric, i) => (
          <motion.div
            key={metric.label}
            className="glass p-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <metric.icon className="w-6 h-6 text-primary mx-auto mb-3" />
            <div className="text-3xl md:text-4xl font-bold text-foreground">
              <Counter target={metric.value} suffix={metric.suffix} />
            </div>
            <p className="text-sm text-muted mt-1">{metric.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
