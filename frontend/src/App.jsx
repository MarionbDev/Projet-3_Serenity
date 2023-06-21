import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import CreateDoctor from "./components/CreateDoctor";
import PrivateRoutes from "./components/PrivateRoutes";
import "./App.css";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import AccueilDoctor from "./pages/AccueilDoctor";
import InterventionDoctor from "./components/InterventionDoctor";
import PrepaPatientMobile from "./pages/PrepaPatientMobile";
import DoctorList from "./components/DoctorList";
import PreparationEtapeFirst from "./pages/PreparationEtapeFirst";
import PreparationEtapeTwo from "./pages/PreparationEtapeTwo";
import PreparationEtapeThree from "./pages/PreparationEtapeThree";
import PreparationEtapeFour from "./pages/PreparationEtapeFour";
import PrepaPatientPcOne from "./pages/PrepaPatientPcOne";
import CreateIntervention from "./components/CreateIntervention";

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
        <Route
          path="/patients"
          element={<Connexion utilisateur="patients" />}
        />
        {window.innerWidth < 768 ? (
          <Route path="/patients/:id" element={<PrepaPatientMobile />} />
        ) : (
          <Route path="/patients/:id" element={<PrepaPatientPcOne />} />
        )}

        <Route
          path="/patient/:id/comprendre-mon-operation"
          element={<PreparationEtapeFirst />}
        />
        <Route
          path="/patient/:id/demarches-administratives"
          intervention
          element={<PreparationEtapeTwo />}
        />
        <Route
          path="/patients/:id/preparer-mon-arrivee"
          element={<PreparationEtapeThree />}
        />
        <Route
          path="/patients/:id/anticiper ma sortie"
          element={<PreparationEtapeFour />}
        />
        <Route path="/doctors" element={<Connexion utilisateur="doctors" />} />
        <Route
          path="/doctors/:id"
          element={<AccueilDoctor utilisateur="/doctors/:id" />}
        />
        <Route
          path="/doctors/:id/interventions"
          element={<InterventionDoctor />}
        />
        <Route
          path="/doctors/:id/interventions/create-intervention"
          element={<CreateIntervention />}
        />
        <Route
          path="/doctors/:id/praticiens"
          element={<PrivateRoutes authorizedRoles={["Admin", "Praticien"]} />}
        >
          <Route path="" index element={<DoctorList />} />
          <Route
            path="admin"
            element={<PrivateRoutes authorizedRoles={["Admin"]} />}
          >
            <Route path="CreateDoctor" element={<CreateDoctor />} />
          </Route>
        </Route>

        {/* Nouvelle route pour créer une intervention */}
        <Route
          path="/doctors/:id/interventions/create-intervention"
          element={<CreateIntervention />}
        />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
