import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";

export default function HeaderMobilePrepaPatient() {
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
    <>
      <div className="flex justify-around m-6">
        <img
          className="h-24 w-24 ml-6 rounded-lg "
          src="/src/assets/images/patient1.png"
          alt="avatar"
        />
        <div className="flex-col">
          <h1 className="text-2xl ml-6 mt-2">{interventionInfo.firstname}</h1>
          <p className="flex items-center text-xs w-52 h-10 ml-6">
            Préparation pour mon {interventionInfo.name}
          </p>
          <p className="flex items-center text-xl w-52 h-10 -mt-4 ml-6">
            Doctor {interventionInfo.lastname}
          </p>
        </div>
      </div>

      <div className="flex justify-end -mt-4 m-3">
        <div className="flex-col items-end m-4 text-right">
          <p className="p-1 text-xs">Date</p>
          <p className="p-1 text-xl">{interventionInfo.time}</p>
        </div>
        <div className="flex-col items-end m-4 text-right">
          <p className="p-1 text-xs">Heure</p>
          <p className="p-1 text-xl">04:02</p>
        </div>
      </div>
    </>
  );
}
