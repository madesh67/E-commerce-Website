import { useEffect, useRef, useState } from "react";
import heroImages from "../../data/heroImages";
import heroProducts from "../../data/heroProducts";
import { FiArrowRight } from "react-icons/fi";

function HeroGallery() {
  const [current, setCurrent] = useState(0);
  const activeProduct = heroProducts[current];

  // FLOATING CARD
  const [showCard, setShowCard] = useState(false);

  // SMOOTH CARD POSITION
  const [cardPosition, setCardPosition] = useState({
    x: 0,
    y: 0,
  });

  const targetPosition = useRef({
    x: 0,
    y: 0,
  });

  const animationRef = useRef();

  const containerRef = useRef(null);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // SMOOTH FLOATING ANIMATION
  useEffect(() => {
    const animate = () => {
      setCardPosition((prev) => ({
        x: prev.x + (targetPosition.current.x - prev.x) * 0.08,
        y: prev.y + (targetPosition.current.y - prev.y) * 0.08,
      }));

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(animationRef.current);
  }, []);

  // MOUSE MOVE
  const handleMouseMove = (e) => {
    const rect = containerRef.current.getBoundingClientRect();

    targetPosition.current = {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    };
  };

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setShowCard(true)}
      onMouseLeave={() => setShowCard(false)}
      onMouseMove={handleMouseMove}
      className="
        relative
        h-[620px]
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-[#0f0f13]
      "
    >
      {/* SLIDER TRACK */}
      <div
        className="
          flex
          h-full
          transition-transform
          duration-700
          ease-in-out
        "
        style={{
          transform: `translateX(-${current * 100}%)`,
        }}
      >
        {heroImages.map((image, index) => (
          <div
            key={index}
            className="
              relative
              
              min-w-full
              h-full
              overflow-hidden
              bg-[#111114]
            "
          >
            {/* CINEMATIC LIGHT */}
            <div
              className="
                absolute
                inset-0

                bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.05),transparent_65%)]
              "
            />

            {/* IMAGE */}
            <img
              src={image}
              alt="Fashion"
              className="
                absolute

                left-1/2
                bottom-0

                -translate-x-1/2

                h-[88%]
                w-auto

                object-contain

                drop-shadow-[0_40px_100px_rgba(0,0,0,0.6)]

                transition-all
                duration-700
              "
            />

            {/* DARK OVERLAY */}
            <div
              className="
                absolute
                inset-0

                bg-gradient-to-t
                from-black/10
                via-transparent
                to-transparent
              "
            />
          </div>
        ))}
      </div>

      {/* FLOATING PRODUCT CARD */}
      <div
        className={`
          absolute
          z-30

          will-change-transform

          pointer-events-none

          transition-opacity
          duration-300

          ${showCard ? "opacity-100" : "opacity-0"}
        `}
        style={{
          left: cardPosition.x - 240,
          top: cardPosition.y,
        }}
      >
        <div
          className="
            w-[240px]

            rounded-2xl
            border
            border-white/10

            bg-[#141418]/90
            backdrop-blur-xl

            p-5

            shadow-[0_25px_80px_rgba(0,0,0,0.45)]
          "
        >
          <p className="text-sm text-white/50">{activeProduct.category}</p>

          <h3
            className="
              mt-2
              text-lg
              font-semibold
              text-white
            "
          >
            {activeProduct.title}
          </h3>

          <div
            className="
              mt-4
              flex
              items-center
              justify-between
            "
          >
            <p
              className="
                text-xl
                font-semibold
                text-white
              "
            >
              {activeProduct.price}
            </p>
            View product
            <FiArrowRight size={15} />
          </div>
        </div>
      </div>

      {/* DOTS */}
      <div
        className="
          absolute
          bottom-8
          left-1/2
          -translate-x-1/2
          z-20

          flex
          items-center
          gap-3
        "
      >
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`
              rounded-full
              transition-all
              duration-500

              ${
                current === index
                  ? "w-8 h-2 bg-white"
                  : "w-2 h-2 bg-white/30 hover:bg-white/60"
              }
            `}
          />
        ))}
      </div>
    </div>
  );
}

export default HeroGallery;
