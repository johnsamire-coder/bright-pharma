"use client";

import { motion } from "framer-motion";
import { Award, Flag, Shield, Heart } from "lucide-react";

const certifications = [
  {
    icon: Award,
    name: "GMP Certified",
    description: "Good Manufacturing Practice",
    color: "text-[#1e3a8a]",
    bg: "bg-[#1e3a8a]/5",
  },
  {
    icon: Flag,
    name: "Made in Egypt",
    description: "Proudly Local Production",
    color: "text-[#dc2626]",
    bg: "bg-[#dc2626]/5",
  },
  {
    icon: Shield,
    name: "Quality Assured",
    description: "Strict Quality Control",
    color: "text-[#3b82f6]",
    bg: "bg-[#3b82f6]/5",
  },
  {
    icon: Heart,
    name: "Family Safe",
    description: "Safe for All Ages",
    color: "text-[#dc2626]",
    bg: "bg-[#dc2626]/5",
  },
];

export default function Certifications() {
  return (
    <section className="bg-white px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold tracking-widest text-[#dc2626] uppercase">
            Our Standards
          </p>
          <h2
            className="mb-4 text-4xl font-bold text-[#0f172a] md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Quality You Can Trust
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Every Bright Pharma product is manufactured under strict quality standards to ensure the
            safety and wellbeing of your family.
          </p>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group rounded-2xl border border-gray-200 bg-[#fafbfc] p-6 text-center transition-all duration-300 hover:shadow-lg"
            >
              <div
                className={`${cert.bg} mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110`}
              >
                <cert.icon className={`${cert.color} h-8 w-8`} />
              </div>
              <h3 className="mb-1 font-bold text-[#0f172a]">{cert.name}</h3>
              <p className="text-xs text-gray-500">{cert.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-10 text-center text-sm text-gray-400"
        >
          All products are manufactured in compliance with Egyptian pharmaceutical regulations
        </motion.p>
      </div>
    </section>
  );
}
