"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight, Send, Code2 } from "lucide-react";

const quickLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Contact", href: "/contact" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-[#0f172a] to-[#0a0f1e] text-white">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & Description */}
          <div className="lg:col-span-1">
            <div className="mb-5">
              <Image
                src="/images/logo/bright-pharma-logo.png"
                alt="Bright Pharma"
                width={120}
                height={50}
                className="object-contain brightness-0 invert"
              />
            </div>

            <p className="mb-6 text-sm leading-relaxed text-gray-400">
              A new generation pharmaceutical company specialized in family health and nutritional
              supplements, proudly made in Egypt.
            </p>

            {/* Social Media */}
            <div className="flex items-center gap-3">
              {[
                {
                  name: "Facebook",
                  href: "#",
                  svg: (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  ),
                },
                {
                  name: "LinkedIn",
                  href: "#",
                  svg: (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  ),
                },
                {
                  name: "Instagram",
                  href: "#",
                  svg: (
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  ),
                },
              ].map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-all duration-300 hover:bg-[#dc2626]"
                >
                  {social.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors duration-300 hover:text-[#dc2626]"
                  >
                    <ArrowRight
                      size={12}
                      className="opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Contact Info</h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+201222620797"
                  className="flex items-start gap-3 text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  <Phone size={16} className="mt-0.5 shrink-0 text-[#dc2626]" />
                  <span className="text-sm">01222620797</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:brightpharma.co@gmail.com"
                  className="flex items-start gap-3 text-gray-400 transition-colors duration-300 hover:text-white"
                >
                  <Mail size={16} className="mt-0.5 shrink-0 text-[#dc2626]" />
                  <span className="text-sm break-all">brightpharma.co@gmail.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-gray-400">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-[#dc2626]" />
                  <span className="text-sm">
                    37 Mustafa Pasha St., El-Zeitoun,
                    <br />
                    East Cairo, Egypt
                  </span>
                </div>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="mb-5 text-lg font-semibold text-white">Stay Updated</h3>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates and health tips.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-gray-500 transition-colors duration-300 focus:border-[#dc2626] focus:outline-none"
              />
              <button
                type="submit"
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dc2626] text-white transition-all duration-300 hover:bg-[#ef4444]"
              >
                <Send size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar - with Developer Credit */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 py-6 md:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            {/* Copyright */}
            <p className="text-center text-xs text-gray-500 md:text-left">
              &copy; {new Date().getFullYear()} Bright Pharma. All rights reserved.
            </p>

            {/* Developer Credit - Elegant */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-2 text-xs"
            >
              <Code2 size={12} className="text-[#dc2626]" />
              <span className="text-gray-500">Designed &amp; Developed by</span>
              <a
                href="https://wa.me/201501551593"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 font-semibold text-white transition-colors duration-300 hover:text-[#dc2626]"
              >
                <span className="bg-gradient-to-r from-[#3b82f6] to-[#dc2626] bg-clip-text font-bold text-transparent">
                  JS Solutions
                </span>
                <ArrowRight
                  size={10}
                  className="text-[#dc2626] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
                />
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}
