import Button from "../common/Button";

function Navbar() {
  return (
    <header className="border-b border-[#1F1F2E]">
      <div className="container-custom h-[75px] flex items-center justify-between">
        {/* LOGO */}
        <div>
          <h1 className="text-[20px] font-syne font-extrabold tracking-[0.12em] text-[#f9fafb]">
            VALUX
          </h1>
        </div>

        {/* NAV LINKS */}
        <nav className="hidden md:flex items-center gap-10 text-sm text-white/70">
          <a href="#">Shop</a>
          <a href="#">Collections</a>
          <a href="#">Editorial</a>
          <a href="#">About</a>
        </nav>

        {/* ACTIONS */}
        <div className="flex items-center gap-4">
          <Button
            text="Search"
            variant="secondary"
            classes="px-6 py-2 rounded-[4px]"
          />
          <Button
            variant="secondary"
            text="A"
            classes="px-4 py-2 rounded-[100%]"
          />
          <Button text="Cart (0)" classes="px-6 py-2 rounded-[4px]" />
        </div>
      </div>
    </header>
  );
}

export default Navbar;
