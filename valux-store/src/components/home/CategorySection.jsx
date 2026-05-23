import { useEffect, useRef, useState } from "react";

import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import SectionTitle from "../common/SectionTitle";
import CategoryCard from "./CategoryCard";

import { getHomepage } from "../../services/homeApi";

function CategorySection() {
  const scrollRef = useRef();

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function loadCategories() {
      try {
        const data = await getHomepage();

        setCategories(data.categories || []);
      } catch (err) {
        console.log(err);
      }
    }

    loadCategories();
  }, []);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -450,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 450,
      behavior: "smooth",
    });
  };

  if (!categories.length) {
    return (
      <section className="section-spacing">
        <div className="container-custom">
          <p className="text-white/40">Loading...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="section-spacing overflow-hidden">
      <div className="container-custom">
        {/* HEADER */}
        <div
          className="
          flex
          flex-col
          md:flex-row
          md:items-end
          justify-between
          gap-8
          mb-10
        "
        >
          <SectionTitle
            title="Shop by category"
            subtitle="Curated essentials designed for modern wardrobes"
          />

          <div
            className="
            flex
            items-center
            gap-3
          "
          >
            <button
              onClick={scrollLeft}
              className="
                w-12
                h-12
                rounded-2xl
                border
                border-white/10
                bg-white/[0.02]
                flex
                items-center
                justify-center
                text-white/60
                hover:bg-white/[0.05]
                hover:text-white
                transition-all
              "
            >
              <FiChevronLeft size={18} />
            </button>

            <button
              onClick={scrollRight}
              className="
                w-12
                h-12
                rounded-2xl
                bg-[#A78BFA]
                flex
                items-center
                justify-center
                text-black
                hover:opacity-90
                transition-all
              "
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ROW */}
        <div
          ref={scrollRef}
          className="
            flex
            gap-5
            overflow-x-auto
            scrollbar-hide
            scroll-smooth
            pb-2
          "
        >
          {categories.map((item, index) => (
            <CategoryCard
              key={item.id}
              item={{
                ...item,

                image: item.image_url,
              }}
              index={index}
            />
          ))}
        </div>

        {/* FOOTER */}
        <div
          className="
          flex
          items-center
          justify-between
          gap-6
          mt-8
          pt-6
          border-t
          border-white/5
        "
        >
          <p
            className="
            text-sm
            text-white/35
            leading-6
            max-w-xl
          "
          >
            Explore curated categories crafted with premium materials, timeless
            silhouettes, and modern essentials.
          </p>

          <button
            className="
            hidden
            md:flex
            items-center
            gap-2
            text-sm
            text-[#A78BFA]
            hover:text-[#C4B5FD]
            transition-all
            shrink-0
          "
          >
            Browse all categories
            <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
}

export default CategorySection;
