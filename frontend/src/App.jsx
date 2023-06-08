import { Routes, Route } from "react-router-dom";
import CreateDoctor from "./components/CreateDoctor";

import "./App.css";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import PrepaPatientMobile from "./pages/PrepaPatientMobile";
import PrepaPatientPc from "./pages/PrepaPatientPc";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/patient" element={<Connexion utilisateur="patients" />} />
      {/* <Route path="/:id" element={<PrepaPatientMobile />}>
          <Route
            path="/Comprendre-mon-opération"
            element={<PrepaPatientMobile />}
          />
        </Route> */}
      {/* <Route path="/:id" element={<PrepaPatientPc />} /> */}
      <Route path="/preparation-mobile" element={<PrepaPatientMobile />} />
      <Route path="/preparation-pc" element={<PrepaPatientPc />} />
      <Route path="/doctor" element={<Connexion utilisateur="doctors" />} />
      <Route path="/create-doctor" element={<CreateDoctor />} />
    </Routes>
  );
}

export default App;
