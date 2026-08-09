"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PhoneMockupProps {
  gradient?: string;
  image?: string;
  className?: string;
  delay?: number;
  floatDuration?: number;
  floatDistance?: number;
}

export default function PhoneMockup({
  gradient,
  image,
  className = "",
  delay = 0,
  floatDuration = 4,
  floatDistance = 12,
}: PhoneMockupProps) {
  return (
    <motion.div
      className={`relative ${className}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay, ease: "easeOut" }}
    >
      <motion.div
        animate={{ y: [-floatDistance, floatDistance, -floatDistance] }}
        transition={{ repeat: Infinity, duration: floatDuration, ease: "easeInOut" }}
      >
        <div className="w-[160px] h-[320px] md:w-[200px] md:h-[400px] rounded-[2.5rem] border-2 border-white/10 bg-surface/80 backdrop-blur-sm overflow-hidden shadow-2xl shadow-primary/10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 bg-background rounded-b-xl z-10" />
          {image ? (
            <Image
              src={image}
              alt="App mockup"
              fill
              className="object-cover rounded-[2.3rem]"
              unoptimized
            />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${gradient} opacity-80 rounded-[2.3rem]`} />
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}
