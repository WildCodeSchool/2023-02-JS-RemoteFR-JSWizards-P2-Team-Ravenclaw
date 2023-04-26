import axios from "axios";
import { useState, useEffect } from "react";
import Categorie from "../components/Categorie/Categorie";
import Footer from "../components/Footer/Footer";
import Carrousel from "../components/Carrousel/Carrousel";
import NavBar from "../components/NavBar/NavBar";

export default function Home() {
  const [animes, setAnimes] = useState([]);
  const [loading, setLoading] = useState(true);
  const API = "https://api.jikan.moe/v4/anime";
  useEffect(() => {
    axios
      .get(API)
      .then((response) => {
        setAnimes(response.data.data);
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
        <Categorie animes={animes} titreCategorie="Action" />
        <Categorie animes={animes} titreCategorie="Sports" />
        <Carrousel />
        <Categorie animes={animes} titreCategorie="Sci-Fi" />
        <Categorie animes={animes} titreCategorie="Drama" />
        <Carrousel />
      </div>
      <Footer />
    </div>
  );
}
