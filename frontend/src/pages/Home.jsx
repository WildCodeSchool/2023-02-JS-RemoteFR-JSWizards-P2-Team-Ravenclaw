import Categorie from "../components/Categorie/Categorie";
import Carrousel from "../components/Carrousel/Carrousel";
import animes from "../helpers/animes.json";

export default function Home() {
  return (
    <div>
      <div className="template-selection">
        <Carrousel />
        <Categorie animes={animes} titreCategorie="Action" />
        <Categorie animes={animes} titreCategorie="Sports" />
        <Carrousel />
        <Categorie animes={animes} titreCategorie="Sci-Fi" />
        <Categorie animes={animes} titreCategorie="Drama" />
        <Carrousel />
      </div>
    </div>
  );
}
