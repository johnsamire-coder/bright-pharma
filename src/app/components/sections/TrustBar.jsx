"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "6+",
    label: "Innovative Products",
    suffix: "",
    color: "text-[#1e3a8a]",
  },
  {
    value: "100%",
    label: "Quality Assured",
    suffix: "",
    color: "text-[#dc2626]",
  },
  {
    value: "GMP",
    label: "Certified Standards",
    suffix: "",
    color: "text-[#1e3a8a]",
  },
  {
    value: "Egypt",
    label: "Made in Egypt 🇪🇬",
    suffix: "",
    color: "text-[#dc2626]",
  },
];

export default function TrustBar() {
  return (
    <section className="bg-gradient-to-r from-[#1e3a8a] to-[#1e3a8a]/90 py-16">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-10 text-center text-xs font-semibold tracking-widest text-white/60 uppercase"
        >
          Why Bright Pharma
        </motion.p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15, duration: 0.6 }}
              className="text-center"
            >
              {/* Value */}
              <div className="mb-2 text-4xl font-bold text-white md:text-5xl">
                {stat.value}
                <span className="text-[#dc2626]">{stat.suffix}</span>
              </div>

              {/* Divider */}
              <div className="mx-auto mb-2 h-0.5 w-8 bg-white/30" />

              {/* Label */}
              <p className="text-sm font-medium text-white/70">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
