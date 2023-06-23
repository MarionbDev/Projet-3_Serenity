import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import logoPraticient from "../assets/logo/logoDoctor/Chart.png";
import logoPatient from "../assets/logo/logoDoctor/Discovery.png";
import logoInterventions from "../assets/logo/logoDoctor/Wallet.png";
import logoAvatar from "../assets/logo/logoPatient/avatar1.png";
import logoActivity from "../assets/logo/logoPatient/activite.png";
import serenity from "../assets/logo/logoPatient/logoSerenity.png";

export default function SideBarDoctor() {
  const [doctor, setDoctor] = useState({});
  const { id } = useParams();
  const { idDoctor } = useUserContext();

  const getAllPraticien = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/doctors/${idDoctor}/`)
      .then((res) => res.json())
      .then((data) => {
        setDoctor(data);
        console.warn(data);
      });
  };
  useEffect(() => {
    if (idDoctor !== "") {
      getAllPraticien();
      console.warn(doctor);
    }
  }, []);

  return (
    <div className="min-h-screen w-64 border-r-[1px] border-[#a5a5a5]/20  fixed ">
      <div className="flex pt-[59px] pl-8 ">
        <img src={serenity} alt="logo" className="w-[45px] h-[42px] " />
        <p className="text-white text-[20px] ml-2 ">SERENITY</p>
      </div>

      <div className="mt-20 ml-4">
        <p className="text-gray-500 text-[12px] pb-4 ml-7">
          Console d'administration
        </p>
        <NavLink to={`/doctors/${id}/`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? " flex items-center bg-indigo-500 rounded-lg w-[90%] h-14"
                  : "flex items-center rounded-lg w-[90%] h-14 "
              }
              type="button"
            >
              <img className="ml-7 mr-2" src={logoActivity} alt="icon" />
              <p
                className={
                  isActive
                    ? "m-2 text-white font-semibold"
                    : "m-2 text-gray-500 font-semibold"
                }
              >
                Mon activité
              </p>
            </button>
          )}
        </NavLink>

        <NavLink to={`/doctors/${id}/praticiens`}>
          {({ isActive }) => (
            <button
              type="button"
              className={
                isActive
                  ? " flex items-center bg-indigo-500 rounded-lg w-[90%] h-14"
                  : "flex items-center rounded-lg w-[90%] h-14 "
              }
            >
              <img className="ml-7 mr-2" src={logoPraticient} alt="icon" />
              <p
                className={
                  isActive
                    ? "m-2 text-white font-semibold"
                    : "m-2 text-gray-500 font-semibold"
                }
              >
                Praticiens
              </p>
            </button>
          )}
        </NavLink>

        <NavLink to={`/doctors/${id}/patients`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? " flex items-center bg-indigo-500 rounded-lg w-[90%] h-14"
                  : "flex items-center rounded-lg w-[90%] h-14 "
              }
              type="button"
            >
              <img className="ml-7 mr-2" src={logoPatient} alt="icon" />
              <p
                className={
                  isActive
                    ? "m-2 text-white font-semibold"
                    : "m-2 text-gray-500 font-semibold"
                }
              >
                Patients
              </p>
            </button>
          )}
        </NavLink>

        <NavLink to={`/doctors/${id}/interventions`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? " bg-indigo-500 flex items-center rounded-lg w-[90%] h-14"
                  : "flex items-center rounded-lg w-[90%] h-14"
              }
              type="button"
            >
              <img
                className="ml-7 mr-2 w-[24px] h-[24px]"
                src={logoInterventions}
                alt="icon"
              />
              <p
                className={
                  isActive
                    ? "text-white font-semibold"
                    : "m-3 text-gray-500 font-semibold"
                }
              >
                Intervention
              </p>
            </button>
          )}
        </NavLink>
      </div>

      <div className="mt-48 ml-4 flex">
        <img className="ml-4 w-14" src={logoAvatar} alt="avatar" />
        <p className="m-3 text-gray-500 font-semibold">Dr {doctor.lastname} </p>
      </div>
    </div>
  );
}
