import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";

export default function HeaderPrepaPatientPc() {
  const [interventionInfo, setInterventionInfo] = useState("");
  const { idPatient } = useUserContext();

  const getInterventionInfo = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/interventions/home`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idPatient,
      }),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setInterventionInfo(data);
      });
  };
  useEffect(() => {
    if (idPatient !== "") {
      getInterventionInfo();
    }
  }, []);

  return (
    <div className="float-right w-[78%] h-32">
      <div>
        <p>Bonjour {interventionInfo.name}</p>
        <p>Comment allez-vous ?</p>
      </div>
    </div>
  );
}
