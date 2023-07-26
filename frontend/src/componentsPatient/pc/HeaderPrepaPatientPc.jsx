import { useParams, useNavigate, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";
import logoSerenity from "../../assets/logo/logoPatient/logoSerenity.png";

import {
  convertDateFormat,
  convertHourFormat,
} from "../../services/convertTime";

export default function HeaderPrepaPatientPc() {
  const navigate = useNavigate();
  const id = parseInt(useParams().id, 10);

  const [interventionInfo, setInterventionInfo] = useState("");
  const { idPatient, setIdPatient } = useUserContext();

  const getInterventionInfo = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/patients/${idPatient}/home`,
      { credentials: "include" }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        if (!idPatient) {
          navigate("/patients");
        }
        setInterventionInfo(data);
      });
  };

  // Décompte date
  const current = new Date();
  const interventionDate = new Date(interventionInfo.time);
  const diffInMilliseconds = interventionDate - current;
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));

  const handleLogout = () => {
    setIdPatient("");
    navigate("/");
  };

  useEffect(() => {
    if (idPatient !== "") {
      getInterventionInfo();
    }
  }, [idPatient]);

  useEffect(() => {
    if (id !== idPatient) {
      navigate("/patients");
    }
  }, [id]);

  return (
    <div className="flex justify-around">
      <div className="flex pt-[59px] pl-8 ">
        <img className="w-[45px] h-[42px] " src={logoSerenity} alt="logo" />
        <p className="text-black text-[20px] ml-2 ">SERENITY</p>
      </div>
      <div className="flex-col mt-10">
        <p className="text-2xl font-medium">
          Bonjour {interventionInfo.firstname}
        </p>
        <p className="mt-1 text-4xl font-semibold">Comment allez-vous ?</p>
      </div>

      <div className="flex mt-10 gap-20">
        <div className="flex items-center">
          <div className="text-center border  bg-pink-100 rounded-lg w-20 h-[70px]">
            <p className="mt-2 text-xs text-gray-500">Jour</p>
            <p className="text-3xl">{diffInDays}</p>
          </div>
          <div className="flex justify-start m-1 flex-col ml-5 ">
            <p className="text-sm font-semibold">{interventionInfo.name}</p>
            <p className="text-xs font-medium">
              {interventionInfo && convertDateFormat(interventionInfo.time)}
            </p>
            <p className="text-sm font-semibold">
              {interventionInfo && convertHourFormat(interventionInfo.time)}
            </p>
          </div>{" "}
        </div>
        <div className="flex items-start">
          <Link to="/">
            <button
              type="button"
              onClick={handleLogout}
              className="bg-indigo-50 px-4 py-2 rounded-full hover:bg-indigo-500 hover:text-white duration-500"
            >
              Déconnexion
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
