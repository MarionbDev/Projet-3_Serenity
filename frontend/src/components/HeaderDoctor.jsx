import { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom";

export default function HeaderDoctor() {
  const [doctor, setDoctor] = useState(null);
  const location = useLocation();
  const isInterventionPage = location.pathname.includes("/intervention");

  const { id } = useParams();

  const getOneDoctor = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/doctors/${id}`)
      .then((resp) => resp.json())
      .then((data) => setDoctor(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneDoctor();
  }, [id]);

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
