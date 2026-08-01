"use client";

import { useEffect } from "react";

export default function DeveloperCredit() {
  useEffect(() => {
    const styles = {
      title: "font-size: 20px; font-weight: bold; color: #dc2626; text-shadow: 2px 2px 0 #1e3a8a;",
      subtitle: "font-size: 14px; color: #3b82f6; font-weight: bold;",
      text: "font-size: 12px; color: #64748b;",
      highlight: "font-size: 13px; color: #dc2626; font-weight: bold;",
      link: "font-size: 12px; color: #1e3a8a; font-weight: bold; text-decoration: underline;",
      box: "font-size: 11px; color: #94a3b8; font-family: monospace;",
    };

    console.log("%c╔═══════════════════════════════════════════════╗", styles.box);
    console.log("%c🚀 Website Crafted with Passion", styles.title);
    console.log("%c╚═══════════════════════════════════════════════╝", styles.box);
    console.log(" ");
    console.log("%c💎 Designed & Developed by:", styles.subtitle);
    console.log("%c   Eng. John Samir", styles.highlight);
    console.log("%c   JS Solutions", styles.highlight);
    console.log(" ");
    console.log("%c📞 Contact:", styles.subtitle);
    console.log("%c   WhatsApp/Phone: +20 150 155 1593", styles.text);
    console.log("%c   Email: Jssolutions.eeg@gmail.com", styles.text);
    console.log(" ");
    console.log("%c🎨 Tech Stack:", styles.subtitle);
    console.log("%c   Next.js 16 • React 19 • Tailwind CSS v4 • Framer Motion", styles.text);
    console.log(" ");
    console.log("%c💼 Need a professional website?", styles.subtitle);
    console.log("%c   Let's build something amazing together!", styles.highlight);
    console.log("%c   👉 wa.me/201501551593", styles.link);
    console.log(" ");
    console.log("%c───────────────────────────────────────────────", styles.box);
  }, []);

  return null;
}
