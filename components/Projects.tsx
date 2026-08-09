"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "./SectionWrapper";
import { featuredProjects, reactNativeProjects } from "@/data/projects";

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Featured <span className="gradient-text">Projects</span>
      </h2>
      <p className="text-muted mb-12 max-w-2xl">
        Production apps serving thousands of users across fintech, social video, and SaaS verticals.
      </p>

      <div className="grid gap-8">
        {featuredProjects.map((project, i) => (
          <motion.div
            key={project.title}
            className="glass p-6 md:p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* Screenshots */}
              <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
                {project.screenshots.length > 0 ? (
                  project.screenshots.map((src, j) => (
                    <div
                      key={j}
                      className="relative flex-shrink-0 w-[160px] h-[320px] md:w-[180px] md:h-[360px] rounded-2xl overflow-hidden border border-white/10 snap-start"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${j + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))
                ) : (
                  <div
                    className={`w-full aspect-[4/3] rounded-xl bg-gradient-to-br ${project.gradient} opacity-80`}
                  />
                )}
              </div>

              {/* Details */}
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {project.icon && (
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10">
                      <Image src={project.icon} alt={project.title} fill className="object-cover" unoptimized />
                    </div>
                  )}
                  <div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-primary text-sm">{project.subtitle}</p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/5 text-muted border border-white/10">
                  {project.category}
                </span>
                {project.stats && (
                  <p className="text-sm font-medium text-secondary">{project.stats}</p>
                )}
                <p className="text-muted text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-primary/10 text-primary border border-primary/20"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="text-sm text-muted space-y-1">
                  {project.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                {(project.playStoreUrl || project.appStoreUrl) && (
                  <div className="flex flex-wrap gap-3">
                    {project.playStoreUrl && (
                      <motion.a
                        href={project.playStoreUrl}
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
                    )}
                    {project.appStoreUrl && (
                      <motion.a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-foreground text-sm font-medium hover:from-blue-500/20 hover:to-purple-500/20 transition-all"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        App Store
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <h3 className="text-2xl font-bold mt-20 mb-8">
        React Native <span className="gradient-text">Showcase</span>
      </h3>
      <div className="grid gap-8">
        {reactNativeProjects.map((project, i) => (
          <motion.div
            key={project.title}
            className="glass p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="flex gap-3 overflow-x-auto pb-2 snap-x">
                {project.screenshots.length > 0 ? (
                  project.screenshots.map((src, j) => (
                    <div
                      key={j}
                      className="relative flex-shrink-0 w-[160px] h-[320px] md:w-[180px] md:h-[360px] rounded-2xl overflow-hidden border border-white/10 snap-start"
                    >
                      <Image
                        src={src}
                        alt={`${project.title} screenshot ${j + 1}`}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  ))
                ) : (
                  <div className={`w-full aspect-video rounded-lg bg-gradient-to-br ${project.gradient} opacity-70`} />
                )}
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  {project.icon && (
                    <div className="relative w-12 h-12 rounded-xl overflow-hidden border border-white/10">
                      <Image src={project.icon} alt={project.title} fill className="object-cover" unoptimized />
                    </div>
                  )}
                  <div>
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <p className="text-primary text-sm">{project.subtitle}</p>
                  </div>
                </div>
                <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/5 text-muted border border-white/10">
                  {project.category}
                </span>
                <p className="text-muted text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-3 py-1 text-xs rounded-full bg-secondary/10 text-secondary border border-secondary/20">
                      {t}
                    </span>
                  ))}
                </div>
                <ul className="text-sm text-muted space-y-1">
                  {project.features.map((f) => (
                    <li key={f}>• {f}</li>
                  ))}
                </ul>
                {(project.playStoreUrl || project.appStoreUrl) && (
                  <div className="flex flex-wrap gap-3">
                    {project.playStoreUrl && (
                      <motion.a
                        href={project.playStoreUrl}
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
                    )}
                    {project.appStoreUrl && (
                      <motion.a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20 text-foreground text-sm font-medium hover:from-blue-500/20 hover:to-purple-500/20 transition-all"
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                      >
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        App Store
                      </motion.a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
