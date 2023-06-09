import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import avatar from "../assets/logo/avatar1.png";

export default function HeaderMobilePrepaPatient() {
  const [interventionInfo, setInterventionInfo] = useState("");
  const { idPatient } = useUserContext();

  const convertDateFormat = (timeSql) => {
    const day = timeSql.slice(8, 10);
    let month = "";
    switch (timeSql.slice(5, 7)) {
      case "01":
        month = "JANVIER";
        break;
      case "02":
        month = "FEVRIER";
        break;
      case "03":
        month = "MARS";
        break;
      case "04":
        month = "AVRIL";
        break;
      case "05":
        month = "MAI";
        break;
      case "06":
        month = "JUIN";
        break;
      case "07":
        month = "JUILLET";
        break;
      case "08":
        month = "AOUT";
        break;
      case "09":
        month = "SEPTEMBRE";
        break;
      case "10":
        month = "OCTOBRE";
        break;
      case "11":
        month = "NOVEMBRE";
        break;
      case "12":
        month = "DECEMBRE";
        break;
      default:
        month = "";
    }

    const year = timeSql.slice(0, 4);
    return `${day} ${month} ${year}`;
  };

  const convertHourFormat = (timeSql) => {
    const hour = timeSql.slice(11, 13);
    const minute = timeSql.slice(14, 16);
    return `${hour} : ${minute}`;
  };

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
            {convertDateFormat(interventionInfo.time)}
          </p>
        </div>
        <div className="flex-col items-end m-4 text-right">
          <p className="p-1 text-xs">Heure</p>
          <p className="p-1 text-xl">
            {convertHourFormat(interventionInfo.time)}
          </p>
        </div>
      </div>
    </>
  );
}
