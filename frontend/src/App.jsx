import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import CreateDoctor from "./componentsDoctor/CreateDoctor";
import EditDoctor from "./componentsDoctor/EditDoctor";
import PrivateRoutes from "./components/PrivateRoutes";
import "./App.css";
import "react-responsive-modal/styles.css";
import "./modalStyles.css";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import LatLongApi from "./pages/LatLongApi";
import AccueilDoctorMobile from "./pageDoctor/AccueilDoctorMobile";
import AccueilDoctor from "./pageDoctor/AccueilDoctor";
import InterventionDoctor from "./componentsDoctor/InterventionDoctor";
import PrepaPatientMobile from "./pagePatient/PrepaPatientMobile";
import InterventionDoctorMobile from "./componentsDoctor/InterventionDoctorMobile";
import DoctorList from "./componentsDoctor/DoctorList";
import DoctorPatientList from "./componentsDoctor/PatientsList";
import DoctorPatientListMobile from "./componentsDoctor/PatientsListMobile";
import CreatePatient from "./componentsDoctor/CreatePatient";
import EditPatient from "./componentsDoctor/EditPatient";
import PreparationEtapeFirst from "./pagePatient/PreparationEtapeFirst";
import PreparationEtapeTwo from "./pagePatient/PreparationEtapeTwo";
import PreparationEtapeThree from "./pagePatient/PreparationEtapeThree";
import PreparationEtapeFour from "./pagePatient/PreparationEtapeFour";
import PreparationEtapeFive from "./pagePatient/PreparationEtapeFive";
import PrepaPatientPcOne from "./pagePatient/PrepaPatientPcOne";
import PrepaEtapeThreeOne from "./pagePatient/PrepaEtapeThreeOne";
import PrepaEtapeThreeTwo from "./pagePatient/PrepaEtapeThreeTwo";
import CreateIntervention from "./componentsDoctor/CreateIntervention";
import CreateInterventionMobile from "./componentsDoctor/CreateInterventionMobile";
import MonOperation from "./componentsPatient/pc/MonOperation";
import Administratif from "./componentsPatient/pc/Administratif";
import MonArrivee from "./componentsPatient/pc/MonArrivee";
import Anticiper from "./componentsPatient/pc/Anticiper";
import CheckList from "./componentsPatient/pc/CheckList";
import FileUploader from "./componentsDoctor/addContents";
import ChangePassword from "./componentsDoctor/ChangePassword";
import CasePrepaPcPatient from "./componentsPatient/pc/CasePrepaPcPatient";
import ChangePasswordPatient from "./componentsDoctor/ChangePasswordPatient";
// import MonArriveeDeux from "./componentsPatient/pc/MonArriveeDeux";

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
        <Route path="/changer-mon-mot-de-passe" element={<ChangePassword />} />
        <Route
          path="/changer-mon-mot-de-passe-patient"
          element={<ChangePasswordPatient />}
        />

        <Route
          path="/patients"
          element={<Connexion utilisateur="patients" />}
        />
        {window.innerWidth < 768 ? (
          <>
            <Route
              path="/patients/:id/ma-preparation"
              element={<PrepaPatientMobile />}
            />
            <Route
              path="/patients/:id/ma-preparation/comprendre-mon-operation"
              element={<PreparationEtapeFirst />}
            />
            <Route
              path="/patients/:id/ma-preparation/demarches-administratives"
              intervention
              element={<PreparationEtapeTwo />}
            />
            <Route
              path="/patients/:id/ma-preparation/preparer-mon-arrivee"
              element={<PreparationEtapeThree />}
            />
            <Route
              path="/patients/:id/ma-preparation/anticiper-ma-sortie"
              element={<PreparationEtapeFour />}
            />
            <Route
              path="/patients/:id/ma-preparation/anticiper-ma-sortie/latlong"
              element={<LatLongApi />}
            />
            <Route
              path="/patients/:id/ma-preparation/Ma-check-list"
              element={<PreparationEtapeFive />}
            />
            <Route
              path="/patients/:id/ma-preparation/preparer-mon-arrivee/1"
              element={<PrepaEtapeThreeOne />}
            />
            <Route
              path="/patients/:id/ma-preparation/preparer-mon-arrivee/2"
              element={<PrepaEtapeThreeTwo />}
            />
            <Route
              path="/patients/:id/ma-preparation/anticiper-ma-sortie"
              element={<PreparationEtapeFour />}
            />
            <Route
              path="/patients/:id/ma-preparation/Ma-check-list"
              element={<PreparationEtapeFive />}
            />

            <Route path="/doctors/:id" element={<AccueilDoctorMobile />} />
            <Route
              path="/doctors/:id/interventions"
              element={<InterventionDoctorMobile />}
            />
            <Route
              path="/doctors/:id/interventions/create-intervention"
              element={<CreateInterventionMobile />}
            />
            <Route
              path="/doctors/:id/patients/"
              element={<DoctorPatientListMobile />}
            />
          </>
        ) : (
          <Route
            path="/patients/:id/ma-preparation"
            element={<CasePrepaPcPatient />}
          >
            <Route path="comprendre-mon-operation" element={<MonOperation />} />
            <Route
              path="demarches-administratives"
              element={<Administratif />}
            />
            <Route path="preparer-mon-arrivee" element={<MonArrivee />} />
            {/* <Route path="1" element={<MonArrivee />} />
              <Route path="2" element={<MonArriveeDeux />} /> */}

            <Route path="anticiper-ma-sortie" element={<Anticiper />} />
            <Route path="Ma-check-list" element={<CheckList />} />
          </Route>
        )}

        <Route path="/patients/:id/serenite" element={<PrepaPatientPcOne />} />
        <Route path="/patients/:id/agenda" element={<PrepaPatientPcOne />} />
        <Route
          path="/patients/:id/notifications"
          element={<PrepaPatientPcOne />}
        />
        <Route
          path="/patients/:id/messagerie"
          element={<PrepaPatientPcOne />}
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
        <Route path="/doctors/:id/patients/" element={<DoctorPatientList />} />
        <Route
          path="/doctors/:id/patients/create-patient"
          element={<CreatePatient />}
        />
        <Route
          path="/doctors/:id/patients/:patientId" // !!!!!!
          element={<EditPatient />}
        />
        <Route
          path="/doctors/:id/praticiens/:praticienId" // !!!!!!
          element={<EditDoctor />}
        />

        {/* Nouvelle route pour créer une intervention */}
        <Route
          path="/doctors/:id/interventions/create-intervention"
          element={<CreateIntervention />}
        />

        {/* Route pour le composant FileUploader */}
        <Route path="/upload" element={<FileUploader />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
