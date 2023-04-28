import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import AnimeCardCategorie from "../Categorie/AnimeCardCategorie";
import "./SearchResult.scss";
import animes from "../../helpers/animes.json";

export default function SearchResult({ search }) {
  const [listeAnimes, setListeAnimes] = useState([]);

  function filtrerAnimes() {
    const animeFiltered =
      search === ""
        ? animes
        : animes.filter((currentAnime) =>
            currentAnime.title.toLowerCase().includes(search.toLowerCase())
          );
    setListeAnimes(animeFiltered);
  }

  useEffect(() => {
    filtrerAnimes();
  }, [search]);

  return (
    <div className="searchresult">
      {listeAnimes.length === 0 ? (
        <p>Vide</p>
      ) : (
        listeAnimes.map((anime) => (
          <AnimeCardCategorie anime={anime} key={anime.mal_id} />
        ))
      )}
    </div>
  );
}

SearchResult.propTypes = {
  search: PropTypes.string.isRequired,
};
