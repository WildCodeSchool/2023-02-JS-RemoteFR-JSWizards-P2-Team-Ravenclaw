import { useParams } from "react-router-dom";
import SearchResult from "../components/SearchResult/SearchResult";

export function Search() {
  const { recherche } = useParams(); // /search/abc -> constante recherche vaudra "abc"

  return (
    <div>
      <SearchResult search={recherche} />
    </div>
  );
}

export function SearchWithoutParams() {
  // On rentre dans ce composant si l'url resemble à : /search/ ou /search
  return (
    <div>
      <SearchResult search="" />
    </div>
  );
}
