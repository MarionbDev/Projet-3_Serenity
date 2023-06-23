import { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useUserContext } from "../contexts/UserContext";

export default function HeaderDoctor({ text }) {
  const [doctor, setDoctor] = useState(null);

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
      <p className="text-[37px]">{text}</p>
    </div>
  );
}

HeaderDoctor.propTypes = {
  text: PropTypes.string.isRequired,
};
