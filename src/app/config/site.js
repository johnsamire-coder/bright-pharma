/**
 * Bright Pharma - Site Configuration
 * ✅ CLIENT APPROVED DATA
 */

export const siteConfig = {
  // Company Info
  name: "Bright Pharma",
  slogan: "Human Health Is Our Mission",
  description:
    "A new generation pharmaceutical company specialized in family health and nutritional supplements, proudly made in Egypt.",

  // Contact Info (REAL DATA)
  contact: {
    phone: "01222620797",
    email: "brightpharma.co@gmail.com",
    address: "37 Mustafa Pasha St., El-Zeitoun, East Cairo, Egypt",
    addressAr: "37 مصطفى باشا - الزيتون الشرقية - القاهرة",
  },

  // Social Media (update when available)
  social: {
    facebook: "#",
    twitter: "#",
    linkedin: "#",
    instagram: "#",
  },

  // Trust Bar Stats (REALISTIC - Smart Mix)
  stats: [
    {
      value: "6+",
      label: "Innovative Products",
      icon: "pill",
    },
    {
      value: "100%",
      label: "Quality Assured",
      icon: "shield",
    },
    {
      value: "GMP",
      label: "Certified Standards",
      icon: "award",
    },
    {
      value: "🇪🇬",
      label: "Made in Egypt",
      icon: "flag",
    },
  ],

  // Products (REAL DATA)
  products: [
    {
      id: "purazin",
      name: "PuraZin",
      category: "Adult Supplements",
      categoryColor: "blue",
      shortDesc: "Complete nutritional supplement with Bovine Colostrum, essential Vitamins & Zinc",
      description:
        "PuraZin is a premium nutritional supplement combining the power of Bovine Colostrum with essential vitamins and zinc to support immunity, energy, and overall wellness.",
      activeIngredients: "Bovine Colostrum, Vitamins Complex, Zinc",
      usage: "Immune support, Energy boost, General wellness",
      image: "/images/products/purazin.jpeg",
      badge: "Premium",
      badgeColor: "purple",
    },
    {
      id: "rafapro-b",
      name: "RafaPro-B",
      category: "Respiratory Care",
      categoryColor: "blue",
      shortDesc: "Family respiratory support syrup for all ages",
      description:
        "RafaPro-B is a carefully formulated syrup designed to support respiratory health for the whole family, providing relief and comfort during seasonal changes.",
      activeIngredients: "Natural respiratory support blend",
      usage: "Respiratory health, Seasonal support, Family care",
      image: "/images/products/rafapro-b.jpeg",
      badge: "Family",
      badgeColor: "blue",
    },
    {
      id: "no-b",
      name: "NO-B",
      category: "Digestive Health",
      categoryColor: "green",
      shortDesc: "Sachets for gut health and digestive comfort",
      description:
        "NO-B sachets are specially formulated to support gut health and digestive comfort, providing a gentle and effective solution for digestive wellness.",
      activeIngredients: "Probiotic blend, Digestive enzymes",
      usage: "Gut health, Digestive support, Microbiome balance",
      image: "/images/products/no-b.jpeg",
      badge: "Digestive",
      badgeColor: "green",
    },
    {
      id: "joy-b",
      name: "Joy-B Cream",
      category: "Kids Care",
      categoryColor: "yellow",
      shortDesc: "Soothing cream for sensitive baby & kids skin",
      description:
        "Joy-B Cream is a gentle, soothing cream specially formulated for babies and children with sensitive skin, providing comfort and protection with every application.",
      activeIngredients: "Natural soothing agents, Skin protectants",
      usage: "Baby skin care, Sensitive skin, Daily moisturizing",
      image: "/images/products/joy-b.jpeg",
      badge: "Kids",
      badgeColor: "yellow",
    },
  ],

  // Why Choose Us (REALISTIC)
  whyChooseUs: [
    {
      icon: "heart",
      title: "Family Health Focus",
      description: "Specialized in comprehensive family health solutions — from infants to adults.",
    },
    {
      icon: "pill",
      title: "Nutritional Supplements",
      description:
        "Focused on high-quality nutritional supplements that support everyday wellness.",
    },
    {
      icon: "shield",
      title: "Quality Standards",
      description:
        "Every product meets strict GMP quality standards for your safety and peace of mind.",
    },
    {
      icon: "flag",
      title: "Made in Egypt",
      description: "Proudly Egyptian — locally produced with international quality and expertise.",
    },
    {
      icon: "leaf",
      title: "Continuous Innovation",
      description:
        "Always developing new solutions to meet the evolving health needs of Egyptian families.",
    },
    {
      icon: "users",
      title: "Dedicated Support",
      description: "Our team is always ready to help pharmacies and healthcare providers.",
    },
  ],

  // Certifications (REALISTIC)
  certifications: [
    { name: "GMP Certified", icon: "award", desc: "Good Manufacturing Practice" },
    { name: "Made in Egypt", icon: "flag", desc: "Proudly Local Production" },
    { name: "Quality Assured", icon: "shield", desc: "Strict Quality Control" },
    { name: "Family Safe", icon: "heart", desc: "Safe for All Ages" },
  ],
};

export default siteConfig;
