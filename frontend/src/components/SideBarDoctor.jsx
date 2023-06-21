import { NavLink, useParams } from "react-router-dom";
import logoPraticient from "../assets/logo/logoDoctor/Chart.png";
import logoPatient from "../assets/logo/logoDoctor/Discovery.png";
import logoInterventions from "../assets/logo/logoDoctor/Wallet.png";
import logoAvatar from "../assets/logoPatient/avatar1.png";
import logoActivity from "../assets/logoDoctor/activite.png";
import serenity from "../assets/logoDoctor/logoSerenity.png";

export default function SideBarDoctor() {
  const { id } = useParams();

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
        <NavLink to={`/doctor/${id}/`}>
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

        <NavLink to={`/doctor/${id}/praticien`}>
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

        <NavLink to={`/doctor/${id}/patients`}>
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

        <NavLink to={`/doctor/${id}/intervention`}>
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
        <p className="m-3 text-gray-500 font-semibold">Dr Bé Bert</p>
      </div>
    </div>
  );
}
