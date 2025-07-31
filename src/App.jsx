// !! READ

// 1. About the Delete button: decideWatchlist was used because in Watchlist component and toggleIsSaved component, there are two scenarios: one where a single object is being sent (in the deleteMovie and toggeRatingSort methods), and one where an array of objects is being sent (in the toggleIsSaved method.)

// 2. About the undefined bug: I'm not sure if I fixed the bug where it says something is undefined (should be the movieContext.watchlistData) in Watchlist component, because I don't see it now. Before I seem to have fixed it, it could by dealt with temporarily by deleting the watchlistData stored in LocalStorage.

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

  // I couldn't use watchlistItem.length without the + 1, because there is a case where the last item/movie being removed would trigger the else condition instead, since [].length is treated as false ([] is the value watchlistItem will have when there is only one item/movie let to delete.)

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
