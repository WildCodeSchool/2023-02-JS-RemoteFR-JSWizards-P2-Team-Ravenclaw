import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import { Search, SearchWithoutParams } from "./pages/Search";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import FilmPage from "./pages/FilmPage";
import SeriePage from "./pages/SeriePage";
import FavorisPage from "./pages/FavorisPage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:recherche" element={<Search />} />
          <Route path="/search" element={<SearchWithoutParams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/films" element={<FilmPage />} />
          <Route path="/series" element={<SeriePage />} />
          <Route path="/favoris" element={<FavorisPage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
