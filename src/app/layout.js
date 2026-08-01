import { Inter, Playfair_Display } from "next/font/google";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import DeveloperCredit from "./components/ui/DeveloperCredit";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Bright Pharma - Human Health Is Our Mission",
  description:
    "A new generation Egyptian pharmaceutical company specialized in family health and nutritional supplements.",
  keywords: [
    "Bright Pharma",
    "Pharmaceutical",
    "Egypt",
    "Family Health",
    "Nutritional Supplements",
    "PuraZin",
    "RafaPro-B",
    "NO-B",
    "Joy-B",
  ],
  authors: [{ name: "JS Solutions - Eng. John Samir", url: "https://wa.me/201501551593" }],
  creator: "JS Solutions - Eng. John Samir",
  publisher: "Bright Pharma",
  openGraph: {
    title: "Bright Pharma - Human Health Is Our Mission",
    description:
      "New generation pharmaceutical company for family health and nutritional supplements.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        {/* Developer Credit in HTML */}
        {/*
          ═══════════════════════════════════════════════
           🎨 Website Designed & Developed by:
           Eng. John Samir | JS Solutions
           📞 WhatsApp: +20 150 155 1593
           📧 Email: Jssolutions.eeg@gmail.com
           💼 Need a website? Let's talk!
          ═══════════════════════════════════════════════
        */}
      </head>
      <body className="antialiased">
        <DeveloperCredit />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
