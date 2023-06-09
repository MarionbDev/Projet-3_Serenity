import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import CreateDoctor from "./components/CreateDoctor";
import "./App.css";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import AccueilDoctor from "./pages/AccueilDoctor";
import InterventionDoctor from "./components/InterventionDoctor";
import PrepaPatientMobile from "./pages/PrepaPatientMobile";
import PrepaPatientPcOne from "./pages/PrepaPatientPcOne";

function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}
function App() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Connexion utilisateur="patient" />} />
        {window.innerWidth < 768 ? (
          <Route path="/patient/:id" element={<PrepaPatientMobile />} />
        ) : (
          // <Route
          //   path="/patient/:id/comprendre-mon-operation"
          //   element={<PreparationEtapeFirst />}
          // />

          <Route path="/patient/:id" element={<PrepaPatientPcOne />} />
        )}

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
