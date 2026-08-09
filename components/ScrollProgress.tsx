"use client";

import { motion, useScroll, useSpring } from "framer-motion";

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="fixed top-0 left-0 right-0 h-[3px] z-[100] bg-surface/30">
      <motion.div
        className="h-full origin-left bg-gradient-to-r from-primary via-secondary to-accent shadow-[0_0_10px_rgba(124,92,255,0.5)]"
        style={{ scaleX }}
      />
    </div>
  );
}
