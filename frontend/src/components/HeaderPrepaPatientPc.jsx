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
    <div className="flex">
      <div className="flex flex-col ml-72">
        <p className="mt-8 text-2xl font-medium">
          Bonjour {interventionInfo.firstname}
        </p>
        <p className="mt-5 text-4xl font-semibold">Comment allez-vous ?</p>
      </div>

      <div className="flex ml-36 mt-8">
        <div className="text-center border bg-pink-100 rounded-lg w-20 h-[70px]">
          <p className="text-xs text-gray-500">jour</p>
          <p className="text-3xl">20</p>
        </div>
        <div className="flex justify-start m-1 flex-col ml-5 ">
          <p className="text-sm font-semibold">{interventionInfo.name}</p>
          <p className="text-xs font-medium">coucou</p>
          <p className="text-sm font-semibold">ça va ?</p>
        </div>
      </div>
    </div>
  );
}
