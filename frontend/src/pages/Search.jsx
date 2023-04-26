import { useState } from "react";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";

export default function Search() {
  const [recherche, setRecherche] = useState("");
  return (
    <div>
      <NavBar recherche={recherche} setRecherche={setRecherche} />

      <Footer />
    </div>
  );
}
