"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { publishedApps } from "@/data/projects";

export default function PublishedApps() {
  return (
    <SectionWrapper id="published">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Published <span className="gradient-text">Apps</span>
      </h2>
      <p className="text-muted mb-12 max-w-2xl">
        Production apps live on the Google Play Store serving real users.
      </p>

      <div className="grid md:grid-cols-3 gap-6">
        {publishedApps.map((app, i) => (
          <motion.div
            key={app.title}
            className="glass overflow-hidden group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            whileHover={{ y: -4 }}
          >
            {/* Screenshot carousel */}
            {app.screenshots.length > 0 ? (
              <div className="flex gap-2 p-4 overflow-x-auto snap-x bg-surface/50">
                {app.screenshots.map((src, j) => (
                  <div
                    key={j}
                    className="relative flex-shrink-0 w-[120px] h-[220px] rounded-xl overflow-hidden border border-white/10 snap-start"
                  >
                    <Image
                      src={src}
                      alt={`${app.title} screenshot ${j + 1}`}
                      fill
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                ))}
              </div>
            ) : (
              <div className={`aspect-[4/3] bg-gradient-to-br ${app.gradient} opacity-70 relative`}>
                <span className="absolute top-3 left-3 px-3 py-1 text-[10px] font-semibold rounded-full bg-black/40 backdrop-blur-sm text-white">
                  {app.category}
                </span>
              </div>
            )}

            <div className="p-5 space-y-3">
              <div className="flex items-center gap-3">
                {app.icon && (
                  <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10 shadow-md">
                    <Image src={app.icon} alt={app.title} fill className="object-cover" unoptimized />
                  </div>
                )}
                <div>
                  <h3 className="text-lg font-bold">{app.title}</h3>
                  <span className="text-xs text-primary">{app.category}</span>
                </div>
              </div>
              <p className="text-sm text-muted">{app.description}</p>
              <motion.a
                href={app.playStoreUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 border border-emerald-500/20 text-foreground text-sm font-medium hover:from-emerald-500/20 hover:to-cyan-500/20 transition-all"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24">
                  <path fill="#34A853" d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92z"/>
                  <path fill="#FBBC04" d="M14.499 12.707l2.302 2.302-10.937 6.333 8.635-8.635z"/>
                  <path fill="#EA4335" d="M17.698 9.509l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491z"/>
                  <path fill="#4285F4" d="M5.864 2.658L16.8 8.99l-2.3 2.3-8.636-8.632z"/>
                </svg>
                Google Play
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
