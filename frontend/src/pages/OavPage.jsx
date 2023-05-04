import React from "react";
import SearchResult from "../components/SearchResult/SearchResult";

function OavPage() {
  const url = "https://api.jikan.moe/v4/anime?type=ova";
  return <SearchResult url={url} />;
}

export default OavPage;
