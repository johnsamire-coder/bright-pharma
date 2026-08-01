"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Package, Tag } from "lucide-react";
import { productsData } from "../../config/site";

export default function FeaturedProducts() {
  const featured = productsData.filter((p) => p.featured);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#fafbfc] to-[#f8fafc] py-20 md:py-32">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, #1e3a8a 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="relative z-10 container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-3 text-sm font-semibold tracking-widest text-[#dc2626] uppercase"
          >
            Our Products
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="mb-4 text-4xl font-bold text-gray-900 md:text-5xl"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-[#1e3a8a] to-[#dc2626] bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mx-auto max-w-2xl text-lg text-gray-600"
          >
            Discover our most trusted pharmaceutical products designed to improve health and
            wellbeing.
          </motion.p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
          {featured.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:border-[#1e3a8a]/20 hover:shadow-2xl">
                {/* Product Image Placeholder */}
                <div className="relative h-56 overflow-hidden bg-gradient-to-br from-[#1e3a8a]/5 to-[#dc2626]/5">
                  {/* Category Tag */}
                  <div className="absolute top-4 left-4 z-10">
                    <div className="flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1 shadow-sm backdrop-blur-sm">
                      <Tag size={12} className="text-[#dc2626]" />
                      <span className="text-xs font-semibold text-[#1e3a8a]">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  {/* Placeholder Icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#1e3a8a]/20 to-[#dc2626]/20 blur-2xl transition-all duration-500 group-hover:blur-3xl" />
                      <div className="relative rounded-2xl bg-white p-8 shadow-lg transition-transform duration-500 group-hover:scale-110">
                        <Package size={48} className="text-[#1e3a8a]" strokeWidth={1.5} />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Product Info */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-[#1e3a8a]">
                    {product.name}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-gray-600">{product.description}</p>

                  {/* Product Details */}
                  <div className="mb-4 space-y-2 border-b border-gray-100 pb-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Dosage</span>
                      <span className="font-semibold text-gray-800">{product.dosage}</span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-500">Packaging</span>
                      <span className="font-semibold text-gray-800">{product.packaging}</span>
                    </div>
                  </div>

                  {/* Learn More Link */}
                  <Link
                    href={`/products/${product.id}`}
                    className="group/link inline-flex items-center gap-1.5 text-sm font-semibold text-[#1e3a8a] transition-colors hover:text-[#dc2626]"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 text-center"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[#1e3a8a] bg-white px-8 py-4 font-semibold text-[#1e3a8a] shadow-md transition-all duration-300 hover:bg-[#1e3a8a] hover:text-white hover:shadow-lg"
          >
            View All Products
            <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
