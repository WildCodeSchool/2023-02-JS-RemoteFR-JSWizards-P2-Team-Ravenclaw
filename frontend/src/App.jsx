import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import { Search, SearchWithoutParams } from "./pages/Search";
import "./App.scss";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AventurePage from "./pages/AventurePage";
import ActionPage from "./pages/ActionPage";
import FantasyPage from "./pages/FantasyPage";
import GourmetPage from "./pages/GourmetPage";
import SeinenPage from "./pages/SeinenPage";
import ShonenPage from "./pages/ShonenPage";
import FavorisPage from "./pages/FavorisPage";
import OavPage from "./pages/OavPage";

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

          <Route path="/aventure" element={<AventurePage />} />
          <Route path="/action" element={<ActionPage />} />
          <Route path="/fantasy" element={<FantasyPage />} />
          <Route path="/gourmet" element={<GourmetPage />} />
          <Route path="/seinen" element={<SeinenPage />} />
          <Route path="/shonen" element={<ShonenPage />} />
          <Route path="/favoris" element={<FavorisPage />} />
          <Route path="/oav" element={<OavPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
