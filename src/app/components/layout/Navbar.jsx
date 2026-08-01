"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { siteConfig } from "../../config/site";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 py-2 shadow-md backdrop-blur-md"
            : "bg-white/80 py-4 backdrop-blur-sm"
        }`}
      >
        <nav className="container mx-auto flex items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="z-10 flex items-center gap-2">
            <Image
              src="/images/logo/bright-pharma-logo.png"
              alt="Bright Pharma"
              width={180}
              height={60}
              priority
              className="h-12 w-auto object-contain md:h-14"
            />
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden items-center gap-8 lg:flex">
            {siteConfig.navigation.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="group relative font-semibold text-gray-700 transition-colors duration-200 hover:text-[#dc2626]"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-[#1e3a8a] to-[#dc2626] transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <div className="hidden items-center gap-4 lg:flex">
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="flex items-center gap-2 font-medium text-gray-600 transition-colors hover:text-[#1e3a8a]"
            >
              <Phone size={18} />
              <span className="text-sm">{siteConfig.contact.phone}</span>
            </a>
            <Link
              href="/contact"
              className="rounded-full bg-[#1e3a8a] px-6 py-2.5 font-semibold text-white shadow-md transition-all duration-300 hover:bg-[#dc2626] hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="z-10 p-2 text-gray-700 transition-colors hover:text-[#dc2626] lg:hidden"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white lg:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8 px-4">
              <ul className="flex flex-col items-center gap-6">
                {siteConfig.navigation.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-2xl font-bold text-gray-800 transition-colors hover:text-[#dc2626]"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                className="mt-8 flex flex-col items-center gap-4"
              >
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="flex items-center gap-2 text-gray-600 transition-colors hover:text-[#1e3a8a]"
                >
                  <Phone size={20} />
                  <span className="font-medium">{siteConfig.contact.phone}</span>
                </a>
                <Link
                  href="/contact"
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-full bg-[#1e3a8a] px-8 py-3 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#dc2626]"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
