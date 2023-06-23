import { NavLink, useParams, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";
import avatar from "../../assets/logo/logoPatient/avatar1.png";
import logoSerenity from "../../assets/logo/logoPatient/logo1.png";
import iconPrepa from "../../assets/logo/logoPatient/preparation.png";
import iconBag from "../../assets/logo/logoPatient/Bag.png";
import iconAgenda from "../../assets/logo/logoPatient/Chart.png";
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
      <div className="pt-6 pl-8 ">
        <img src={logoSerenity} alt="logo" />
      </div>
      <div className="mt-20 ml-4">
        <NavLink to={``}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "bg-indigo-500 flex items-center rounded-lg w-[90%] h-14"
                  : ""
              }
              type="button"
            >
              <img className="ml-6 mr-2" src={iconPrepa} alt="icon" />
              <p className="m-2 text-white font-semibold">Ma préparation</p>
            </button>
          )}
        </NavLink>

        <NavLink to={``}>
          {({ isActive }) => (
            <button
              className={
                isActive ? "flex items-center rounded-lg w-[100%] h-14" : ""
              }
              type="button"
            >
              <img className="ml-7 mr-2" src={iconBag} alt="icon" />
              <p className="m-3 text-gray-500 font-semibold">
                Gagner en sérénité
              </p>
            </button>
          )}
        </NavLink>

        <NavLink to={``}>
          {({ isActive }) => (
            <button
              className={
                isActive ? "flex items-center rounded-lg w-[90%] h-14" : ""
              }
              type="button"
            >
              <img className="ml-7 mr-2" src={iconAgenda} alt="icon" />
              <p className="m-3 text-gray-500 font-semibold">Agenda</p>
            </button>
          )}
        </NavLink>
      </div>
      <div className="border-t-2 mt-20 ml-4 mr-4">
        <p className="m-3 text-gray-500 font-semibold text-sm">Des nouvelles</p>

        <NavLink to={``}>
          {({ isActive }) => (
            <button
              className={
                isActive ? "flex items-center rounded-lg w-[90%] h-14" : ""
              }
              type="button"
            >
              <img className="ml-7 mr-2" src={iconNotif} alt="icon" />
              <p className="m-3 text-gray-500 font-semibold">Notification</p>
            </button>
          )}
        </NavLink>

        <NavLink to={``}>
          {({ isActive }) => (
            <button
              className={
                isActive ? "flex items-center rounded-lg w-[90%] h-14" : ""
              }
              type="button"
            >
              <img className="ml-7 mr-2 fill-black" src={iconChat} alt="icon" />
              <p className="m-3 text-gray-500 font-semibold">Messagerie</p>
            </button>
          )}
        </NavLink>
      </div>
      <div className=" mt-40 ml-4 flex">
        {interventionInfo.image !== null ? (
          interventionInfo.image
        ) : (
          <img className="ml-4 w-14" src={avatar} alt="avatar" />
        )}

        <p className="m-3 text-gray-500 font-semibold">
          {interventionInfo.firstname}
        </p>
      </div>
      <Outlet />
    </div>
  );
}
