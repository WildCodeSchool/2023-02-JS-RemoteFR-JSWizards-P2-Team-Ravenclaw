import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Anime from "./pages/Anime/Anime";
import { Search, SearchWithoutParams } from "./pages/Search";
import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/anime/:idAnime" element={<Anime />} />
          <Route path="/search/:recherche" element={<Search />} />
          <Route path="/search" element={<SearchWithoutParams />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
