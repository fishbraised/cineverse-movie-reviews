import { ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import { FaStar } from "react-icons/fa";
import { FaTrash } from "react-icons/fa6";

import WatchlistContext from "../../context/WatchlistContext";

import GenreButton from "../GenreButton";

import { useContext, useEffect, useState } from "react";

import "./index.css";

const genresList = {
  28: "Action",
  12: "Adventure",
  16: "Animation",
  35: "Comedy",
  80: "Crime",
  99: "Documentary",
  18: "Drama",
  10751: "Family",
  14: "Fantasy",
  36: "History",
  27: "Horror",
  10402: "Music",
  9648: "Mystery",
  10749: "Romance",
  878: "Science Fiction",
  10770: "TV Movie",
  53: "Thriller",
  10752: "War",
  37: "Western",
};

const Watchlist = () => {
  const movieContext = useContext(WatchlistContext);

  const [movieSearch, setMovieSearch] = useState("");
  const [activeGenres, setActiveGenres] = useState(["All"]);
  const [genreSet, setGenreSet] = useState(["All"]);
  const [ratingSort, setRatingSort] = useState("");

  const deleteMovie = (event) => {
    const filteredMovies = movieContext.watchlistData.filter((eachMovie) => {
      return eachMovie.id != event.currentTarget.id;
    });

    movieContext.decideWatchlist([...filteredMovies]);
  };

  const toggleRatingSort = () => {
    if (ratingSort === "" || ratingSort === "DESC") {
      setRatingSort("ASC");

      const sortedMovies = movieContext.watchlistData.sort(
        (movieA, movieB) => movieA.vote_average - movieB.vote_average
      );

      movieContext.decideWatchlist([...sortedMovies]);
    } else {
      setRatingSort("DESC");

      const sortedMovies = movieContext.watchlistData.sort(
        (movieA, movieB) => movieB.vote_average - movieA.vote_average
      );

      movieContext.decideWatchlist([...sortedMovies]);
    }
  };

  const updateMovieSearch = (event) => {
    setMovieSearch(event.target.value);
  };

  const toggleActiveGenres = (targetContent) => {
    if (activeGenres.includes(targetContent)) {
      const filteredActiveGenres = activeGenres.filter(
        (eachGenre) => eachGenre !== targetContent
      );

      filteredActiveGenres.length === 0
        ? setActiveGenres(["All"])
        : setActiveGenres(filteredActiveGenres);
    } else {
      const filteredActiveGenres = activeGenres.filter(
        (eachGenre) => eachGenre !== "All"
      );

      targetContent !== "All"
        ? setActiveGenres((prevState) => [
            ...filteredActiveGenres,
            targetContent,
          ])
        : setActiveGenres((prevState) => [targetContent]);
    }
  };

  useEffect(() => {
    let allGenres = new Set();

    movieContext.watchlistData.forEach((eachObj) =>
      allGenres.add(genresList[eachObj.genre_ids[0]])
    );

    setGenreSet(["All", ...allGenres]);
  }, [movieContext.watchlistData]);

  return (
    <div className="flex flex-col items-center min-h-screen bg-stone-950 px-8 py-6">
      <h1 className="mb-6 text-yellow-400 text-3xl font-bold">My Watchlist</h1>
      <input
        className="w-1/3 px-4 py-1.5 mb-8 rounded-md text-gray-400 bg-stone-800 text-base"
        type="text"
        placeholder="Search for a movie..."
        onChange={updateMovieSearch}
        value={movieSearch}
      />

      <ul className="flex space-x-4 list-none p-0 mb-10">
        {genreSet.map((eachGenre) => (
          <GenreButton
            key={eachGenre}
            genreInfo={eachGenre}
            activeGenres={activeGenres}
            toggleActiveGenres={toggleActiveGenres}
          />
        ))}
      </ul>

      <table className="w-[90%] rounded-2xl text-white text-sm overflow-hidden">
        <thead className="bg-stone-800">
          <tr>
            <th className="w-1/8 py-2 font-medium">Poster</th>
            <th className="w-2/8 py-2 font-medium">Name</th>
            <th className="w-1/8 py-2 font-medium">
              <div className="flex justify-center items-center">
                Rating
                <button className="cursor-pointer" onClick={toggleRatingSort}>
                  {ratingSort === "" || ratingSort === "ASC" ? (
                    <ArrowDownWideNarrow
                      className={`mt-1 ml-1 ${ratingSort === "" ? "" : "text-yellow-400"}`}
                      size="16px"
                    />
                  ) : (
                    <ArrowUpNarrowWide
                      className="mt-1 ml-1 text-yellow-400"
                      size="16px"
                    />
                  )}
                </button>
              </div>
            </th>
            <th className="w-1/8 py-2 font-medium">Popularity</th>
            <th className="w-1/8 py-2 font-medium">Genres</th>
            <th className="w-1/8 py-2 font-medium">Action</th>
          </tr>
        </thead>

        {/* The undefined bug was previously below here, I'm not sure if it still exists. */}

        <tbody>
          {movieContext.watchlistData
            .filter((eachObj) => {
              return eachObj.title
                .toLowerCase()
                .includes(movieSearch.toLowerCase());
            })
            .filter((eachObj) => {
              if (activeGenres.includes("All")) {
                return true;
              }
              return activeGenres.includes(genresList[eachObj.genre_ids[0]]);
            })
            .map((eachObj) => {
              return (
                <tr
                  className="border-t-1 border-stone-700 bg-stone-950 text-center"
                  key={eachObj.id}
                >
                  <td className="py-4">
                    <img
                      className="inline-block w-20 h-30 object-cover"
                      src={`https://image.tmdb.org/t/p/original/${eachObj.poster_path}`}
                      alt="movie img"
                    />
                  </td>
                  <td>{eachObj.title}</td>
                  <td>
                    <div className="flex justify-center items-center">
                      <FaStar className="mr-1" color="#fbc302" size="16px" />
                      {Math.round(eachObj.vote_average)}
                    </div>
                  </td>
                  <td>{Math.round(eachObj.popularity)}</td>
                  <td>
                    {eachObj.genre_ids.map(
                      (eachGenre) => genresList[eachGenre] + " "
                    )}
                  </td>
                  <td>
                    <button
                      className="cursor-pointer"
                      onClick={deleteMovie}
                      id={eachObj.id}
                    >
                      <FaTrash color="red" size="16px" />
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default Watchlist;
