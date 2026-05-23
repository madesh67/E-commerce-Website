import { useEffect, useState } from "react";

import SectionTitle from "../common/SectionTitle";
import ProductCard from "./ProductCard";

import Button from "../common/Button";

import { getHomepage } from "../../services/homeApi";

function FeaturedSection() {
  const [featuredProducts, setFeaturedProducts] = useState([]);

  // LOAD DATABASE
  useEffect(() => {
    async function loadProducts() {
      try {
        const data = await getHomepage();

        setFeaturedProducts(data.featured || []);
      } catch (err) {
        console.log(err);
      }
    }

    loadProducts();
  }, []);

  if (!featuredProducts.length) {
    return (
      <section className="section-spacing">
        <div className="container-custom">
          <p className="text-white/40">Loading...</p>
        </div>
      </section>
    );
  }

  const featuredItem = featuredProducts.find((item) => item.featured);

  const regularItems = featuredProducts.filter((item) => !item.featured);

  return (
    <section className="section-spacing">
      <div className="container-custom">
        {/* HEADER */}
        <div
          className="
            flex
            items-end
            justify-between
            mb-12
          "
        >
          <SectionTitle
            title="Featured this week"
            subtitle="Curated essentials designed for timeless wardrobes."
          />

          <button
            className="
              text-sm
              text-[#A78BFA]

              hover:text-[#C4B5FD]

              transition-all
            "
          >
            View all →
          </button>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-[1.08fr_0.92fr]
            gap-6
            items-stretch
          "
        >
          {/* FEATURED */}
          {featuredItem && (
            <ProductCard
              title={featuredItem.title}
              subtitle={featuredItem.subtitle}
              price={featuredItem.price}
              image={featuredItem.image_url}
              hoverImage={featuredItem.hover_image}
              featured={true}
            />
          )}

          {/* GRID */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-6
            "
          >
            {regularItems.map((product) => (
              <ProductCard
                key={product.id}
                title={product.title}
                subtitle={product.subtitle}
                price={product.price}
                image={product.image_url}
                hoverImage={product.hover_image}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div
          className="
            flex
            justify-center
            mt-10
          "
        >
          <Button text="View All Products" variant="secondary" />
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
