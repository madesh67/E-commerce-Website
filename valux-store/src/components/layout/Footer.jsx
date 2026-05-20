import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";

function Footer() {
  return (
    <footer
      className="
      border-t
      border-white/10
      mt-24
    "
    >
      <div className="container-custom">
        {/* TOP SECTION */}
        <div
          className="
          py-20
          grid
          grid-cols-1
          lg:grid-cols-2
          gap-16
          border-b
          border-white/10
        "
        >
          {/* LEFT */}
          <div>
            <div
              className="
              text-3xl
              font-bold
              tracking-[0.3em]
            "
            >
              VALUX
            </div>

            <h2
              className="
              text-4xl
              md:text-5xl
              font-semibold
              leading-tight
              mt-8
              max-w-xl
            "
            >
              Join the private list for early releases.
            </h2>

            <p
              className="
              text-white/50
              mt-6
              max-w-md
              leading-7
            "
            >
              Editorial drops, limited collections, and members-only offers
              directly to your inbox.
            </p>
          </div>

          {/* RIGHT */}
          <div
            className="
            flex
            items-center
            lg:justify-end
          "
          >
            <div className="w-full max-w-xl">
              <div
                className="
                flex
                flex-col
                sm:flex-row
                gap-4
              "
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="
                    flex-1
                    h-14
                    rounded-xl
                    bg-white/[0.03]
                    border
                    border-white/10
                    px-5
                    outline-none
                    text-white
                    placeholder:text-white/30
                    focus:border-[#A78BFA]
                    transition-all
                  "
                />

                <button
                  className="
                  h-14
                  px-8
                  rounded-xl
                  bg-[#A78BFA]
                  hover:bg-[#9274f5]
                  transition-all
                  font-medium
                "
                >
                  Subscribe
                </button>
              </div>

              <p
                className="
                text-xs
                text-white/30
                mt-4
              "
              >
                By subscribing, you agree to our privacy policy.
              </p>
            </div>
          </div>
        </div>

        {/* MIDDLE LINKS */}
        <div
          className="
          py-20
          grid
          grid-cols-2
          md:grid-cols-4
          gap-12
          border-b
          border-white/10
        "
        >
          {/* COLUMN 1 */}
          <div>
            <h3
              className="
              text-sm
              font-medium
              mb-6
            "
            >
              Shop
            </h3>

            <div
              className="
              flex
              flex-col
              gap-4
              text-white/50
              text-sm
            "
            >
              <a href="#">New arrivals</a>
              <a href="#">Outerwear</a>
              <a href="#">Accessories</a>
              <a href="#">Shoes</a>
            </div>
          </div>

          {/* COLUMN 2 */}
          <div>
            <h3
              className="
              text-sm
              font-medium
              mb-6
            "
            >
              Company
            </h3>

            <div
              className="
              flex
              flex-col
              gap-4
              text-white/50
              text-sm
            "
            >
              <a href="#">About</a>
              <a href="#">Journal</a>
              <a href="#">Careers</a>
              <a href="#">Press</a>
            </div>
          </div>

          {/* COLUMN 3 */}
          <div>
            <h3
              className="
              text-sm
              font-medium
              mb-6
            "
            >
              Support
            </h3>

            <div
              className="
              flex
              flex-col
              gap-4
              text-white/50
              text-sm
            "
            >
              <a href="#">Shipping</a>
              <a href="#">Returns</a>
              <a href="#">FAQ</a>
              <a href="#">Contact</a>
            </div>
          </div>

          {/* COLUMN 4 */}
          <div>
            <h3
              className="
              text-sm
              font-medium
              mb-6
            "
            >
              Legal
            </h3>

            <div
              className="
              flex
              flex-col
              gap-4
              text-white/50
              text-sm
            "
            >
              <a href="#">Privacy policy</a>
              <a href="#">Terms</a>
              <a href="#">Cookies</a>
              <a href="#">Licenses</a>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
          py-8
          flex
          flex-col
          md:flex-row
          gap-6
          items-center
          justify-between
        "
        >
          <p
            className="
            text-sm
            text-white/30
          "
          >
            © 2026 VALUX. All rights reserved.
          </p>

          {/* SOCIALS */}
          <div
            className="
            flex
            items-center
            gap-4
          "
          >
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
              text-white/50
              hover:bg-white/5
              hover:text-white
              transition-all
            "
            >
              <FiInstagram />
            </button>

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
              text-white/50
              hover:bg-white/5
              hover:text-white
              transition-all
            "
            >
              <FiTwitter />
            </button>

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
              text-white/50
              hover:bg-white/5
              hover:text-white
              transition-all
            "
            >
              <FiYoutube />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
