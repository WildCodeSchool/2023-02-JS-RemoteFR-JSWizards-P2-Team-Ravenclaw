import Categorie from "../components/Categorie/Categorie";
import Footer from "../components/Footer/Footer";
import Carrousel from "../components/Carrousel/Carrousel";
import NavBar from "../components/NavBar/NavBar";
import AnimeDetailedCard from "../components/AnimeDetailedCard/AnimeDetailedCard";

import animes from "../helpers/animes.json";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="template-selection">
        <Carrousel />
        <Categorie animes={animes} titreCategorie="Action" />
        <Categorie animes={animes} titreCategorie="Sports" />
        <AnimeDetailedCard anime={animes[21]} />
        <Carrousel />
        <AnimeDetailedCard anime={animes[1735]} />
        <Categorie animes={animes} titreCategorie="Sci-Fi" />
        <Categorie animes={animes} titreCategorie="Drama" />
        <Carrousel />
      </div>
      <Footer />
    </div>
  );
}
