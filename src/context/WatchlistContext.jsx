import React from "react";

const WatchlistContext = React.createContext({
  watchlistData: [],
  decideWatchlist: () => {},
});

export default WatchlistContext;
