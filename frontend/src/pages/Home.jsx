import Selection from "../components/Selection/Selection";
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
        <Selection animes={animes} />
        <Selection animes={animes} />
      </div>
      <Footer />
    </div>
  );
}
