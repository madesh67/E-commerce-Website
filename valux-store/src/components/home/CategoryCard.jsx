import { FiArrowRight } from "react-icons/fi";

const FALLBACK_IMAGE = "/images/products/linen_trousers.png";

function CategoryCard({ item, index }) {
  return (
    <div
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
        hover:border-[#7B5EA7]
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
          loading="lazy"
          fetchPriority="low"
          onError={(event) => {
            event.currentTarget.src = FALLBACK_IMAGE;
          }}
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
              group-hover:text-[#C084FC]
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
            group-hover:bg-[#C084FC]
            group-hover:text-black
            transition-all
            shrink-0
          "
        >
          <FiArrowRight size={17} />
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;
