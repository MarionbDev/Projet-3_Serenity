import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import avatar from "../assets/logoPatient/avatar1.png";
import { convertDateFormat, convertHourFormat } from "../services/convertTime";

export default function HeaderMobilePrepaPatient() {
  const [interventionInfo, setInterventionInfo] = useState("");
  const { idPatient } = useUserContext();

  const getInterventionInfo = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients/${idPatient}/home`)
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

  if (interventionInfo === "") {
    return <p>Chargement de la page</p>;
  }

  return (
    <>
      <div className="flex justify-around m-6">
        {interventionInfo.image !== null ? (
          interventionInfo.image
        ) : (
          <img className="ml-4 w-20 h-20" src={avatar} alt="avatar" />
        )}

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
          <p className="p-1 text-xl">
            {interventionInfo && convertDateFormat(interventionInfo.time)}
          </p>
        </div>
        <div className="flex-col items-end m-4 text-right">
          <p className="p-1 text-xs">Heure</p>
          <p className="p-1 text-xl">
            {interventionInfo && convertHourFormat(interventionInfo.time)}
          </p>
        </div>
      </div>
    </>
  );
}
