import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";

import Hero from "../components/home/Hero";
import FeaturedSection from "../components/home/FeaturedSection";
import CategorySection from "../components/home/CategorySection";
import OfferBanner from "../components/home/OfferBanner";

import Footer from "../components/layout/Footer";
import { getHomepage } from "../services/homeApi";

export default function Home() {
  const [homepage, setHomepage] = useState({
    hero: [],
    featured: [],
    categories: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;

    async function loadHomepage() {
      try {
        const data = await getHomepage();

        if (!isMounted) return;

        setHomepage({
          hero: Array.isArray(data.hero) ? data.hero : [],
          featured: Array.isArray(data.featured) ? data.featured : [],
          categories: Array.isArray(data.categories) ? data.categories : [],
        });
      } catch (err) {
        console.error(err);
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    }

    loadHomepage();

    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero heroImages={homepage.hero} isLoading={isLoading} />
      <FeaturedSection
        featuredProducts={homepage.featured}
        isLoading={isLoading}
      />
      <CategorySection categories={homepage.categories} isLoading={isLoading} />
      <OfferBanner />
      <Footer />
    </>
  );
}
