import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import "./App.scss";

function App() {
  const [recherche, setRecherche] = useState("");
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={<Home recherche={recherche} setRecherche={setRecherche} />}
          />
          <Route
            path="/search"
            element={
              <Search recherche={recherche} setRecherche={setRecherche} />
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
