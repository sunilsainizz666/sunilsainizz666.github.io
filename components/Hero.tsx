"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { Linkedin, Mail, ArrowDown } from "lucide-react";
import PhoneMockup from "./PhoneMockup";

export default function Hero() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const x1 = useTransform(mouseX, [0, 1000], [-10, 10]);
  const y1 = useTransform(mouseY, [0, 800], [-10, 10]);
  const x2 = useTransform(mouseX, [0, 1000], [10, -10]);
  const y2 = useTransform(mouseY, [0, 800], [10, -10]);

  const handleMouse = (e: React.MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center px-4 md:px-8 max-w-7xl mx-auto pt-24"
      onMouseMove={handleMouse}
    >
      <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-sm text-sm"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" />
            <span className="text-muted">Available for work</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="text-xl md:text-2xl font-semibold text-foreground"
          >
            Sunil Saini
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
          >
            Building high-performance{" "}
            <span className="gradient-text">mobile experiences</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg text-muted max-w-xl"
          >
            Flutter & React Native developer with 4+ years crafting production apps
            for fintech, real-time communication, and SaaS platforms.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#projects"
              className="px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-medium transition-all hover:shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="px-6 py-3 glass-sm hover:bg-white/5 text-foreground rounded-xl font-medium transition-all hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex gap-4 pt-4"
          >
            <a href="https://linkedin.com/in/sunil-saini-2245b4254/" target="_blank" rel="noopener noreferrer" className="p-2 text-muted hover:text-primary transition-colors">
              <Linkedin size={20} />
            </a>
            <a href="mailto:sunilsaini47693@gmail.com" className="p-2 text-muted hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </motion.div>
        </div>

        <div className="hidden lg:flex items-center justify-center relative h-[500px]">
          <motion.div style={{ x: x1, y: y1 }} className="absolute left-0 top-4">
            <PhoneMockup image="/mockups/krijuna.png" delay={0.3} floatDuration={4} floatDistance={10} />
          </motion.div>
          <motion.div style={{ x: x2, y: y2 }} className="absolute left-[26%] top-12 z-10">
            <PhoneMockup image="/mockups/astrology.png" delay={0.5} floatDuration={4.5} floatDistance={14} />
          </motion.div>
          <motion.div style={{ x: x1, y: y2 }} className="absolute right-[26%] top-0 z-10">
            <PhoneMockup image="/mockups/tapsy.png" delay={0.7} floatDuration={5} floatDistance={12} />
          </motion.div>
          <motion.div style={{ x: x2, y: y1 }} className="absolute right-0 top-8">
            <PhoneMockup image="/mockups/ecommerce.png" delay={0.9} floatDuration={4.2} floatDistance={11} />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
      >
        <ArrowDown size={20} className="text-muted" />
      </motion.div>
    </section>
  );
}
