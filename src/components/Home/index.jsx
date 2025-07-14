import Banner from "../Banner";
import MovieCard from "../MovieCard";
import Pagination from "../Pagination";

import axios from "axios";

import { TailSpin } from "react-loader-spinner";

import { useState, useEffect } from "react";

import "./index.css";

const apiConstants = {
  initial: "INITIAL",
  success: "SUCCESS",
  failure: "FAILURE",
  loading: "LOADING",
};

const Home = () => {
  const [movieCardsData, setMovieCardsData] = useState([]);
  const [apiStatus, setApiStatus] = useState(apiConstants.initial);
  const [page, setPage] = useState(1);

  const handleNextPage = () => setPage((prevState) => prevState + 1);

  const handlePrevPage = () =>
    setPage((prevState) => Math.max(1, prevState - 1));

  const successView = () => {
    return (
      <ul className="flex flex-wrap justify-center p-0 list-none gap-x-12 gap-y-6">
        {movieCardsData.map((eachObj) => (
          <MovieCard key={eachObj.id} cardInfo={eachObj} />
        ))}
      </ul>
    );
  };

  const failureView = () => {
    return (
      <div className="flex flex-col items-center bg-stone-950 p-8 pb-12">
        <img
          className="w-38"
          src="https://res.cloudinary.com/dkoqbt4pc/image/upload/v1742306194/Nxt%20Watch/error-picture.png"
          alt="error img"
        />
        <p className="text-white text-xl">
          A failure has occured. Please try again.
        </p>
      </div>
    );
  };

  const loadingView = () => {
    return (
      <div className="flex justify-center bg-stone-950 p-8 pb-12">
        <TailSpin
          visible={true}
          height="112"
          width="112"
          color="oklch(85.2% 0.199 91.936)"
          ariaLabel="tail-spin-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  };

  const renderView = () => {
    switch (apiStatus) {
      case apiConstants.success:
        return successView();
      case apiConstants.failure:
        return failureView();
      case apiConstants.loading:
        return loadingView();
    }
  };

  useEffect(() => {
    setApiStatus(apiConstants.loading);

    const fetchMovieCards = async () => {
      try {
        const url = `https://api.themoviedb.org/3/movie/now_playing`;

        // Question: Why can I fetch the MovieCards even if I remove the api_key and Authorization?

        const response = await axios.get(url, {
          params: {
            language: "en-US",
            page: 1,
            // api_key: "c1e19b6f0a8f837ae318196e19844fff",
          },
          headers: {
            accept: "application/json",
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjMWUxOWI2ZjBhOGY4MzdhZTMxODE5NmUxOTg0NGZmZiIsIm5iZiI6MTc1MTI4MTEzMS42ODksInN1YiI6IjY4NjI2ZGViNzdhMGQ0Y2E0YTdiNGNkYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.nLqvKkx5xOyJOoAX6qitvEZrLJ4hRvBW-bXmS6PG0Ys`,
          },
        });

        setMovieCardsData(response.data.results);
        setApiStatus(apiConstants.success);
      } catch {
        setApiStatus(apiConstants.failure);
      }
    };

    fetchMovieCards();
  }, [page]);

  return (
    <>
      <Banner />

      <div className="min-h-screen bg-stone-950 px-8">
        <h1 className="px-4 py-6 text-white text-2xl font-semibold text-center">
          Trending Movies
        </h1>

        {renderView()}

        <Pagination
          handlePrevPage={handlePrevPage}
          handleNextPage={handleNextPage}
          page={page}
        />
      </div>
    </>
  );
};

export default Home;
