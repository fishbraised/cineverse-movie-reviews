// import { Link } from "react-router-dom";

import "./index.css";

import { Menu } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-stone-900 text-white px-6 py-4">
      {/* PC Nav Below */}

      <div className="container mx-auto flex justify-between items-center">
        <div>
          <img
            src="https://res.cloudinary.com/saiuttej/image/upload/v1750187224/CineScope_Logo_bdy2bj.png"
            alt="movies-img"
            className="w-28"
          />
        </div>

        <div className="hidden md:block space-x-6 text-lg font-medium">
          <a
            to="/movies"
            className="cursor-pointer hover:text-yellow-400 transition duration-150 ease-in-out"
          >
            Movies
          </a>
          <a
            to="/watchlist"
            className="cursor-pointer hover:text-yellow-400 transition duration-150 ease-in-out"
          >
            Watchlist
          </a>
        </div>

        <div className="md:hidden">
          <Menu size="24" className="cursor-pointer" />
        </div>
      </div>

      {/* Mobile Nav Below */}

      <div className="md:hidden mt-4 px-2">
        <div className="text-base font-medium space-y-2">
          <a
            to="/movies"
            className="block cursor-pointer hover:text-yellow-400 transition duration-150 ease-in-out"
          >
            Movies
          </a>
          <a
            to="/watchlist"
            className="block cursor-pointer hover:text-yellow-400 transition duration-150 ease-in-out"
          >
            Watchlist
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
