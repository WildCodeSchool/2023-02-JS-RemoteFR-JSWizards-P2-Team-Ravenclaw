import axios from "axios";
import { useState, useEffect } from "react";
import Categorie from "../components/Categorie/Categorie";
import Footer from "../components/Footer/Footer";
import Carrousel from "../components/Carrousel/Carrousel";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  const [animesAction, setAnimesAction] = useState([]);
  const [animesSports, setAnimesSports] = useState([]);
  const [animesSciFi, setAnimesSciFi] = useState([]);
  const [animesDrama, setAnimesDrama] = useState([]);
  const [loading, setLoading] = useState(true);

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
    axios
      .get("https://api.jikan.moe/v4/anime?genres=8&type=tv")
      .then((response) => {
        setAnimesDrama(response.data.data);
        setLoading(false);
      })
      .catch((e) => console.error(e));
  }, []);

  if (loading === true) {
    return <p>"Page En cours de chargement"</p>;
  }

  return (
    <div>
      <NavBar />
      <div className="template-selection">
        <Carrousel />
        <Categorie animes={animesAction} titreCategorie="Action" />
        <Categorie animes={animesSports} titreCategorie="Sports" />
        <Carrousel />
        <Categorie animes={animesSciFi} titreCategorie="Sci-Fi" />
        <Categorie animes={animesDrama} titreCategorie="Drama" />
        <Carrousel />
      </div>
      <Footer />
    </div>
  );
}
