import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useState, useEffect } from "react";

import "./index.css";

const Banner = () => {
  const [moviesData, setMoviesData] = useState([]);

  useEffect(() => {
    const fetchBanners = async () => {
      const url = `https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1&api_key=c1e19b6f0a8f837ae318196e19844fff`;

      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
        },
      };

      const response = await fetch(url, options);
      const data = await response.json();

      setMoviesData(data.results);
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
