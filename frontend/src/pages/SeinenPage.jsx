import React from "react";
import SearchResult from "../components/SearchResult/SearchResult";

function SeinenPage() {
  const url = "https://api.jikan.moe/v4/anime?type=tv&genres=42";
  return <SearchResult url={url} />;
}

export default SeinenPage;
