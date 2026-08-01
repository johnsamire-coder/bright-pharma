"use client";

import { motion } from "framer-motion";
import { ArrowRight, Heart, Leaf, Shield } from "lucide-react";

export default function AboutPreview() {
  return (
    <section className="bg-white px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left: Dark Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1e3a8a] to-[#1e3a8a]/80 p-10 text-white">
              {/* Background pattern */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 right-0 h-64 w-64 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/20" />
                <div className="absolute bottom-0 left-0 h-48 w-48 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#dc2626]/30" />
              </div>

              <div className="relative z-10">
                {/* Label */}
                <p className="mb-6 text-xs font-semibold tracking-widest text-white/60 uppercase">
                  Who We Are
                </p>

                {/* Title */}
                <h2
                  className="mb-6 text-4xl leading-tight font-bold md:text-5xl"
                  style={{ fontFamily: "var(--font-playfair)" }}
                >
                  New Generation
                  <br />
                  <span className="text-[#ef4444]">of Excellence</span>
                </h2>

                {/* Description */}
                <p className="mb-8 text-lg leading-relaxed text-white/80">
                  Bright Pharma is a young, passionate Egyptian company redefining pharmaceutical
                  standards. We believe every family deserves access to high-quality health
                  solutions.
                </p>

                {/* Values Chips */}
                <div className="flex flex-wrap gap-3">
                  {["Family Health", "Innovation", "Quality", "Made in Egypt"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {/* Label */}
            <p className="mb-4 text-sm font-semibold tracking-widest text-[#dc2626] uppercase">
              Our Story
            </p>

            {/* Title */}
            <h2
              className="mb-6 text-4xl leading-tight font-bold text-[#0f172a] md:text-5xl"
              style={{ fontFamily: "var(--font-playfair)" }}
            >
              Driven by Passion
              <br />
              for Health
            </h2>

            {/* Text */}
            <p className="mb-6 text-lg leading-relaxed text-gray-600">
              We started with a simple belief: Egyptian families deserve world-class pharmaceutical
              products. That belief drives everything we do — from research to production to
              delivery.
            </p>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              Specialized in{" "}
              <span className="font-semibold text-[#1e3a8a]">nutritional supplements</span> and
              family care products, we craft each formula with precision, quality, and love.
            </p>

            {/* 3 Pillars */}
            <div className="mb-8 space-y-4">
              {[
                {
                  icon: Heart,
                  title: "Family First",
                  desc: "Every product designed with your family's wellbeing in mind",
                  color: "text-[#dc2626]",
                  bg: "bg-[#dc2626]/5",
                },
                {
                  icon: Shield,
                  title: "GMP Quality",
                  desc: "Strict quality control at every step of manufacturing",
                  color: "text-[#1e3a8a]",
                  bg: "bg-[#1e3a8a]/5",
                },
                {
                  icon: Leaf,
                  title: "Continuous Innovation",
                  desc: "Always evolving to meet your health needs",
                  color: "text-[#10b981]",
                  bg: "bg-[#10b981]/5",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className={`${item.bg} shrink-0 rounded-xl p-3`}>
                    <item.icon className={`${item.color} h-5 w-5`} />
                  </div>
                  <div>
                    <h4 className="mb-0.5 font-semibold text-[#0f172a]">{item.title}</h4>
                    <p className="text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <a
              href="/about"
              className="group inline-flex items-center gap-2 font-semibold text-[#1e3a8a] transition-colors duration-300 hover:text-[#dc2626]"
            >
              Learn More About Us
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
