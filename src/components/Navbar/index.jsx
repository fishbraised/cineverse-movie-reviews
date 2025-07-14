import { Link } from "react-router-dom";

import { Menu, X } from "lucide-react";

import { useState } from "react";

import "./index.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const updateIsOpen = () => setIsOpen((prevState) => !prevState);

  return (
    <nav className="bg-stone-950 text-white px-6 py-4">
      {/* PC Nav Below */}

      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="cursor-pointer">
          <img
            className="w-28"
            src="https://res.cloudinary.com/saiuttej/image/upload/v1750187224/CineScope_Logo_bdy2bj.png"
            alt="movies-img"
          />
        </Link>

        <div className="hidden md:block space-x-6 text-lg font-medium">
          <Link
            to="/"
            className="cursor-pointer hover:text-yellow-400 transition duration-150 ease-in-out"
          >
            Movies
          </Link>
          <Link
            to="/watchlist"
            className="cursor-pointer hover:text-yellow-400 duration-150 ease-in-out"
          >
            Watchlist
          </Link>
        </div>

        <button className="md:hidden" onClick={updateIsOpen}>
          {isOpen ? (
            <X size="24" className="cursor-pointer" />
          ) : (
            <Menu size="24" className="cursor-pointer" />
          )}
        </button>
      </div>

      {/* Mobile Nav Below */}

      <div
        className={`md:hidden px-2 overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-30 mt-3" : "max-h-0"}`}
      >
        <div className="text-base font-medium space-y-2">
          <Link
            to="/"
            className="block cursor-pointer hover:text-yellow-400 duration-150 ease-in-out"
          >
            Movies
          </Link>
          <Link
            to="/watchlist"
            className="block cursor-pointer hover:text-yellow-400 duration-150 ease-in-out"
          >
            Watchlist
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
