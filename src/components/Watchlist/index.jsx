import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

import "./index.css";

const Watchlist = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-stone-950 px-8 py-6">
      <h1 className="mb-6 text-yellow-400 text-3xl font-bold">My Watchlist</h1>
      <input
        className="w-1/3 px-4 py-1.5 mb-8 rounded-md text-gray-400 bg-stone-800 text-base"
        type="text"
        placeholder="Search for a movie..."
      />

      <ul className="flex space-x-4 list-none p-0 mb-10">
        <li>
          <button className="px-4 py-1.5 border-1 border-yellow-400 rounded-full text-black text-sm cursor-pointer   bg-yellow-400">
            All Genres
          </button>
        </li>
        <li>
          <button className="px-4 py-1.5 border-1 border-stone-700 rounded-full text-white text-sm cursor-pointer">
            14
          </button>
        </li>
        <li>
          <button className="px-4 py-1.5 border-1 border-stone-700 rounded-full text-white text-sm cursor-pointer">
            35
          </button>
        </li>
      </ul>

      <table className="w-[90%] rounded-2xl text-white text-sm overflow-hidden">
        <thead className="bg-stone-800">
          <tr>
            <th className="w-1/8 py-2 font-medium">Poster</th>
            <th className="w-2/8 py-2 font-medium">Name</th>
            <th className="w-1/8 py-2 font-medium">
              <div className="flex justify-center items-center">
                Rating
                <button className="cursor-pointer">
                  <ArrowDownWideNarrow className="mt-1 ml-1" size="16px" />
                </button>
              </div>
            </th>
            <th className="w-1/8 py-2 font-medium">Popularity</th>
            <th className="w-1/8 py-2 font-medium">Genres</th>
            <th className="w-1/8 py-2 font-medium">Action</th>
          </tr>
        </thead>

        <tbody>
          <tr className="border-t-1 border-stone-700 bg-stone-950 text-center">
            <td className="py-4">
              <img
                className="inline-block w-20 h-30 object-cover"
                src="https://image.tmdb.org/t/p/original//ktqPs5QyuF8SpKnipvVHb3fwD8d.jpg"
                alt="movie img"
              />
            </td>
            <td>Barbie</td>
            <td>
              <div className="flex justify-center items-center">
                <FaStar className="mr-1" color="#fbc302" size="16px" /> 6.9
              </div>
            </td>
            <td>1800</td>
            <td>35, 14</td>
            <td>
              <button className="cursor-pointer">
                <FaTrash color="red" size="16px" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
