import { NavLink, useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import logoPraticient from "../assets/logo/logoDoctor/Chart.png";
import logoPatient from "../assets/logo/logoDoctor/Discovery.png";
import logoInterventions from "../assets/logo/logoDoctor/Wallet.png";
import logoActivity from "../assets/logo/logoPatient/activite.png";

export default function SideBarDoctor() {
  const [doctor, setDoctor] = useState({});
  const { id } = useParams();
  const navigate = useNavigate();
  const { idDoctor, setIdDoctor } = useUserContext();

  const getAllPraticien = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/doctors/${idDoctor}/`, {
      credentials: "include",
    })
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

  const handleLogout = () => {
    setIdDoctor("");
    navigate("/");
  };

  return (
    <div className=" md:min-h-screen md:mt-3 md:w-64 md:border-r-[1px] md:border-[#a5a5a5]/20  md:fixed ">
      <div className="flex flex-col items-center md:items-start md:mt-40 lg:mt-36 md:ml-4">
        <p className="text-gray-500 invisible  text-[12px] md:visible  md:pb-4">
          Console d'administration
        </p>

        <div className="flex flex-col w-[100%] px-8 mt-6 sm:px-0 sm:pr-8 sm:mt-0">
          <NavLink to={`/doctors/${id}/`}>
            {({ isActive }) => (
              <div className=" mb-5 shadow-slate-950/80 shadow-lg border-[#a5a5a5]/20  border-2 py-5 px-12 rounded-lg md:px-0 md:py-1 md:border-none md:mb-0 md:shadow-none">
                <button
                  className={
                    isActive
                      ? " flex md:items-center md:bg-indigo-500 rounded-lg md:w-[13rem]  md:h-14"
                      : "flex md:items-center md:rounded-lg md:h-14 md:w-[13rem]"
                  }
                  type="button"
                >
                  <img
                    className=" mr-4 md:ml-7 md:mr-2"
                    src={logoActivity}
                    alt="icon"
                  />
                  <p
                    className={
                      isActive
                        ? "md:m-2 text-[#FFFFFF] font-semibold"
                        : "text-[#FFFFFF] md:m-2 md:text-gray-500 font-semibold"
                    }
                  >
                    Mon activité
                  </p>
                </button>
              </div>
            )}
          </NavLink>

          <NavLink to={`/doctors/${id}/praticiens`}>
            {({ isActive }) => (
              <div className=" mb-5 shadow-slate-950/80 shadow-lg border-[#a5a5a5]/20  border-2 py-5 px-12 rounded-lg md:px-0 md:py-1 md:border-none md:mb-0 md:shadow-none ">
                <button
                  type="button"
                  className={
                    isActive
                      ? " flex md:items-center bg-indigo-500 rounded-lg md:w-[13rem] md:h-14"
                      : "flex md:items-center rounded-lg md:w-[13rem] md:h-14 "
                  }
                >
                  <img
                    className="mr-4 md:ml-7 md:mr-2"
                    src={logoPraticient}
                    alt="icon"
                  />
                  <p
                    className={
                      isActive
                        ? "md:m-2 text-[#FFFFFF] font-semibold"
                        : "text-[#FFFFFF] md:m-2 md:text-gray-500 font-semibold"
                    }
                  >
                    Praticiens
                  </p>
                </button>
              </div>
            )}
          </NavLink>

          <NavLink to={`/doctors/${id}/patients`}>
            {({ isActive }) => (
              <div className=" mb-5 shadow-slate-950/80 shadow-lg border-[#a5a5a5]/20  border-2 py-5 px-12 rounded-lg md:px-0 md:py-1 md:border-none md:mb-0 md:shadow-none">
                <button
                  className={
                    isActive
                      ? " flex md:items-center bg-indigo-500 rounded-lg md:w-[13rem] md:h-14"
                      : "flex items-center rounded-lg md:w-[13rem] md:h-14 "
                  }
                  type="button"
                >
                  <img
                    className="mr-4 md:ml-7 md:mr-2"
                    src={logoPatient}
                    alt="icon"
                  />
                  <p
                    className={
                      isActive
                        ? "md:m-2 text-[#FFFFFF] font-semibold"
                        : "text-[#FFFFFF] md:m-2 md:text-gray-500 font-semibold"
                    }
                  >
                    Patients
                  </p>
                </button>
              </div>
            )}
          </NavLink>

          <NavLink to={`/doctors/${id}/interventions`}>
            {({ isActive }) => (
              <div className=" mb-5 shadow-slate-950/80 shadow-lg border-[#a5a5a5]/20  border-2 py-5 px-12 rounded-lg md:px-0 md:py-1 md:border-none md:mb-0 md:shadow-none ">
                <button
                  className={
                    isActive
                      ? " bg-indigo-500 flex md:items-center rounded-lg md:w-[13rem] md:h-14"
                      : "flex md:items-center rounded-lg md:w-[13rem] md:h-14"
                  }
                  type="button"
                >
                  <img
                    className="mr-4 md:ml-7 md:mr-2 md:w-[24px] md:h-[24px]"
                    src={logoInterventions}
                    alt="icon"
                  />
                  <p
                    className={
                      isActive
                        ? "md:m-2 text-[#FFFFFF] font-semibold"
                        : "text-[#FFFFFF] md:m-2 md:text-gray-500 font-semibold"
                    }
                  >
                    Interventions
                  </p>
                </button>
              </div>
            )}
          </NavLink>
        </div>
        <div className="  mt-48 shadow-slate-950/80 shadow-lg py-5 px-12 rounded-lg md:px-0 md:py-1 md:border-none md:mb-0 md:shadow-none  ">
          <Link to="/">
            <button
              type="button"
              onClick={handleLogout}
              className=" flex justify-center  text-gray-500 border-2 border-gray-700 hover:text-[#FFFFFF] hover:bg-slate-700 duration-300 md:items-center rounded-lg md:w-[13rem] md:h-14"
            >
              <p className="md:m-2 font-semibold">Déconnexion</p>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
