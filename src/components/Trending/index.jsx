import MovieCard from "../MovieCard";

import "./index.css";

const Trending = () => {
  return (
    <div className="bg-stone-950 px-8">
      <h1 className="px-4 py-6 text-white text-2xl font-semibold text-center">
        Trending Movies
      </h1>

      <ul className="flex flex-wrap justify-center p-0 list-none gap-x-8 border-4 border-amber-600">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </ul>
    </div>
  );
};

export default Trending;
