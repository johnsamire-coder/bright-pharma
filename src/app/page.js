"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { siteConfig } from "./config/site";
import CountdownTimer from "./components/ui/CountdownTimer";

// Social Media Icons as SVG
const FacebookIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z" />
  </svg>
);

const TwitterIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const LinkedInIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.063 2.063 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
  </svg>
);

export default function Home() {
  // Calculate launch date: 3 days from now
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 3);

  const socialLinks = [
    { Icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
    { Icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
    { Icon: LinkedInIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { Icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* Elegant Light Background */}
      <div className="light-bg" />

      {/* Subtle Pattern Overlay */}
      <div className="pattern-overlay" />

      {/* Main Content - Perfectly Centered */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-4 py-12">
        {/* Badge - Elegant Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="group relative cursor-default">
            {/* Soft Glow */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1e3a8a]/20 via-[#dc2626]/20 to-[#1e3a8a]/20 opacity-60 blur-lg transition-opacity duration-500 group-hover:opacity-80" />

            {/* Main Badge */}
            <div className="relative flex items-center gap-3 rounded-full border border-gray-200 bg-white px-6 py-3 shadow-lg">
              {/* Sparkle Icon */}
              <div className="relative">
                <Sparkles size={18} className="text-[#dc2626]" />
              </div>

              {/* Text */}
              <span className="text-sm font-semibold tracking-wide text-[#1e3a8a] md:text-base">
                Something Great Is Coming
              </span>

              {/* Pulsing Dot */}
              <div className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#dc2626] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#dc2626]" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Logo (Original with white background - now blends perfectly) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, type: "spring" }}
          className="relative mb-10"
        >
          {/* Soft Blue Glow Behind Logo */}
          <div className="bg-gradient-radial animate-glow-pulse pointer-events-none absolute inset-0 -inset-x-16 -inset-y-8 from-[#1e3a8a]/10 via-[#dc2626]/5 to-transparent blur-2xl" />

          {/* Logo */}
          <div className="animate-float relative">
            <Image
              src="/images/logo/bright-pharma-logo.png"
              alt="Bright Pharma"
              width={400}
              height={140}
              priority
              className="h-24 w-auto object-contain md:h-32 lg:h-40"
            />
          </div>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mb-4 text-center text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl"
          style={{ fontFamily: "var(--font-playfair)" }}
        >
          <span className="bg-gradient-to-r from-[#1e3a8a] via-[#3b82f6] to-[#dc2626] bg-clip-text text-transparent">
            Launching Soon
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mb-12 max-w-2xl px-4 text-center text-base leading-relaxed text-gray-600 md:text-xl"
        >
          We are crafting an exceptional pharmaceutical experience for you.{" "}
          <span className="font-semibold text-[#dc2626]">Human Health Is Our Mission</span>
        </motion.p>

        {/* Countdown Timer - Perfectly Centered */}
        <div className="flex w-full justify-center">
          <CountdownTimer targetDate={launchDate.toISOString()} />
        </div>
      </div>

      {/* Social Links - Fixed at Very Bottom */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-3"
      >
        <p className="text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
          Follow Us
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((social) => {
            const IconComponent = social.Icon;
            return (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="rounded-full border border-gray-200 bg-white p-3 text-[#1e3a8a] shadow-md transition-all duration-300 hover:scale-110 hover:border-[#1e3a8a] hover:text-[#dc2626] hover:shadow-lg"
              >
                <IconComponent size={18} />
              </a>
            );
          })}
        </div>
        <p className="mt-1 text-[10px] text-gray-400">
          © {new Date().getFullYear()} {siteConfig.name}
        </p>
      </motion.div>
    </main>
  );
}
