import SectionTitle from "../common/SectionTitle";
import ProductCard from "./ProductCard";

import { featuredProducts } from "../../data/products";

function FeaturedSection() {
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
          {/* LEFT FEATURED */}
          <ProductCard
            title={featuredItem.title}
            subtitle={featuredItem.subtitle}
            price={featuredItem.price}
            image={featuredItem.image}
            hoverImage={featuredItem.hoverImage}
            featured={true}
          />

          {/* RIGHT GRID */}
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
                image={product.image}
                hoverImage={product.hoverImage}
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
          <button
            className="
            h-[54px]
            px-8
            rounded-2xl
            border
            border-white/10
            bg-white/[0.02]
            text-white/70
            hover:bg-white/[0.05]
            hover:text-white
            transition-all
          "
          >
            View all products
          </button>
        </div>
      </div>
    </section>
  );
}

export default FeaturedSection;
