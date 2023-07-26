import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";
import avatar from "../../assets/logo/logoPatient/avatar1.png";
import logoSerenity from "../../assets/logo/logoPatient/logo1.png";
import iconPrepa from "../../assets/logo/logoPatient/preparation.png";
import iconPrepaBlanc from "../../assets/logo/logoPatient/activite.png";
import iconBag from "../../assets/logo/logoPatient/Bag.png";
import iconBagBlanc from "../../assets/logo/logoPatient/bag-blanc.png";
import iconAgenda from "../../assets/logo/logoPatient/Chart.png";
import iconAgendaBlanc from "../../assets/logo/logoPatient/Agenda.png";
import iconNotif from "../../assets/logo/logoPatient/Notification.png";
import iconChat from "../../assets/logo/logoPatient/Chat.png";

export default function SideBarPrepaPc() {
  const { id } = useParams();
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
      <div className="flex pt-[59px] pl-8 ">
        <img className="w-[45px] h-[42px] " src={logoSerenity} alt="logo" />
        <p className="text-black text-[20px] ml-2 ">SERENITY</p>
      </div>
      <div className="mt-20 ml-4">
        <NavLink to={`/patients/${id}/ma-preparation`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "bg-indigo-500 flex items-center rounded-lg w-[90%] h-14 px-6"
                  : "flex items-center rounded-lg w-[90%] h-14 ml-6"
              }
              type="button"
            >
              <img
                src={isActive ? iconPrepa : iconPrepaBlanc}
                alt="icon"
                className="mr-4"
              />

              <p
                className={
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-500 font-semibold"
                }
              >
                Ma préparation
              </p>
            </button>
          )}
        </NavLink>

        <NavLink to={`/patients/${id}/serenite`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "bg-indigo-500 flex items-center rounded-lg w-[90%] h-14"
                  : "flex items-center rounded-lg w-[100%] h-14"
              }
              type="button"
            >
              <img
                src={isActive ? iconBagBlanc : iconBag}
                className="ml-7 mr-4"
                alt="icon"
              />
              <p
                className={
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-500 font-semibold"
                }
              >
                Gagner en sérénité
              </p>
            </button>
          )}
        </NavLink>

        <NavLink to={`/patients/${id}/agenda`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "bg-indigo-500 flex items-center rounded-lg w-[90%] h-14"
                  : "flex items-center rounded-lg w-[100%] h-14"
              }
              type="button"
            >
              <img
                src={isActive ? iconAgenda : iconAgendaBlanc}
                className="ml-7 mr-4"
                alt="icon"
              />
              <p
                className={
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-500 font-semibold"
                }
              >
                Agenda
              </p>
            </button>
          )}
        </NavLink>
      </div>
      <div className="border-t-2 mt-20 ml-4 mr-4">
        <p className="m-3 text-gray-500 font-semibold text-sm">Des nouvelles</p>

        <NavLink to={`/patients/${id}/notifications`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "bg-indigo-500 flex items-center rounded-lg w-[90%] h-14"
                  : "flex items-center rounded-lg w-[100%] h-14"
              }
              type="button"
            >
              <img className="ml-7 mr-4" src={iconNotif} alt="icon" />
              <p
                className={
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-500 font-semibold"
                }
              >
                Notification
              </p>
            </button>
          )}
        </NavLink>

        <NavLink to={`/patients/${id}/messagerie`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "bg-indigo-500 flex items-center rounded-lg w-[90%] h-14"
                  : "flex items-center rounded-lg w-[100%] h-14"
              }
              type="button"
            >
              <img className="ml-7 mr-4 fill-black" src={iconChat} alt="icon" />
              <p
                className={
                  isActive
                    ? "text-white font-semibold"
                    : "text-gray-500 font-semibold"
                }
              >
                Messagerie
              </p>
            </button>
          )}
        </NavLink>
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
