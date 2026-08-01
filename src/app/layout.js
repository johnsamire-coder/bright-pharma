import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: {
    default: "Bright Pharma | Human Health Is Our Mission",
    template: "%s | Bright Pharma",
  },
  description:
    "Bright Pharma is a leading pharmaceutical company dedicated to improving human health through innovative and reliable medical solutions.",
  keywords: [
    "Bright Pharma",
    "Pharmaceutical",
    "Medicine",
    "Healthcare",
    "Egypt Pharma",
    "Medical Solutions",
    "Human Health",
    "Drugs",
    "Vitamins",
    "Antibiotics",
  ],
  authors: [{ name: "Bright Pharma" }],
  creator: "Bright Pharma",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://brightpharma.com",
    title: "Bright Pharma | Human Health Is Our Mission",
    description: "Leading pharmaceutical company dedicated to improving human health.",
    siteName: "Bright Pharma",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bright Pharma | Human Health Is Our Mission",
    description: "Leading pharmaceutical company dedicated to improving human health.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport = {
  themeColor: "#1e3a8a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="flex min-h-screen flex-col bg-white antialiased">
        <Navbar />
        <main className="flex-1 pt-20 lg:pt-24">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
