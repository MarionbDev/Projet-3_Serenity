import { Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patient" element={<Connexion />} />
      <Route path="/doctor" element={<Connexion />} />
    </Routes>
  );
}

export default App;
