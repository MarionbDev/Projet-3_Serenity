import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
// import CreateDoctor from "./components/CreateDoctor";
import "./App.css";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import AccueilDoctor from "./pageDoctor/AccueilDoctor";
import InterventionDoctor from "./componentsDoctor/InterventionDoctor";
import PrepaPatientMobile from "./pagePatient/PrepaPatientMobile";
import DoctorList from "./componentsDoctor/DoctorList";
import PreparationEtapeFirst from "./pagePatient/PreparationEtapeFirst";
import PreparationEtapeTwo from "./pagePatient/PreparationEtapeTwo";
import PreparationEtapeThree from "./pagePatient/PreparationEtapeThree";
import PreparationEtapeFour from "./pagePatient/PreparationEtapeFour";
import PrepaPatientPcOne from "./pagePatient/PrepaPatientPcOne";

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
          <Route path="/patient/:id" element={<PrepaPatientPcOne />} />
        )}

        <Route
          path="/patient/:id/comprendre-mon-operation"
          element={<PreparationEtapeFirst />}
        />
        <Route
          path="/patient/:id/demarches-administratives"
          element={<PreparationEtapeTwo />}
        />
        <Route
          path="/patient/:id/preparer-mon-arrivee"
          element={<PreparationEtapeThree />}
        />
        <Route
          path="/patient/:id/anticiper ma sortie"
          element={<PreparationEtapeFour />}
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
        <Route
          path="/doctor/:id/praticien"
          element={<DoctorList utilisateur="/doctor/:id/praticien" />}
        />
        {/* <Route
          path="/doctor/:id/praticien"
          element={<PrivateRoutes authorizedRoles="Admin" />}
        >
          <Route path="/CreateDoctor" element={<CreateDoctor />} />
        </Route> */}
      </Routes>
    </UserContextProvider>
  );
}

export default App;
