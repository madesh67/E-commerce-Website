import { useEffect, useState } from "react";

function OfferBanner() {
  // TIMER STATE
  const [timeLeft, setTimeLeft] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  });

  // CALCULATE TIME UNTIL MIDNIGHT
  useEffect(() => {
    const updateTimer = () => {
      const now = new Date();

      const midnight = new Date();

      midnight.setHours(24, 0, 0, 0);

      const difference = midnight - now;

      // HOURS
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

      // MINUTES
      const minutes = Math.floor((difference / (1000 * 60)) % 60);

      // SECONDS
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        hours: String(hours).padStart(2, "0"),
        minutes: String(minutes).padStart(2, "0"),
        seconds: String(seconds).padStart(2, "0"),
      });
    };

    // INITIAL CALL
    updateTimer();

    // UPDATE EVERY SECOND
    const interval = setInterval(updateTimer, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="pb-12">
      <div className="container-custom">
        <div
          className="
            relative
            overflow-hidden
            bg-[#09090F]
            border
            border-white/10
            rounded-[32px]
          "
        >
          {/* MAIN CONTENT */}
          <div
            className="
              grid
              grid-cols-1
              lg:grid-cols-[62%_38%]
            "
          >
            {/* LEFT SIDE */}
            <div
              className="
                px-8
                md:px-14
                lg:px-20
                py-10
                flex
                flex-col
                justify-center
              "
            >
              {/* BADGE */}
              <div
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  border
                  border-white/20
                  bg-white/[0.03]
                  text-sm
                  text-white/70
                  mb-8
                  w-fit
                "
              >
                <div
                  className="
                    w-2
                    h-2
                    rounded-full
                    bg-[#F59E0B]
                  "
                />
                Limited time — free shipping
              </div>

              {/* HEADING */}
              <h2
                className="
                  max-w-[620px]
                  text-[42px]
                  md:text-[58px]
                  leading-[1]
                  font-semibold
                  tracking-[-0.04em]
                "
              >
                Free shipping on
                <br />
                <span className="text-[#F59E0B]">orders over $150.</span>
              </h2>

              {/* DESCRIPTION */}
              <p
                className="
                  mt-7
                  max-w-[520px]
                  text-base
                  leading-7
                  text-white/50
                "
              >
                Automatically applied at checkout for domestic and international
                orders. Offer resets daily at midnight.
              </p>

              {/* CTA AREA */}
              <div
                className="
                  flex
                  flex-wrap
                  items-center
                  gap-4
                  mt-10
                "
              >
                {/* PRIMARY CTA */}
                <button
                  className="
                    h-[54px]
                    px-8
                    rounded-xl
                    bg-[#F59E0B]
                    text-black
                    font-medium
                    hover:opacity-90
                    transition-all
                  "
                >
                  Claim offer
                </button>

                {/* SECONDARY CTA */}
                <button
                  className="
                    h-[46px]
                    px-5
                    rounded-xl
                    border
                    border-white/10
                    text-sm
                    text-white/60
                    hover:bg-white/5
                    transition-all
                  "
                >
                  See terms
                </button>
              </div>

              {/* FEATURES */}
              <div
                className="
                  grid
                  grid-cols-2
                  md:grid-cols-4
                  gap-6
                  pt-7
                  border-t
                  border-white/5
                  mt-6
                "
              >
                <div className="flex items-start gap-3">
                  <span className="text-[#A78BFA]">✓</span>

                  <p
                    className="
                      text-sm
                      leading-5
                      text-white/60
                    "
                  >
                    Free domestic shipping
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#A78BFA]">✓</span>

                  <p
                    className="
                      text-sm
                      leading-5
                      text-white/60
                    "
                  >
                    International included
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#A78BFA]">✓</span>

                  <p
                    className="
                      text-sm
                      leading-5
                      text-white/60
                    "
                  >
                    No discount code needed
                  </p>
                </div>

                <div className="flex items-start gap-3">
                  <span className="text-[#A78BFA]">✓</span>

                  <p
                    className="
                      text-sm
                      leading-5
                      text-white/60
                    "
                  >
                    Valid on all categories
                  </p>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div
              className="
                flex
                items-center
                justify-center
                border-t
                lg:border-t-0
                lg:border-l
                border-white/10
                bg-white/[0.02]
                px-8
                py-10
              "
            >
              {/* TIMER CARD */}
              <div
                className="
                  w-full
                  max-w-[320px]
                  rounded-[28px]
                  border
                  border-white/10
                  bg-black/20
                  p-8
                  text-center
                "
              >
                {/* LABEL */}
                <p
                  className="
                    text-sm
                    tracking-[0.25em]
                    text-white/35
                    mb-7
                  "
                >
                  OFFER ENDS IN
                </p>

                {/* TIMER */}
                <div
                  className="
                    flex
                    items-center
                    justify-center
                    gap-3
                  "
                >
                  {/* HOURS */}
                  <div>
                    <h3
                      className="
                        text-[52px]
                        md:text-[64px]
                        leading-none
                        font-semibold
                        tracking-tight
                      "
                    >
                      {timeLeft.hours}
                    </h3>

                    <p
                      className="
                        text-xs
                        tracking-[0.2em]
                        text-white/40
                        mt-2
                      "
                    >
                      HRS
                    </p>
                  </div>

                  <span
                    className="
                      text-3xl
                      text-white/20
                      mb-5
                    "
                  >
                    :
                  </span>

                  {/* MINUTES */}
                  <div>
                    <h3
                      className="
                        text-[52px]
                        md:text-[64px]
                        leading-none
                        font-semibold
                        tracking-tight
                      "
                    >
                      {timeLeft.minutes}
                    </h3>

                    <p
                      className="
                        text-xs
                        tracking-[0.2em]
                        text-white/40
                        mt-2
                      "
                    >
                      MIN
                    </p>
                  </div>

                  <span
                    className="
                      text-3xl
                      text-white/20
                      mb-5
                    "
                  >
                    :
                  </span>

                  {/* SECONDS */}
                  <div>
                    <h3
                      className="
                        text-[52px]
                        md:text-[64px]
                        leading-none
                        font-semibold
                        tracking-tight
                      "
                    >
                      {timeLeft.seconds}
                    </h3>

                    <p
                      className="
                        text-xs
                        tracking-[0.2em]
                        text-white/40
                        mt-2
                      "
                    >
                      SEC
                    </p>
                  </div>
                </div>

                {/* INFO */}
                <p
                  className="
                    mt-8
                    text-sm
                    leading-6
                    text-white/40
                  "
                >
                  Free shipping automatically applies at checkout before
                  midnight.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OfferBanner;
