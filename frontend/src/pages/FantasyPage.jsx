import React from "react";
import SearchResult from "../components/SearchResult/SearchResult";

function FantasyPage() {
  const url = "https://api.jikan.moe/v4/anime?type=tv&genres=10";
  return <SearchResult url={url} />;
}

export default FantasyPage;
