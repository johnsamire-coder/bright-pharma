"use client";

import { motion } from "framer-motion";
import { ArrowRight, Tag } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "../../config/site";

export default function FeaturedProducts() {
  const featured = siteConfig.products;

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
            Our Products
          </p>
          <h2
            className="mb-4 text-4xl font-bold text-[#0f172a] md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Crafted for Your Family
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Each product is carefully formulated to support the health and wellbeing of every family
            member.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-xl"
            >
              {/* Product Image */}
              <div className="relative h-56 overflow-hidden bg-white">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
                {/* Badge */}
                <div className="absolute top-3 left-3">
                  <span className="rounded-full bg-[#1e3a8a] px-3 py-1.5 text-xs font-semibold text-white">
                    {product.badge}
                  </span>
                </div>
              </div>

              {/* Product Info */}
              <div className="flex flex-1 flex-col p-6">
                {/* Category */}
                <div className="mb-3 flex items-center gap-1.5">
                  <Tag size={12} className="text-[#dc2626]" />
                  <span className="text-xs font-medium tracking-wide text-[#dc2626] uppercase">
                    {product.category}
                  </span>
                </div>

                {/* Name */}
                <h3 className="mb-3 text-xl font-bold text-[#0f172a]">{product.name}</h3>

                {/* Description */}
                <p className="mb-5 flex-1 text-sm leading-relaxed text-gray-500">
                  {product.shortDesc}
                </p>

                {/* CTA */}
                <button className="group/btn mt-auto flex items-center gap-1.5 text-sm font-semibold text-[#1e3a8a] transition-colors duration-300 hover:text-[#dc2626]">
                  Learn More
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-300 group-hover/btn:translate-x-1"
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-14 text-center"
        >
          <a
            href="/products"
            className="inline-flex items-center gap-2 rounded-full bg-[#1e3a8a] px-8 py-4 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#dc2626] hover:shadow-xl"
          >
            View All Products
            <ArrowRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
