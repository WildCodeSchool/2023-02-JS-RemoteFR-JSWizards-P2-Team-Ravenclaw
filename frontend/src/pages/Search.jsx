import { useParams } from "react-router-dom";
import SearchResult from "../components/SearchResult/SearchResult";

export function Search() {
  const { recherche } = useParams();

  return (
    <div>
      {recherche === "" ? (
        <SearchResult url="https://api.jikan.moe/v4/anime?type=tv&limit=25" />
      ) : (
        <SearchResult
          url={`https://api.jikan.moe/v4/anime?type=tv&limit=25&q=${recherche}`}
        />
      )}
    </div>
  );
}

export function SearchWithoutParams() {
  // On rentre dans ce composant si l'url resemble à : /search/ ou /search
  return (
    <div>
      <SearchResult url="https://api.jikan.moe/v4/anime?type=tv&limit=25" />
    </div>
  );
}
