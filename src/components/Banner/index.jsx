import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import axios from "axios";

import { useState, useEffect } from "react";

import "./index.css";

// 1. Use Map for MovieCards with API.

// 2. Fix banner clipping Bug.

const Banner = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const url = `https://api.themoviedb.org/3/movie/now_playing`;

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

      console.log(response.data);

      setMoviesData(response.data.results);
    };

    fetchBanners();
  }, []);

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    arrows: true,
  };

  return (
    <Slider {...settings}>
      {moviesData.map((eachObj) => (
        <div className="relative h-[500px]" key={eachObj.id}>
          {/* Blurred background image. */}

          <img
            src={`https://image.tmdb.org/t/p/original/${eachObj.backdrop_path}`}
            alt="movie img"
            className="absolute inset-0 h-full w-full object-cover filter blur-md scale-110"
          />

          {/* Foreground image. */}

          <img
            src={`https://image.tmdb.org/t/p/original/${eachObj.backdrop_path}`}
            alt="movie img"
            className="relative z-10 h-full mx-auto object-contain mask-image-edges"
          />
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
