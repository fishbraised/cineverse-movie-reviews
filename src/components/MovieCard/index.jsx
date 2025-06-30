import { FaStar } from "react-icons/fa";

import "./index.css";

const MovieCard = () => {
  return (
    <li className="">
      <div className="w-fit mt-4 rounded-xl shadow-lg/40 shadow-yellow-400">
        <img
          src="https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg"
          alt="movie img"
          className="h-70 w-65 rounded-t-xl object-cover object-bottom"
        />

        <div className="p-4">
          <p className="mb-2 text-yellow-400 text-lg font-semibold">Joker</p>

          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <FaStar color="#fbc302" size="16px" />
              <p className="ml-1 text-white text-base">4.5</p>
            </div>

            <p className="text-gray-500 text-base">4th July</p>
          </div>
        </div>
      </div>
    </li>
  );
};

export default MovieCard;
