import { useState } from "react";

import "./index.css";

const GenreButton = (props) => {
  const { genreInfo, activeGenres, toggleActiveGenres } = props;

  const onClickGenreButton = (event) => {
    toggleActiveGenres(event.target.textContent);
  };

  return (
    <li>
      <button
        className={`px-4 py-1.5 border-1  rounded-full text-sm cursor-pointer ${activeGenres.includes(genreInfo) ? "border-yellow-400 text-black bg-yellow-400" : "border-stone-700 text-white"} `}
        onClick={onClickGenreButton}
      >
        {genreInfo}
      </button>
    </li>
  );
};

export default GenreButton;
