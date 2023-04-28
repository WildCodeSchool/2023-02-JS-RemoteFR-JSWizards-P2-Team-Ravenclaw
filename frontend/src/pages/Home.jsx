import { useEffect, useState } from "react";
import axios from "axios";

import Categorie from "../components/Categorie/Categorie";
import Carrousel from "../components/Carrousel/Carrousel";
import AnimeDetailedCard from "../components/AnimeDetailedCard/AnimeDetailedCard";

export default function Home() {
  const APIrandom = "https://api.jikan.moe/v4/random/anime";
  const [loading, setLoading] = useState(true);
  const [anime, setAnime] = useState({});
  const [anime2, setAnime2] = useState({});
  const [animesAction, setAnimesAction] = useState([]);
  const [animesSports, setAnimesSports] = useState([]);
  const [animesSciFi, setAnimesSciFi] = useState([]);
  const [animesDrama, setAnimesDrama] = useState([]);

  useEffect(() => {
    axios
      .get(APIrandom)
      .then((response) => {
        setAnime(response.data.data);
      })
      .catch((e) => console.error(e));
    axios
      .get(APIrandom)
      .then((response) => {
        setAnime2(response.data.data);
      })
      .catch((e) => console.error(e));
    axios
      .get("https://api.jikan.moe/v4/anime?genres=1&type=tv")
      .then((response) => {
        setAnimesAction(response.data.data);
      })
      .catch((e) => console.error(e));
    axios
      .get("https://api.jikan.moe/v4/anime?genres=30&type=tv")
      .then((response) => {
        setAnimesSports(response.data.data);
      })
      .catch((e) => console.error(e));
    axios
      .get("https://api.jikan.moe/v4/anime?genres=24&type=tv")
      .then((response) => {
        setAnimesSciFi(response.data.data);
      })
      .catch((e) => console.error(e));
    axios
      .get("https://api.jikan.moe/v4/anime?genres=8&type=tv")
      .then((response) => {
        setAnimesDrama(response.data.data);
      })
      .catch((e) => console.error(e));
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  if (loading === true) {
    return <p>"Page En cours de chargement"</p>;
  }

  return (
    <div>
      <div className="template-selection">
        <Carrousel />
        <div className="categorie-adc">
          <div className="categorie-x2">
            <Categorie animes={animesAction} titreCategorie="Action" />
            <Categorie animes={animesSports} titreCategorie="Sports" />
          </div>
          <AnimeDetailedCard anime={anime} />
        </div>
        <Carrousel />
        <div className="adc-categorie">
          <AnimeDetailedCard anime={anime2} />
          <div className="categorie-x2">
            <Categorie animes={animesSciFi} titreCategorie="Sci-Fi" />
            <Categorie animes={animesDrama} titreCategorie="Drama" />
          </div>
        </div>
        <Carrousel />
      </div>
    </div>
  );
}
