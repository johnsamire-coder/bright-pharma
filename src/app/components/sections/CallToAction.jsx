"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function CallToAction() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/85 px-4 py-24 md:px-8 md:py-32">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-0 right-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5" />
        <div className="absolute bottom-0 left-0 h-72 w-72 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#dc2626]/10" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-4 text-xs font-semibold tracking-widest text-white/60 uppercase">
              Get In Touch
            </p>
            <h2
              className="mb-6 text-4xl leading-tight font-bold text-white md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Let&apos;s Build a
              <br />
              <span className="text-[#ef4444]">Healthier Future</span>
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-white/75">
              Whether you are a pharmacy, healthcare provider, or just curious about our products —
              we would love to hear from you.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-[#1e3a8a] shadow-lg transition-all duration-300 hover:bg-[#dc2626] hover:text-white"
            >
              Contact Us Today
              <ArrowRight size={18} />
            </a>
          </motion.div>

          {/* Right: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {[
              {
                icon: Phone,
                label: "Phone",
                value: "01222620797",
                href: "tel:+201222620797",
              },
              {
                icon: Mail,
                label: "Email",
                value: "brightpharma.co@gmail.com",
                href: "mailto:brightpharma.co@gmail.com",
              },
              {
                icon: MapPin,
                label: "Address",
                value: "37 Mustafa Pasha, El-Zeitoun, Cairo",
                href: "#",
              },
            ].map((item, i) => (
              <a
                key={i}
                href={item.href}
                className="group flex items-center gap-4 rounded-2xl border border-white/20 bg-white/10 p-5 transition-all duration-300 hover:bg-white/15"
              >
                <div className="shrink-0 rounded-xl bg-white/10 p-3 transition-colors duration-300 group-hover:bg-[#dc2626]/20">
                  <item.icon className="h-5 w-5 text-white" />
                </div>
                <div>
                  <p className="mb-0.5 text-xs tracking-wider text-white/50 uppercase">
                    {item.label}
                  </p>
                  <p className="text-sm font-medium text-white">{item.value}</p>
                </div>
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
