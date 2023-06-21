import { NavLink, useParams } from "react-router-dom";
import logoPraticient from "../assets/logo/logoDoctor/Chart.png";
import logoPatient from "../assets/logo/logoDoctor/Discovery.png";

export default function SideBarDoctor() {
  const { id } = useParams();

  return (
    <div className="min-h-screen w-64 border-r-[1px] border-[#a5a5a5]/20  fixed ">
      <div className="pt-6 pl-8 ">
        <img src={logoPraticient} alt="logo" />
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
              <img
                className="ml-6 mr-2"
                src="/src/assets/logo/icon1.png"
                alt="icon"
              />
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
                src="/src/assets/logo/Wallet.png"
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
        <img
          className="ml-4 w-14"
          src="/src/assets/logo/avatar1.png"
          alt="avatar"
        />
        <p className="m-3 text-gray-500 font-semibold">Dr Bé Bert</p>
      </div>
    </div>
  );
}
