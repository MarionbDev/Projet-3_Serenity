import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export default function HeaderDoctor() {
  const [doctor, setDoctor] = useState(null);
  const location = useLocation();
  const isInterventionPage = location.pathname.includes("/intervention");

  const { idDoctor } = useUserContext();

  const getOneDoctor = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/doctors/${idDoctor}`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => setDoctor(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneDoctor();
  }, [idDoctor]);

  if (!doctor) {
    return <p>Loading the doctor...</p>;
  }

  return (
    <div>
      <p className="text-[24px]">Bonjour Dr {doctor.lastname} </p>

      {isInterventionPage ? (
        <p className="text-[37px]">Une nouvelle intervention ?!</p>
      ) : (
        <p className="text-[37px]">Comment vont vos patients ?!</p>
      )}
    </div>
  );
}
