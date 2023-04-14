import Selection from "../components/Selection/Selection";
import Footer from "../components/Footer/Footer";
import Carrousel from "../components/Carrousel/Carrousel";
import NavBar from "../components/NavBar/NavBar";

import animes from "../helpers/animes.json";

export default function Home() {
  return (
    <div className="template-selection">
      <NavBar />
      <Carrousel />
      <Selection animes={animes} />
      <Selection animes={animes} />
      <Footer />
    </div>
  );
}
