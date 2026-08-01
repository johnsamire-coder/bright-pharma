"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-[#fafbfc] to-[#f8fafc]">
      {/* Background Glows */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-20 left-10 h-72 w-72 rounded-full bg-[#1e3a8a]/5 blur-3xl" />
        <div className="absolute right-10 bottom-20 h-96 w-96 rounded-full bg-[#dc2626]/4 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-32 md:px-8 md:py-40">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Text Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 shadow-sm"
            >
              <span className="h-2 w-2 animate-pulse rounded-full bg-[#dc2626]" />
              <span className="text-xs font-semibold tracking-widest text-[#1e3a8a] uppercase">
                New Generation Pharma
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="mb-6 text-5xl leading-tight font-bold md:text-6xl lg:text-7xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              <span className="bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#dc2626] bg-clip-text text-transparent">
                Human Health
              </span>
              <br />
              <span className="text-[#0f172a]">Is Our Mission</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="mb-10 max-w-xl text-lg leading-relaxed text-gray-600"
            >
              Bright Pharma is a new generation Egyptian pharmaceutical company, specialized in{" "}
              <span className="font-semibold text-[#1e3a8a]">family health</span> and{" "}
              <span className="font-semibold text-[#dc2626]">nutritional supplements</span> —
              crafted with passion, delivered with quality.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="/products"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#1e3a8a] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#dc2626] hover:shadow-xl"
              >
                Explore Products
                <ArrowRight size={18} />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#1e3a8a] bg-white px-8 py-4 font-semibold text-[#1e3a8a] transition-all duration-300 hover:bg-[#1e3a8a] hover:text-white"
              >
                <Phone size={18} />
                Get in Touch
              </a>
            </motion.div>
          </div>

          {/* Right: Info Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="hidden lg:block"
          >
            <div className="rounded-3xl border border-gray-200 bg-white p-8 shadow-2xl">
              {/* Logo */}
              <div className="mb-8 flex justify-center">
                <Image
                  src="/images/logo/bright-pharma-logo.png"
                  alt="Bright Pharma"
                  width={160}
                  height={80}
                  className="object-contain"
                />
              </div>

              {/* Divider */}
              <div className="mb-8 h-px w-full bg-gray-100" />

              {/* Mini Stats */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { value: "6+", label: "Products", color: "text-[#1e3a8a]" },
                  { value: "100%", label: "Quality", color: "text-[#dc2626]" },
                  { value: "GMP", label: "Certified", color: "text-[#1e3a8a]" },
                  { value: "Egypt", label: "Made in Egypt", color: "text-[#dc2626]" },
                ].map((item, i) => (
                  <div key={i} className="rounded-2xl bg-[#fafbfc] p-4 text-center">
                    <div className={`text-2xl font-bold ${item.color} mb-1`}>{item.value}</div>
                    <div className="text-xs font-medium text-gray-500">{item.label}</div>
                  </div>
                ))}
              </div>

              {/* Bottom Tag */}
              <div className="mt-6 text-center">
                <p className="text-xs tracking-widest text-gray-400 uppercase">
                  Family Health &amp; Nutritional Supplements
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
