// import { useEffect } from "react";
// import axios from "axios";
import Categorie from "../components/Categorie/Categorie";
import Footer from "../components/Footer/Footer";
import Carrousel from "../components/Carrousel/Carrousel";
import NavBar from "../components/NavBar/NavBar";
import AnimeDetailedCard from "../components/AnimeDetailedCard/AnimeDetailedCard";

import animes from "../helpers/animes.json";

export default function Home() {
  // const API = "https://api.jikan.moe/v4/anime/";

  // useEffect(() => {
  // 	axios
  // 		.get(API)
  // 		.then((response) => {
  // 			setCountries(response.data);
  // 			// setLoading(false);
  // 		})
  // 		.catch((e) => console.error(e));
  // }, []);
  return (
    <div>
      <NavBar />
      <div className="template-selection">
        <Carrousel />
        <Categorie animes={animes} titreCategorie="Action" />
        <Categorie animes={animes} titreCategorie="Sports" />
        <AnimeDetailedCard anime={animes[11]} />
        <Carrousel />
        <AnimeDetailedCard anime={animes[0]} />
        <Categorie animes={animes} titreCategorie="Sci-Fi" />
        <Categorie animes={animes} titreCategorie="Drama" />
        <Carrousel />
      </div>
      <Footer />
    </div>
  );
}
