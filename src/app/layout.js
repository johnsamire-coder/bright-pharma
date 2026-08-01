import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

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
  title: "Bright Pharma | Human Health Is Our Mission",
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
  themeColor: "#0a0e1a",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
