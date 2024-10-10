import { navLists } from "../constants";
import { appleImg, bagImg, searchImg } from "../utils";

const Navbar = () => {
  return (
    <header className="flex items-center justify-between w-full px-5 py-5 sm:px-1">
      <nav className="flex w-full screen-max-width">
        <img src={appleImg} alt="Apple Logo" width={14} height={18} />
        <div className="flex justify-center flex-1 max-sm:hidden">
          {navLists.map((navItem) => (
            <div
              key={navItem}
              className="px-5 text-sm transition-all cursor-pointer text-gray hover:text-white"
            >
              {navItem}
            </div>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
          <img src={searchImg} alt="search image" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
