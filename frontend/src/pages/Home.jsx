import { useEffect, useState } from "react";
import axios from "axios";
import Categorie from "../components/Categorie/Categorie";
import Footer from "../components/Footer/Footer";
import Carrousel from "../components/Carrousel/Carrousel";
import NavBar from "../components/NavBar/NavBar";
import AnimeDetailedCard from "../components/AnimeDetailedCard/AnimeDetailedCard";

import animes from "../helpers/animes.json";

export default function Home() {
  const APIrandom = "https://api.jikan.moe/v4/random/anime";
  const [loading, setLoading] = useState(true);
  const [anime, setAnime] = useState({});
  const [anime2, setAnime2] = useState({});

  useEffect(() => {
    axios
      .get(APIrandom)
      .then((response) => {
        // console.log(response.data.data);
        setAnime(response.data.data);
      })
      .catch((e) => console.error(e));
    axios
      .get(APIrandom)
      .then((response) => {
        // console.log(response.data.data);
        setAnime2(response.data.data);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  // useEffect(() => {}, []);

  if (loading === true) {
    return <p>"Page En cours de chargement"</p>;
  }
  return (
    <div>
      <NavBar />
      <div className="template-selection">
        <Carrousel />
        <div className="categorie-adc">
          <div className="categorie-x2">
            <Categorie animes={animes} titreCategorie="Action" />
            <Categorie animes={animes} titreCategorie="Sports" />
          </div>
          <AnimeDetailedCard anime={anime} />
        </div>
        <Carrousel />
        <div className="adc-categorie">
          <AnimeDetailedCard anime={anime2} />
          <div className="categorie-x2">
            <Categorie animes={animes} titreCategorie="Sci-Fi" />
            <Categorie animes={animes} titreCategorie="Drama" />
          </div>
        </div>
        <Carrousel />
      </div>
      <Footer />
    </div>
  );
}
