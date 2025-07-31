import { FaRegBookmark } from "react-icons/fa";
import { FaBookmark } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

import WatchlistContext from "../../context/WatchlistContext";

import { useState, useContext } from "react";

import "./index.css";

const MovieCard = (props) => {
  const { cardInfo } = props;
  const { overview, poster_path, title, vote_average, release_date, id } =
    cardInfo;

  const movieContext = useContext(WatchlistContext);

  const isSaved = movieContext.watchlistData.find(
    (eachObj) => id === eachObj.id
  );

  const toggleIsSaved = () => {
    movieContext.decideWatchlist(cardInfo);
  };

  const releaseTime = new Date(release_date);
  const todayTime = new Date();

  const dayDiff = (todayTime - releaseTime) / 1000 / 60 / 60 / 24;

  const isNew = releaseTime > todayTime || (dayDiff >= 0 && dayDiff <= 3);

  return (
    <li>
      <div className="group relative h-110 w-65 mt-4 rounded-xl shadow-lg/40 shadow-yellow-400 hover:scale-105 duration-150 ease-in-out cursor-pointer">
        {/* New Tag */}
        {isNew && (
          <span className="absolute top-2 left-2 px-2 py-0.5 rounded-xs bg-yellow-400 text-xs font-semibold">
            NEW
          </span>
        )}
        {/* Bookmark Button */}
        <button
          className="absolute top-2 right-2 cursor-pointer"
          onClick={toggleIsSaved}
        >
          {isSaved ? (
            <FaBookmark color="#ffffff" size="18" />
          ) : (
            <FaRegBookmark color="#ffffff" size="18" />
          )}
        </button>
        {/* Poster Image */}
        <img
          className="h-3/4 w-full rounded-t-xl object-cover object-top"
          src={`https://image.tmdb.org/t/p/original/${poster_path}`}
          alt="movie img"
        />
        {/* Details */}
        <div className="px-4 py-2 group-hover:opacity-0 opacity-100">
          {/* Title */}
          <p className="mb-2 text-yellow-400 text-lg font-semibold">{title}</p>

          {/* Ratings & Reviews */}
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaStar color="#fbc302" size="16px" />
              <p className="ml-1 text-white text-base">{vote_average}</p>
            </div>

            <p className="text-gray-500 text-base">{release_date}</p>
          </div>
        </div>

        {/* Hidden Overview */}
        <div className="absolute bottom-0 h-1/4 py-2 group-hover:opacity-100 opacity-0 overflow-y-auto custom-scroll">
          <p className="px-2 text-white text-sm">{overview}</p>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
