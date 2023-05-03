import { useEffect, useState } from "react";
import axios from "axios";

import Categorie from "../../components/Categorie/Categorie";
import Carrousel from "../../components/Carrousel/Carrousel";
import AnimeDetailedCard from "../../components/AnimeDetailedCard/AnimeDetailedCard";
import "./Home.scss";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [animesAction, setAnimesAction] = useState([]);
  const [animesSports, setAnimesSports] = useState([]);
  const [animesSciFi, setAnimesSciFi] = useState([]);
  const [animesDrama, setAnimesDrama] = useState([]);
  const [randomAnime1, setRandomAnime1] = useState([]);
  const [randomAnime2, setRandomAnime2] = useState([]);
  useEffect(() => {
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
    setTimeout(() => {
      axios
        .get("https://api.jikan.moe/v4/anime?genres=8&type=tv")
        .then((response) => {
          setAnimesDrama(response.data.data);
        })
        .catch((e) => console.error(e));
      axios
        .get("https://api.jikan.moe/v4/random/anime")
        .then((response) => {
          setRandomAnime1(response.data.data);
        })
        .catch((e) => console.error(e));
      axios
        .get("https://api.jikan.moe/v4/random/anime")
        .then((response) => {
          setRandomAnime2(response.data.data);
          setLoading(true);
        })
        .catch((e) => console.error(e));
    }, 2000);
    setTimeout(() => {
      setLoading(true);
    }, 3000);
  }, []);

  if (!loading) {
    return (
      <div className="loading-screen">
        <img src="./assets/no-boring.gif" alt="Loading Gif" />
      </div>
    );
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
          <AnimeDetailedCard anime={randomAnime1} />
        </div>
        <Carrousel />
        <div className="adc-categorie">
          <div className="x2-categorie">
            <Categorie animes={animesSciFi} titreCategorie="Sci-Fi" />
            <Categorie animes={animesDrama} titreCategorie="Drama" />
          </div>
          <AnimeDetailedCard anime={randomAnime2} />
        </div>
        <Carrousel />
      </div>
    </div>
  );
}
