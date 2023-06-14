import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import avatar from "../assets/logo/avatar1.png";

export default function SideBarPrepaPc() {
  const { idPatient } = useUserContext();
  const [interventionInfo, setInterventionInfo] = useState("");

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
    <div className="min-h-screen w-64 border-r-2 fixed">
      <div className="pt-6 pl-8 ">
        <img src="/src/assets/logo/logo1.png" alt="logo" />
      </div>
      <div className="mt-20 ml-4">
        <button
          className="bg-indigo-500 flex items-center rounded-lg w-[90%] h-14"
          type="button"
        >
          <img
            className="ml-6 mr-2"
            src="/src/assets/logo/icon1.png"
            alt="icon"
          />
          <p className="m-2 text-white font-semibold">Ma préparation</p>
        </button>
        <button
          type="button"
          className="flex items-center rounded-lg w-[90%] h-14"
        >
          <img
            className="ml-7 mr-2"
            src="/src/assets/logo/bag.png"
            alt="icon"
          />
          <p className="m-2 text-gray-500 font-semibold">Gagner en sécurité</p>
        </button>
        <button
          className="flex items-center rounded-lg w-[90%] h-14"
          type="button"
        >
          <img
            className="ml-7 mr-2"
            src="/src/assets/logo/Chart.png"
            alt="icon"
          />
          <p className="m-3 text-gray-500 font-semibold">Agenda</p>
        </button>
      </div>
      <div className="mt-20 ml-4">
        <p className="m-3 text-gray-500 font-semibold text-sm">Des nouvelles</p>
        <button
          className="flex items-center rounded-lg w-[90%] h-14"
          type="button"
        >
          <img
            className="ml-7 mr-2"
            src="/src/assets/logo/Chart.png"
            alt="icon"
          />
          <p className="m-3 text-gray-500 font-semibold">Agenda</p>
        </button>
        <button
          className="flex items-center rounded-lg w-[90%] h-14"
          type="button"
        >
          <img className="ml-7 mr-2" src="/src/assets/icon1.png" alt="icon" />
          <p className="m-3 text-gray-500 font-semibold">Messagerie</p>
        </button>
      </div>
      <div className=" mt-28 ml-4 flex">
        {interventionInfo.image !== null ? (
          interventionInfo.image
        ) : (
          <img className="ml-4 w-14" src={avatar} alt="avatar" />
        )}

        <p className="m-3 text-gray-500 font-semibold">
          {interventionInfo.firstname}
        </p>
      </div>
    </div>
  );
}
