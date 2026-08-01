// Bright Pharma - Project Status Script
import { readFileSync, existsSync } from "fs";
import { execSync } from "child_process";

console.log("");
console.log("=============================================");
console.log("   Bright Pharma - Project Status");
console.log("=============================================");
console.log("");

// Package info
const pkg = JSON.parse(readFileSync("package.json", "utf8"));
console.log(`📦 Project: ${pkg.name} v${pkg.version}`);
console.log("");

// Git info
try {
  const branch = execSync("git branch --show-current", { encoding: "utf8" }).trim();
  const lastCommit = execSync("git log --oneline -1", { encoding: "utf8" }).trim();
  const status = execSync("git status --short", { encoding: "utf8" }).trim();

  console.log("🌿 Git Status:");
  console.log(`   Branch:      ${branch}`);
  console.log(`   Last Commit: ${lastCommit}`);
  console.log(`   Changes:     ${status ? status : "Clean (no changes)"}`);
  console.log("");
} catch {
  console.log("⚠️  Git info not available");
}

// Key files check
const keyFiles = [
  { path: "src/app/page.js", label: "Home Page" },
  { path: "src/app/layout.js", label: "Root Layout" },
  { path: "src/app/globals.css", label: "Global Styles" },
  { path: "src/app/config/site.js", label: "Site Config" },
  { path: "src/app/components/layout/Navbar.jsx", label: "Navbar" },
  { path: "src/app/components/layout/Footer.jsx", label: "Footer" },
  { path: "src/app/components/sections/HeroSection.jsx", label: "Hero Section" },
  { path: "src/app/components/sections/TrustBar.jsx", label: "Trust Bar" },
  { path: "src/app/components/sections/AboutPreview.jsx", label: "About Preview" },
  { path: "src/app/components/sections/FeaturedProducts.jsx", label: "Featured Products" },
  { path: "src/app/components/sections/WhyChooseUs.jsx", label: "Why Choose Us" },
  { path: "src/app/components/sections/Certifications.jsx", label: "Certifications" },
  { path: "src/app/components/sections/CallToAction.jsx", label: "Call To Action" },
];

console.log("📁 Components Status:");
let allGood = true;
for (const file of keyFiles) {
  const exists = existsSync(file.path);
  if (exists) {
    console.log(`   ✅ ${file.label}`);
  } else {
    console.log(`   ❌ ${file.label} - MISSING`);
    allGood = false;
  }
}
console.log("");

// Products images check
const productImages = [
  "public/images/products/purazin.jpeg",
  "public/images/products/rafapro-b.jpeg",
  "public/images/products/no-b.jpeg",
  "public/images/products/joy-b.jpeg",
];

console.log("🖼️  Product Images:");
for (const img of productImages) {
  const exists = existsSync(img);
  const name = img.split("/").pop();
  console.log(`   ${exists ? "✅" : "❌"} ${name}`);
  if (!exists) allGood = false;
}
console.log("");

// Summary
console.log("=============================================");
if (allGood) {
  console.log("✅ All systems GO! Project is complete.");
} else {
  console.log("⚠️  Some files are missing. Check above.");
}
console.log("=============================================");
console.log("");
console.log("🌐 Local Dev:  http://localhost:3000");
console.log("📦 GitHub:     https://github.com/johnsamire-coder/bright-pharma");
console.log("");
