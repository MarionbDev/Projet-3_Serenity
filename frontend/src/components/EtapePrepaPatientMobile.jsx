import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export default function EtapePrepaPatientMobile() {
  const { idPatient } = useUserContext();
  return (
    <div className="m-8">
      <Link to={`/patient/${idPatient}/comprendre-mon-operation`}>
        <button type="button" className="w-[100%] h-20 rounded-xl bg-amber-300">
          <p className="flex justify-start pl-4 -mt-6 text-xs text-white font-semibold">
            Comprendre mon opération
          </p>
        </button>
      </Link>
      <Link to="/demarches-administratives">
        <button
          type="button"
          className="w-[100%] h-20 rounded-xl mt-4 bg-teal-400"
        >
          <p className="flex justify-start pl-4 -mt-6 text-xs text-white font-semibold">
            Finir les démarches administratives
          </p>
        </button>
      </Link>
      <Link to="/Préparer-mon-arrivée">
        <button
          type="button"
          className="w-[100%] h-20 rounded-xl mt-4 bg-rose-400"
        >
          <p className="flex justify-start pl-4 -mt-6 text-xs text-white font-semibold">
            Préparer mon arrivée en toute sérénité
          </p>
        </button>
      </Link>
      <Link to="/Anticiper-ma-sortie">
        <button
          type="button"
          className="w-[100%] h-20 rounded-xl mt-4 bg-lime-300"
        >
          <p className="flex justify-start pl-4 -mt-6 text-xs text-white font-semibold">
            Anticiper ma sortie
          </p>
        </button>
      </Link>
      <Link to="/Ma-check-list">
        <button
          type="button"
          className="w-[100%] h-20 rounded-xl mt-4 bg-indigo-500"
        >
          <p className="p-4 text-base w-52 text-white">
            Ma check-list avant le départ à la Clinique
          </p>
        </button>
      </Link>
    </div>
  );
}
