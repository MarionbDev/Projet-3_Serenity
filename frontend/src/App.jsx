import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import CreateDoctor from "./componentsDoctor/CreateDoctor";
import PrivateRoutes from "./components/PrivateRoutes";
import "./App.css";
import "react-responsive-modal/styles.css";
import "./modalStyles.css";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
// import LatLongApi from "./pages/LatLongApi";
import AccueilDoctorMobile from "./pageDoctor/AccueilDoctorMobile";
import AccueilDoctor from "./pageDoctor/AccueilDoctor";
import InterventionDoctor from "./componentsDoctor/InterventionDoctor";
import PrepaPatientMobile from "./pagePatient/PrepaPatientMobile";
import InterventionDoctorMobile from "./componentsDoctor/InterventionDoctorMobile";
import DoctorList from "./componentsDoctor/DoctorList";
import DoctorPatientList from "./componentsDoctor/PatientsList";
import CreatePatient from "./componentsDoctor/CreatePatient";
import PreparationEtapeFirst from "./pagePatient/PreparationEtapeFirst";
import PreparationEtapeTwo from "./pagePatient/PreparationEtapeTwo";
import PreparationEtapeThree from "./pagePatient/PreparationEtapeThree";
import PreparationEtapeFour from "./pagePatient/PreparationEtapeFour";
import PreparationEtapeFive from "./pagePatient/PreparationEtapeFive";
import PrepaPatientPcOne from "./pagePatient/PrepaPatientPcOne";
import CreateIntervention from "./componentsDoctor/CreateIntervention";
import MonOperation from "./componentsPatient/pc/MonOperation";
import Administratif from "./componentsPatient/pc/Administratif";
import MonArrivee from "./componentsPatient/pc/MonArrivee";
import Anticiper from "./componentsPatient/pc/Anticiper";
import CheckList from "./componentsPatient/pc/CheckList";

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
          <>
            <Route path="/patients/:id" element={<PrepaPatientMobile />} />
            <Route
              path="/patients/:id/comprendre-mon-operation"
              element={<PreparationEtapeFirst />}
            />
            <Route
              path="/patients/:id/demarches-administratives"
              intervention
              element={<PreparationEtapeTwo />}
            />
            <Route
              path="/patients/:id/preparer-mon-arrivee"
              element={<PreparationEtapeThree />}
            />
            <Route
              path="/patients/:id/anticiper-ma-sortie"
              element={<PreparationEtapeFour />}
            />
            <Route
              path="/patients/:id/Ma-check-list"
              element={<PreparationEtapeFive />}
            />

            <Route
              path="/doctors/:id"
              element={<AccueilDoctorMobile utilisateur="/doctors/:id" />}
            />
            <Route
              path="/doctors/:id/interventions"
              element={<InterventionDoctorMobile />}
            />
          </>
        ) : (
          <Route path="/patients/:id" element={<PrepaPatientPcOne />}>
            <Route path="comprendre-mon-operation" element={<MonOperation />} />
            <Route
              path="demarches-administratives"
              element={<Administratif />}
            />
            <Route path="preparer-mon-arrivee" element={<MonArrivee />} />
            <Route path="anticiper-ma-sortie" element={<Anticiper />} />
            <Route path="Ma-check-list" element={<CheckList />} />
          </Route>
        )}

        <Route path="/doctor" element={<Connexion utilisateur="doctor" />} />
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
        <Route path="/doctors/:id/patients/" element={<DoctorPatientList />} />
        <Route
          path="/doctors/:id/patients/create-patient"
          element={<CreatePatient />}
        />

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
