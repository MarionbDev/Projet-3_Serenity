import { Routes, Route } from "react-router-dom";
import { UserContextProvider } from "./contexts/UserContext";
import CreateDoctor from "./components/CreateDoctor";
import "./App.css";
import Home from "./pages/Home";
import Connexion from "./pages/Connexion";
// import Test from "./components/Test";
import PrepaPatientPc from "./pages/PrepaPatientPc";
import PrepaPatientMobile from "./pages/PrepaPatientMobile";

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/patient" element={<Connexion utilisateur="patient" />} />
        {/* <Route path="/patient/:id" element={<Test utilisateur="patient" />} /> */}

        <Route path="/doctor" element={<Connexion utilisateur="doctor" />} />
        {/* <Route path="/doctor/:id" element={<Test utilisateur="doctor" />} /> */}
        <Route path="/create-doctor" element={<CreateDoctor />} />
        <Route path="/preparation-pc" element={<PrepaPatientPc />} />
        <Route path="/preparation-mobile" element={<PrepaPatientMobile />} />
      </Routes>
    </UserContextProvider>
  );
}

export default App;
