import PropTypes from "prop-types";
import NavBar from "../components/NavBar/NavBar";
import SearchResult from "../components/SearchResult/SearchResult";
import Footer from "../components/Footer/Footer";

export default function Search({ recherche, setRecherche }) {
  return (
    <div>
      <NavBar recherche={recherche} setRecherche={setRecherche} />
      <SearchResult />
      <Footer />
    </div>
  );
}

Search.propTypes = {
  recherche: PropTypes.string.isRequired,
  setRecherche: PropTypes.func.isRequired,
};
