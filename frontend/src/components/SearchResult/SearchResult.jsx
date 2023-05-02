import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import AnimeCardCategorie from "../Categorie/AnimeCardCategorie";
import "./SearchResult.scss";
import "../Categorie/VotreSelection.scss";

export default function SearchResult({ search }) {
  const [listeAnimes, setListeAnimes] = useState([]);

  function filtrerAnimes() {
    let url = "https://api.jikan.moe/v4/anime?type=tv&limit=25";
    if (search !== "") {
      url += `&q=${search}`;
    }
    axios
      .get(url)
      .then((response) => {
        setListeAnimes(response.data.data);
      })
      .catch((e) => console.error(e));
  }

  useEffect(() => {
    filtrerAnimes();
  }, [search]);

  return (
    <div id="searchresult" className="dad-anime-card">
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
