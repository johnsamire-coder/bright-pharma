"use client";

import { motion } from "framer-motion";
import { Heart, Pill, Shield, Flag, Leaf, Users } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Family Health Focus",
    description: "Specialized in comprehensive family health solutions — from infants to adults.",
    color: "text-[#dc2626]",
    bg: "bg-[#dc2626]/5",
    border: "border-[#dc2626]/10",
  },
  {
    icon: Pill,
    title: "Nutritional Supplements",
    description:
      "High-quality nutritional supplements that support everyday wellness for the whole family.",
    color: "text-[#1e3a8a]",
    bg: "bg-[#1e3a8a]/5",
    border: "border-[#1e3a8a]/10",
  },
  {
    icon: Shield,
    title: "GMP Quality Standards",
    description:
      "Every product meets strict GMP quality standards for your safety and peace of mind.",
    color: "text-[#3b82f6]",
    bg: "bg-[#3b82f6]/5",
    border: "border-[#3b82f6]/10",
  },
  {
    icon: Flag,
    title: "Proudly Made in Egypt",
    description: "Locally produced with international quality standards and Egyptian expertise.",
    color: "text-[#dc2626]",
    bg: "bg-[#dc2626]/5",
    border: "border-[#dc2626]/10",
  },
  {
    icon: Leaf,
    title: "Continuous Innovation",
    description:
      "Always developing new solutions to meet the evolving health needs of Egyptian families.",
    color: "text-[#10b981]",
    bg: "bg-[#10b981]/5",
    border: "border-[#10b981]/10",
  },
  {
    icon: Users,
    title: "Dedicated Support",
    description: "Our team is always ready to support pharmacies and healthcare providers.",
    color: "text-[#1e3a8a]",
    bg: "bg-[#1e3a8a]/5",
    border: "border-[#1e3a8a]/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#fafbfc] px-4 py-24 md:px-8 md:py-32">
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
            Why Choose Us
          </p>
          <h2
            className="mb-4 text-4xl font-bold text-[#0f172a] md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Built for Your Family&apos;s Health
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            We combine Egyptian passion with international quality standards to deliver health
            solutions your family can trust.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`rounded-2xl border bg-white p-6 ${feature.border} group shadow-sm transition-all duration-300 hover:shadow-lg`}
            >
              {/* Icon */}
              <div
                className={`${feature.bg} mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110`}
              >
                <feature.icon className={`${feature.color} h-6 w-6`} />
              </div>

              {/* Title */}
              <h3 className="mb-2 text-lg font-semibold text-[#0f172a]">{feature.title}</h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-gray-500">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
