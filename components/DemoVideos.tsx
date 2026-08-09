"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const videos = [
  { title: "Tapsy - Video Marketplace Demo", gradient: "from-purple-600 to-pink-500" },
  { title: "Krijuna - Trading App Walkthrough", gradient: "from-emerald-500 to-cyan-500" },
  { title: "Astrology SaaS - Live Call Demo", gradient: "from-amber-500 to-red-500" },
];

export default function DemoVideos() {
  return (
    <SectionWrapper id="demos">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Demo <span className="gradient-text">Videos</span>
      </h2>
      <p className="text-muted mb-12 max-w-2xl">
        Quick walkthroughs of featured applications.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {videos.map((video, i) => (
          <motion.div
            key={video.title}
            className="glass overflow-hidden group cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <div
              className={`aspect-video bg-gradient-to-br ${video.gradient} opacity-60 relative flex items-center justify-center`}
            >
              <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
                <Play size={24} className="text-white ml-1" />
              </div>
            </div>
            <div className="p-4">
              <p className="text-sm font-medium">{video.title}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
