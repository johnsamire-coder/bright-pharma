import HeroSection from "./components/sections/HeroSection";
import TrustBar from "./components/sections/TrustBar";
import AboutPreview from "./components/sections/AboutPreview";
import FeaturedProducts from "./components/sections/FeaturedProducts";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import Certifications from "./components/sections/Certifications";
import CallToAction from "./components/sections/CallToAction";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <AboutPreview />
      <FeaturedProducts />
      <WhyChooseUs />
      <Certifications />
      <CallToAction />
    </>
  );
}
