"use client";

import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { siteConfig } from "../../config/site";

// Social Media Icons
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

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { Icon: FacebookIcon, href: siteConfig.social.facebook, label: "Facebook" },
    { Icon: TwitterIcon, href: siteConfig.social.twitter, label: "Twitter" },
    { Icon: LinkedInIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
    { Icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
  ];

  const quickLinks = siteConfig.navigation;

  const legalLinks = [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
  ];

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-gray-300">
      {/* Decorative Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-[#1e3a8a] blur-3xl" />
        <div className="absolute right-0 bottom-0 h-96 w-96 rounded-full bg-[#dc2626] blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 md:px-8">
        {/* Top Section */}
        <div className="mb-12 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Logo & About */}
          <div className="lg:col-span-1">
            <div className="mb-6 inline-block rounded-2xl bg-white p-4">
              <Image
                src="/images/logo/bright-pharma-logo.png"
                alt="Bright Pharma"
                width={180}
                height={60}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="mb-6 text-sm leading-relaxed text-gray-400">{siteConfig.description}</p>
            {/* Social Icons */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.Icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="rounded-full bg-white/10 p-2.5 text-white/70 transition-all duration-300 hover:scale-110 hover:bg-[#dc2626] hover:text-white"
                  >
                    <IconComponent size={16} />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="relative mb-6 inline-block text-lg font-bold text-white">
              Quick Links
              <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-[#1e3a8a] to-[#dc2626]" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm transition-colors hover:text-[#dc2626]"
                  >
                    <span className="h-0.5 w-0 bg-[#dc2626] transition-all duration-300 group-hover:w-2" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="relative mb-6 inline-block text-lg font-bold text-white">
              Contact Info
              <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-[#1e3a8a] to-[#dc2626]" />
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-[#dc2626]" />
                <span>{siteConfig.contact.address.full}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 flex-shrink-0 text-[#dc2626]" />
                <a
                  href={`tel:${siteConfig.contact.phone}`}
                  className="transition-colors hover:text-[#dc2626]"
                >
                  {siteConfig.contact.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="mt-0.5 flex-shrink-0 text-[#dc2626]" />
                <a
                  href={`mailto:${siteConfig.contact.email.general}`}
                  className="transition-colors hover:text-[#dc2626]"
                >
                  {siteConfig.contact.email.general}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Clock size={18} className="mt-0.5 flex-shrink-0 text-[#dc2626]" />
                <span>{siteConfig.contact.hours}</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="relative mb-6 inline-block text-lg font-bold text-white">
              Stay Updated
              <span className="absolute bottom-0 left-0 h-0.5 w-12 bg-gradient-to-r from-[#1e3a8a] to-[#dc2626]" />
            </h3>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to our newsletter for the latest updates and health tips.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 rounded-full border border-white/20 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/50 transition-colors focus:border-[#dc2626] focus:outline-none"
              />
              <button
                type="submit"
                className="group rounded-full bg-[#dc2626] p-2.5 transition-all duration-300 hover:bg-[#1e3a8a]"
                aria-label="Subscribe"
              >
                <Send
                  size={16}
                  className="text-white transition-transform group-hover:translate-x-0.5"
                />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-gray-400 md:text-left">
            © {currentYear} <span className="font-semibold text-white">{siteConfig.name}</span>. All
            rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {legalLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-xs text-gray-400 transition-colors hover:text-[#dc2626]"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
