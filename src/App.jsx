import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Watchlist from "./components/Watchlist";

import WatchlistContext from "./context/WatchlistContext";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";

const App = () => {
  const [watchlistData, setWatchlist] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem("watchlistData");

    if (savedData) {
      setWatchlist(JSON.parse(savedData));
    }
  }, []);

  const decideWatchlist = (watchlistItem) => {
    if (watchlistItem.length + 1) {
      console.log("update");
      updateWatchlist(watchlistItem);
    } else {
      console.log("toggle");
      toggleWatchlist(watchlistItem);
    }
  };

  const updateWatchlist = (movieArr) => {
    localStorage.setItem("watchlistData", JSON.stringify(movieArr));
    setWatchlist(movieArr);
  };

  const toggleWatchlist = (movieObj) => {
    if (watchlistData.find((eachObj) => eachObj.id === movieObj.id)) {
      const filteredData = watchlistData.filter((eachObj) => {
        console.log("filterData: ", eachObj);

        return eachObj.id !== movieObj.id;
      });

      localStorage.setItem("watchlistData", JSON.stringify(filteredData));
      setWatchlist(filteredData);
    } else {
      localStorage.setItem(
        "watchlistData",
        JSON.stringify([...watchlistData, movieObj])
      );
      setWatchlist((prevState) => [...prevState, movieObj]);
    }
  };

  return (
    <BrowserRouter>
      <WatchlistContext.Provider value={{ watchlistData, decideWatchlist }}>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/watchlist" element={<Watchlist />} />
        </Routes>
      </WatchlistContext.Provider>
    </BrowserRouter>
  );
};

export default App;
