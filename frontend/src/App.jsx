import Carrousel from "./components/Carrousel";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";

import "./App.scss";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home />
      <Carrousel />
    </div>
  );
}

export default App;
