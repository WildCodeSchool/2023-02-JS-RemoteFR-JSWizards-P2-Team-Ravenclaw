import React from "react";
import SearchResult from "../components/SearchResult/SearchResult";

function FavorisPage() {
  const url =
    "https://api.jikan.moe/v4/anime?type=tv&min_score=8&order_by=rank";
  return <SearchResult url={url} />;
}

export default FavorisPage;
