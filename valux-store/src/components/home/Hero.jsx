import Button from "../common/Button";
import HeroGallery from "./HeroGallery";

function Hero({ heroImages = [], isLoading = false }) {
  return (
    <div className="container-custom pt-[30px] pb-[80px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* LEFT CONTENT */}
        <div>
          <div className="inline-block border border-white/10 rounded-full px-4 py-2 text-sm text-[#9ca3af] mb-12">
            New Season — SS25
          </div>

          <h1 className="text-6xl font-syne md:text-7xl lg:text-8xl font-extrabold leading-none tracking-tight max-w-[700px] text-[#F9FAFB]">
            <span className="relative after:content-[''] after:absolute after:-top-2 after:left-0 after:h-2 after:w-full after:bg-[#7B5EA7] after:rounded-lg">
              O
            </span>
            bjects made for rare taste.
          </h1>

          <p className="text-white/60 mt-4 max-w-xl leading-7">
            Crafted for those who value stillness over noise.
          </p>

          <div className="flex items-center gap-4 mt-10">
            <Button text="Shop Now" />
            <Button text="View Lookbook" variant="secondary" />
          </div>

          {/* STATS */}
          <div className="flex flex-wrap items-center gap-15 mt-10">
            <div>
              <h3 className="font-syne text-3xl font-semibold tracking-tight">
                4.2k+
              </h3>
              <p className="text-sm text-white/40 mt-1">products</p>
            </div>

            <div className=" border-l border-[#1F1F2E] pl-20 ">
              <h3 className="font-syne text-3xl font-semibold tracking-tight">
                98%
              </h3>
              <p className="text-sm text-white/40 mt-1">satisfaction</p>
            </div>

            <div className=" border-l border-[#1F1F2E] pl-20 ">
              <h3 className="font-syne text-3xl font-semibold tracking-tight">
                62
              </h3>
              <p className="text-sm text-white/40 mt-1">countries</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="h-[600px] rounded-[32px] bg-[#111118] border border-white/10 ">
          <HeroGallery heroImages={heroImages} isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
