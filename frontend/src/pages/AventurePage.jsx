import React from "react";
import SearchResult from "../components/SearchResult/SearchResult";

function AventurePage() {
  const url = "https://api.jikan.moe/v4/anime?type=tv&genres=2";
  return <SearchResult url={url} />;
}

export default AventurePage;
