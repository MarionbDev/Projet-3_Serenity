import { useState, useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";
import {
  convertDateFormat,
  convertHourFormat,
} from "../../services/convertTime";
import notif from "../../assets/logo/logoPatient/Notification.png";

export default function HeaderPrepaPatientPc() {
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

  return (
    <div className="flex justify-around ml-[256px]">
      <div className="flex-col mt-10">
        <p className="text-2xl font-medium">
          Bonjour {interventionInfo.firstname}
        </p>
        <p className="mt-1 text-4xl font-semibold">Comment allez-vous ?</p>
      </div>

      <div className="flex items-center mt-10">
        <div className="text-center border bg-pink-100 rounded-lg w-20 h-[70px]">
          <p className="mt-2 text-xs text-gray-500">jour</p>
          <p className="text-3xl">20</p>
        </div>
        <div className="flex justify-start m-1 flex-col ml-5 ">
          <p className="text-sm font-semibold">{interventionInfo.name}</p>
          <p className="text-xs font-medium">
            {interventionInfo && convertDateFormat(interventionInfo.time)}
          </p>
          <p className="text-sm font-semibold">
            {interventionInfo && convertHourFormat(interventionInfo.time)}
          </p>
        </div>
      </div>
      <div className="flex items-center mt-10">
        <button
          type="button"
          className="rounded-full shadow-lg shadow-[#abacae] flex w-10 h-10 justify-center items-center"
        >
          <img className="" src={notif} alt="notif" />
        </button>
      </div>
    </div>
  );
}
