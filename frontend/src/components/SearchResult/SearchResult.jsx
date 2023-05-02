import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import AnimeCardCategorie from "../Categorie/AnimeCardCategorie";
import "./SearchResult.scss";
import "../Categorie/VotreSelection.scss";

export default function SearchResult({ url }) {
  const [listeAnimes, setListeAnimes] = useState([]);

  function filtrerAnimes() {
    axios
      .get(url)
      .then((response) => {
        setListeAnimes(response.data.data);
      })
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    filtrerAnimes();
  }, [url]);

  return (
    <div id="searchresult" className="dad-anime-card">
      {listeAnimes.length === 0 ? (
        <p>Pas de résultats ou il y a eu une erreur pendant l'appel api</p>
      ) : (
        listeAnimes.map((anime) => (
          <AnimeCardCategorie anime={anime} key={anime.mal_id} />
        ))
      )}
    </div>
  );
}

SearchResult.propTypes = {
  url: PropTypes.string.isRequired,
};
