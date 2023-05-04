import React from "react";
import SearchResult from "../components/SearchResult/SearchResult";

function GourmetPage() {
  const url = "https://api.jikan.moe/v4/anime?type=tv&genres=47";
  return <SearchResult url={url} />;
}

export default GourmetPage;
