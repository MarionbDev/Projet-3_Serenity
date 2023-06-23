import { NavLink, useParams, Outlet } from "react-router-dom";

export default function CasePrepaPcPatient() {
  const { id } = useParams();

  return (
    <div className="fixed">
      <div className="flex justify-around ml-[256px] font-semibold text-xs">
        <NavLink to={`/patients/${id}/comprendre-mon-opération`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "mt-16 ml-16 border-4 border-yellow-500 rounded-2xl w-32 h-32"
                  : "mt-16 ml-16 border-4 bg-gray-200 rounded-2xl  w-32 h-32"
              }
              type="button"
            >
              <p>Comprendre mon opération</p>
            </button>
          )}
        </NavLink>

        <NavLink to={`/patients/${id}/demarches-administratives`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "mt-16 ml-16 border-4 rounded-2xl border-teal-600 w-32 h-32"
                  : "mt-16 ml-16 border-4 bg-gray-200 rounded-2xl  w-32 h-32"
              }
              type="button"
            >
              <p>Se débarasser des formalitées administrative</p>
            </button>
          )}
        </NavLink>

        <NavLink to={`/patients/${id}/preparer-mon-arrivee`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "mt-16 ml-16 border-4 rounded-2xl border-pink-400 w-32 h-32"
                  : "mt-16 ml-16 border-4 bg-gray-200 rounded-2xl  w-32 h-32"
              }
              type="button"
            >
              <p>Préparer mon arrivée en toute sérénité</p>
            </button>
          )}
        </NavLink>

        <NavLink to={`/patients/${id}/anticiper-ma-sortie`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "mt-16 ml-16 border-4 rounded-2xl border-green-400 w-32 h-32"
                  : "mt-16 ml-16 border-4 bg-gray-200 rounded-2xl  w-32 h-32"
              }
              type="button"
            >
              <p>Anticiper ma sortie</p>
            </button>
          )}
        </NavLink>

        <NavLink to={`/patients/${id}/Ma-check-list`}>
          {({ isActive }) => (
            <button
              className={
                isActive
                  ? "mt-16 ml-16 mr-16 border-4 rounded-2xl border-indigo-500 w-32 h-32"
                  : "mt-16 ml-16 border-4 bg-gray-200 rounded-2xl  w-32 h-32"
              }
              type="button"
            >
              <p>Ma check list avant mon départ pour la clinique</p>
            </button>
          )}
        </NavLink>
      </div>
      <Outlet />
    </div>
  );
}
