import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import CreateDoctor from "./components/CreateDoctor";
import "./App.css";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
import SideBarDoctor from "./components/SideBarDoctor";
import PreparationEtapeFirst from "./pages/PreparationEtapeFirst";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/patient" element={<Connexion utilisateur="patient" />} />
        {/* <Route path="/patient/:id" element={<Test utilisateur="patient" />} /> */}
        <Route
          path="/patient/preparation"
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
