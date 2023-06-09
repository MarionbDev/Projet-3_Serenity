import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import CreateDoctor from "./components/CreateDoctor";
import "./App.css";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
// import Test from "./components/Test";
import PrepaPatientPcOne from "./pages/PrepaPatientPcOne";
import PrepaPatientMobile from "./pages/PrepaPatientMobile";
import SideBarDoctor from "./components/SideBarDoctor";
import PreparationEtapeFirst from "./pages/PreparationEtapeFirst";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/patient" element={<Connexion utilisateur="patient" />} />
        <Route path="/patient/:id" element={<PrepaPatientMobile />} />
        <Route path="/patient/prepa/:id" element={<PrepaPatientPcOne />} />

        <Route
          path="/patient/:id/comprendre-mon-operation"
          element={<PreparationEtapeFirst />}
        />
        <Route path="/doctor" element={<Connexion utilisateur="doctor" />} />
        <Route
          path="/doctor/:id"
          element={<SideBarDoctor utilisateur="/doctor/:id" />}
        />
        <Route path="/create-doctor" element={<CreateDoctor />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
