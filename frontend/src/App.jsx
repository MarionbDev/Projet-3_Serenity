import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import CreateDoctor from "./components/CreateDoctor";
import "./App.css";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import AccueilDoctor from "./pages/AccueilDoctor";
import InterventionDoctor from "./components/InterventionDoctor";
import PreparationEtapeFirst from "./pages/PreparationEtapeFirst";
import PrepaPatientMobile from "./pages/PrepaPatientMobile";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Connexion utilisateur="patient" />} />
        {/* <Route path="/patient/:id" element={<Test utilisateur="patient" />} /> */}

        <Route path="/patient/:id" element={<PrepaPatientMobile />} />

        <Route
          path="/patient/:id/comprendre-mon-operation"
          element={<PreparationEtapeFirst />}
        />
        <Route path="/doctor" element={<Connexion utilisateur="doctor" />} />
        <Route
          path="/doctor/:id"
          element={<AccueilDoctor utilisateur="/doctor/:id" />}
        />
        <Route
          path="/doctor/:id/intervention"
          element={
            <InterventionDoctor utilisateur="/doctor/:id/intervention" />
          }
        />
        <Route path="/create-doctor" element={<CreateDoctor />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
