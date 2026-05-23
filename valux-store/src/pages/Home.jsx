import Navbar from "../components/layout/Navbar";

import Hero from "../components/home/Hero";
import FeaturedSection from "../components/home/FeaturedSection";
import CategorySection from "../components/home/CategorySection";
import OfferBanner from "../components/home/OfferBanner";

import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <FeaturedSection />
      <CategorySection />
      <OfferBanner />
      <Footer />
    </>
  );
}
