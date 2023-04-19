import Categorie from "../components/Categorie/Categorie";
import Footer from "../components/Footer/Footer";
import Carrousel from "../components/Carrousel/Carrousel";
import NavBar from "../components/NavBar/NavBar";

import animes from "../helpers/animes.json";

export default function Home() {
  return (
    <div>
      <NavBar />
      <Carrousel />
      <div className="template-selection">
        <Categorie animes={animes} />
        <Categorie animes={animes} />
      </div>
      <Footer />
    </div>
  );
}
