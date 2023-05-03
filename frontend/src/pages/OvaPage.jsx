import React from "react";
import SearchResult from "../components/SearchResult/SearchResult";

function SeriePage() {
  const url = "https://api.jikan.moe/v4/anime?type=ova&limit=25";
  return <SearchResult url={url} />;
}

export default SeriePage;
