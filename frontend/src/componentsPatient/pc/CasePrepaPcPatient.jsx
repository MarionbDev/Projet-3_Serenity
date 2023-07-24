import { NavLink, useParams, Outlet } from "react-router-dom";
import SideBarPrepaPc from "./SideBarPrepaPc";
import HeaderPrepaPatientPc from "./HeaderPrepaPatientPc";

export default function CasePrepaPcPatient() {
  const { id } = useParams();

  return (
    <div className="min-h-screen">
      <SideBarPrepaPc />
      <div className="">
        <HeaderPrepaPatientPc />
      </div>
      <div className=" ml-72 mr-8 flex gap-4 justify-evenly flex-wrap mt-20">
        <NavLink to={`/patients/${id}/ma-preparation/comprendre-mon-operation`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "border-4 border-yellow-500 rounded-2xl h-32 w-32 "
                  : "border-4 hover:border-yellow-500 duration-300  bg-gray-200 rounded-2xl h-32 w-32"
              }
              type="button"
            >
              <p>Comprendre mon opération</p>
            </button>
          )}
        </NavLink>

        <NavLink
          to={`/patients/${id}/ma-preparation/demarches-administratives`}
        >
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "border-4 rounded-2xl border-cyan-400 w-32 h-32 "
                  : "border-4 hover:border-cyan-400 bg-gray-200 duration-300 rounded-2xl w-32 h-32"
              }
              type="button"
            >
              <p>Se débarasser des formalitées administrative</p>
            </button>
          )}
        </NavLink>

        <NavLink to={`/patients/${id}/ma-preparation/preparer-mon-arrivee`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "border-4 rounded-2xl border-pink-400 h-32 w-32 duration-300"
                  : "border-4 hover:border-pink-400 bg-gray-200 duration-300 rounded-2xl h-32 w-32"
              }
              type="button"
            >
              <p>Préparer mon arrivée en toute sérénité</p>
            </button>
          )}
        </NavLink>

        <NavLink to={`/patients/${id}/ma-preparation/anticiper-ma-sortie`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "border-4 rounded-2xl border-green-400 h-32 w-32 duration-300"
                  : "border-4 hover:border-green-400 duration-300 bg-gray-200 rounded-2xl h-32 w-32"
              }
              type="button"
            >
              <p>Anticiper ma sortie</p>
            </button>
          )}
        </NavLink>

        <NavLink to={`/patients/${id}/ma-preparation/Ma-check-list`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "border-4 rounded-2xl border-indigo-500 duration-300 h-32 w-32"
                  : "border-4 hover:border-indigo-500 duration-300 bg-gray-200 rounded-2xl h-32 w-32"
              }
              type="button"
            >
              <p>Ma check list avant mon départ pour la clinique</p>
            </button>
          )}
        </NavLink>
        <Outlet />
      </div>
    </div>
  );
}
