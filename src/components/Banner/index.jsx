import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./index.css";

import { FaStar } from "react-icons/fa";

const Banner = () => {
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
      <div className="relative h-[500px]">
        {/* Blurred background image. */}

        <img
          src="https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg"
          alt="movie img"
          className="absolute inset-0 h-full w-full object-cover filter blur-md scale-110"
        />

        {/* Foreground image. */}

        <img
          src="https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg"
          alt="movie img"
          className="relative z-10 h-full w-full object-contain mask-image-edges"
        />
      </div>

      <div>
        <img
          src="https://image.tmdb.org/t/p/original/6WqqEjiycNvDLjbEClM1zCwIbDD.jpg"
          alt="movie img"
        />
      </div>

      <div>
        <img
          src="https://image.tmdb.org/t/p/original/l3ycQYwWmbz7p8otwbomFDXIEhn.jpg"
          alt="movie img"
        />
      </div>
    </Slider>
  );
};

export default Banner;

// <div className="flex items-end h-80 p-10 bg-[#00000090] bg-blend-overlay bg-[url('https://plus.unsplash.com/premium_photo-1661675440353-6a6019c95bc7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW92aWV8ZW58MHx8MHx8fDA%3D')] bg-cover">
//   <div>
//     <h1 className="text-red-600 font-bold text-4xl mb-4">
//       KPop Demon Hunters
//     </h1>

//     <div className="flex items-center mb-2">
//       <h2 className="text-yellow-300 font-bold text-3xl mr-3">5.583</h2>
//       <FaStar className="text-yellow-300 font-bold text-3xl" />
//     </div>

//     <p className="text-white text-md lg:w-2/3">
//       When K-pop superstars Rumi, Mira and Zoey aren't selling out
//       stadiums, they're using their secret powers to protect their fans
//       from supernatural threats.
//     </p>
//   </div>
// </div>
