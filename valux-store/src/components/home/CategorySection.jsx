import { useRef } from "react";
import { FiArrowRight, FiChevronLeft, FiChevronRight } from "react-icons/fi";

import SectionTitle from "../common/SectionTitle";

import { categories } from "../../data/categories";

function CategorySection() {
  const scrollRef = useRef();

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
          {/* TITLE */}
          <SectionTitle
            title="Shop by category"
            subtitle="Curated essentials designed for modern wardrobes"
          />

          {/* CONTROLS */}
          <div
            className="
            flex
            items-center
            gap-3
          "
          >
            {/* LEFT */}
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

            {/* RIGHT */}
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

        {/* CATEGORY ROW */}
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
            <div
              key={index}
              className="
                group
                min-w-[280px]
                max-w-[280px]
                rounded-[30px]
                overflow-hidden
                border
                border-white/10
                bg-white/[0.03]
                hover:bg-white/[0.05]
                hover:-translate-y-1
                transition-all
                duration-300
              "
            >
              {/* IMAGE */}
              <div
                className="
                relative
                h-[320px]
                overflow-hidden
                bg-[#ECE8E1]
              "
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* OVERLAY */}
                <div
                  className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/30
                  via-transparent
                  to-transparent
                  opacity-0
                  group-hover:opacity-100
                  transition-all
                "
                />

                {/* CATEGORY NUMBER */}
                <div
                  className="
                  absolute
                  top-5
                  left-5
                  text-[42px]
                  leading-none
                  font-semibold
                  tracking-[-0.05em]
                  text-white/15
                "
                >
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* CONTENT */}
              <div
                className="
                flex
                items-center
                justify-between
                gap-4
                p-6
              "
              >
                {/* LEFT */}
                <div>
                  <h3
                    className="
                    text-[30px]
                    leading-none
                    font-medium
                    tracking-tight
                  "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    mt-3
                    text-sm
                    text-white/40
                  "
                  >
                    {item.count} pieces
                  </p>
                </div>

                {/* CTA */}
                <button
                  className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white/60
                  group-hover:bg-white
                  group-hover:text-black
                  transition-all
                  shrink-0
                "
                >
                  <FiArrowRight size={17} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM INFO */}
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
          {/* LEFT */}
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

          {/* RIGHT */}
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
