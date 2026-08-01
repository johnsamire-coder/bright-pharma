import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Bright Pharma | Human Health Is Our Mission",
  description:
    "Bright Pharma is a leading pharmaceutical company dedicated to improving human health through innovative and reliable medical solutions.",
  keywords: [
    "Bright Pharma",
    "Pharmaceutical",
    "Medicine",
    "Healthcare",
    "Egypt Pharma",
  ],
  authors: [{ name: "Bright Pharma" }],
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased">{children}</body>
    </html>
  );
}