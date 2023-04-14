import Selection from "../components/Selection";
import Footer from "../components/Footer";
import Carrousel from "../components/Carrousel";
import NavBar from "../components/NavBar";

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
