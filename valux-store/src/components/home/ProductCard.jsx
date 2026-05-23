import { FiHeart, FiArrowRight } from "react-icons/fi";

function ProductCard({
  title,
  subtitle,
  price,
  image,
  hoverImage,
  featured = false,
}) {
  return (
    <div
      className={`
        group
        relative
        overflow-hidden
        border
        border-white/10
        bg-[#111118]
        rounded-[28px]
        hover:border-[#7B5EA7]
        hover:-translate-y-1
        transition-all
        duration-300
      `}
    >
      {/* WISHLIST */}
      <button
        className="
        absolute
        top-5
        right-5
        z-20
        w-11
        h-11
        rounded-full
        border
        border-white/10
        bg-black/10
        backdrop-blur-md
        flex
        items-center
        justify-center
        text-white/45
        hover:bg-white/10
        hover:text-white
        transition-all
      "
      >
        <FiHeart size={16} />
      </button>

      {/* IMAGE AREA */}
      <div
        className={`
          relative
          overflow-hidden
          flex
          items-center
          justify-center

          ${featured ? "h-[400px] bg-[#ECE8E1]" : "h-[190px] bg-[#F5F2EE]"}
        `}
      >
        {/* MAIN IMAGE */}
        <img
          src={image}
          alt={title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-contain
            p-6
            transition-all
            duration-700
            group-hover:scale-105
            group-hover:opacity-0
          "
        />

        {/* HOVER IMAGE */}
        <img
          src={hoverImage || image}
          alt={title}
          className="
            absolute
            inset-0
            w-full
            h-full
            object-contain
            p-6
            opacity-0
            transition-all
            duration-700
            group-hover:opacity-100
            group-hover:scale-105
          "
        />
      </div>

      {/* CONTENT */}
      <div className={featured ? "p-7" : "p-5"}>
        {featured ? (
          <>
            {/* BADGE */}
            <div
              className="
              inline-flex
              items-center
              gap-2
              px-3
              py-1.5
              rounded-full
              bg-[#A78BFA]/15
              text-[#C4B5FD]
              text-xs
              mb-5
            "
            >
              <div
                className="
                w-1.5
                h-1.5
                rounded-full
                bg-[#A78BFA]
              "
              />
              Editor’s pick
            </div>

            {/* TITLE */}
            <h3
              className="
              text-[36px]
              leading-[1.05]
              tracking-tight
              font-medium
              max-w-[520px]
            "
            >
              {title}
            </h3>

            {/* SUBTITLE */}
            <p
              className="
              mt-4
              text-[15px]
              text-white/55
              leading-7
              max-w-[420px]
            "
            >
              {subtitle}
            </p>

            {/* FOOTER */}
            <div
              className="
              flex
              items-center
              justify-between
              gap-6
              mt-8
            "
            >
              {/* LEFT */}
              <div>
                {/* PRICE */}
                <div
                  className="
                  text-[34px]
                  font-semibold
                  tracking-tight
                "
                >
                  {price}
                </div>

                {/* META */}
                <div
                  className="
                  flex
                  items-center
                  gap-2
                  mt-3
                  text-sm
                  text-white/40
                "
                >
                  <span>★ 4.8</span>

                  <span className="text-white/20">•</span>

                  <span>42 reviews</span>
                </div>
              </div>

              {/* CTA */}
              <button
                className="
                h-[52px]
                px-6
                rounded-2xl
                border
                border-white/10
                bg-white/[0.03]
                text-sm
                font-medium
                text-white/80
                hover:bg-white/[0.08]
                hover:text-white
                transition-all
                flex
                items-center
                gap-2
                shrink-0
              "
              >
                View product
                <FiArrowRight size={15} />
              </button>
            </div>
          </>
        ) : (
          <>
            {/* TITLE */}
            <h3
              className="
              text-[24px]
              font-medium
              tracking-tight
              leading-tight
            "
            >
              {title}
            </h3>

            {/* SUBTITLE */}
            <p
              className="
              mt-2
              text-sm
              text-white/45
            "
            >
              {subtitle}
            </p>

            {/* FOOTER */}
            <div
              className="
              flex
              items-center
              justify-between
              mt-6
              gap-4
            "
            >
              {/* LEFT */}
              <div>
                {/* PRICE */}
                <div
                  className="
                  text-[18px]
                  font-semibold
                "
                >
                  {price}
                </div>

                {/* META */}
                <div
                  className="
                  flex
                  items-center
                  gap-2
                  mt-3
                  text-sm
                  text-white/40
                "
                >
                  <span>★ 4.8</span>

                  <span className="text-white/20">•</span>

                  <span>42 reviews</span>
                </div>
              </div>

              {/* CTA */}
              <button
                className="
                h-[46px]
                px-5
                rounded-xl
                border
                border-white/10
                bg-white/[0.03]
                text-sm
                font-medium
                text-white/80
                hover:bg-white/[0.08]
                hover:text-white
                transition-all
                flex
                items-center
                gap-2
                shrink-0
              "
              >
                View
                <FiArrowRight size={14} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
