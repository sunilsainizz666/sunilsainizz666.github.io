"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Linkedin, MessageCircle, Phone, Copy, Check } from "lucide-react";
import SectionWrapper from "./SectionWrapper";

const contacts = [
  { icon: Mail, label: "Email", value: "sunilsaini47693@gmail.com", href: "mailto:sunilsaini47693@gmail.com" },
  { icon: Linkedin, label: "LinkedIn", value: "linkedin.com/in/sunil-saini", href: "https://linkedin.com/in/sunil-saini-2245b4254/" },
  { icon: Phone, label: "Phone", value: "+91 7877374694", href: "tel:+917877374694" },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat on WhatsApp", href: "https://wa.me/917877374694" },
];

export default function Contact() {
  const [copied, setCopied] = useState<string | null>(null);

  const copy = (value: string) => {
    navigator.clipboard.writeText(value);
    setCopied(value);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <SectionWrapper id="contact">
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Get in <span className="gradient-text">Touch</span>
      </h2>
      <p className="text-muted mb-12 max-w-2xl">
        Open to remote opportunities, freelance projects, and interesting collaborations.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 max-w-2xl">
        {contacts.map((item, i) => (
          <motion.div
            key={item.label}
            className="glass p-4 flex items-center gap-4 group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <item.icon size={18} className="text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-muted">{item.label}</p>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-foreground hover:text-primary transition-colors truncate block"
              >
                {item.value}
              </a>
            </div>
            <button
              onClick={() => copy(item.value)}
              className="p-2 text-muted hover:text-foreground transition-colors"
              aria-label={`Copy ${item.label}`}
            >
              {copied === item.value ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
            </button>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
