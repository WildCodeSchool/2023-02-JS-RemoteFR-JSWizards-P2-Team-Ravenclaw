import React from "react";
import SearchResult from "../components/SearchResult/SearchResult";

function FilmPage() {
  const url = "https://api.jikan.moe/v4/anime?type=movie&limit=25";
  return <SearchResult url={url} />;
}

export default FilmPage;
