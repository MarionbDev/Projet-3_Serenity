import { Link } from "react-router-dom";
import { useUserContext } from "../../contexts/UserContext";

export default function EtapePrepaPatientMobile() {
  const { idPatient } = useUserContext();
  return (
    <div className="m-8">
      <Link
        to={`/patients/${idPatient}/ma-preparation/comprendre-mon-operation`}
      >
        <button type="button" className="w-[100%] h-20 rounded-xl bg-amber-300">
          <p className="flex justify-center pl-4 text-base text-white font-semibold">
            Comprendre mon opération
          </p>
        </button>
      </Link>
      <Link
        to={`/patients/${idPatient}/ma-preparation/demarches-administratives`}
      >
        <button
          type="button"
          className="w-[100%] h-20 rounded-xl mt-4 bg-teal-400"
        >
          <p className="flex justify-center text-base text-white font-semibold">
            Finir les démarches administratives
          </p>
        </button>
      </Link>
      <Link to={`/patients/${idPatient}/ma-preparation/preparer-mon-arrivee`}>
        <button
          type="button"
          className="w-[100%] h-20 rounded-xl mt-4 bg-rose-400"
        >
          <p className="flex justify-center text-base text-white font-semibold">
            Préparer mon arrivée en toute sérénité
          </p>
        </button>
      </Link>
      <Link to={`/patients/${idPatient}/ma-preparation/anticiper-ma-sortie`}>
        <button
          type="button"
          className="w-[100%] h-20 rounded-xl mt-4 bg-green-400"
        >
          <p className="flex justify-center text-base text-white font-semibold">
            Anticiper ma sortie
          </p>
        </button>
      </Link>
      <Link to={`/patients/${idPatient}/ma-preparation/Ma-check-list`}>
        <button
          type="button"
          className="w-[100%] h-20 rounded-xl mt-4 bg-indigo-500"
        >
          <p className="flex justify-center text-base text-white font-semibold">
            Ma check-list avant le départ à la Clinique
          </p>
        </button>
      </Link>
    </div>
  );
}
