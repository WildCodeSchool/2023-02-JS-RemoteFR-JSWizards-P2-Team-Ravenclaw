import React from "react";
import SearchResult from "../components/SearchResult/SearchResult";

function ShonenPage() {
  const url = "https://api.jikan.moe/v4/anime?type=tv&genres=27";
  return <SearchResult url={url} />;
}

export default ShonenPage;
