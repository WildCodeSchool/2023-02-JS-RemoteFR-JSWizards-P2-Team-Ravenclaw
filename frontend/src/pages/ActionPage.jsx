import React from "react";
import SearchResult from "../components/SearchResult/SearchResult";

function ActionPage() {
  const url =
    "https://api.jikan.moe/v4/anime?type=tv&genres=1&page=2&min_score=1&order_by=rank";
  return <SearchResult url={url} />;
}

export default ActionPage;
