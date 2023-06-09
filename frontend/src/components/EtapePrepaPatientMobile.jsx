import { Link, useParams } from "react-router-dom";

export default function EtapePrepaPatientMobile() {
  const { id } = useParams();
  return (
    <div className="m-8">
      <Link to={`/patient/${id}/comprendre-mon-operation`}>
        <button type="button" className="w-[100%] h-20 rounded-xl bg-amber-300">
          <p className="p-4 text-base w-52 text-white">
            Comprendre mon opération
          </p>
        </button>
      </Link>
      <Link to="/démarches-administratives">
        <button
          type="button"
          className="w-[100%] h-20 rounded-xl mt-4 bg-teal-400"
        >
          <p className="p-4 text-base w-52 text-white">
            Finir les démarches administratives
          </p>
        </button>
      </Link>
      <Link to="/Préparer-mon-arrivée">
        <button
          type="button"
          className="w-[100%] h-20 rounded-xl mt-4 bg-rose-400"
        >
          <p className="p-4 text-base w-52 text-white">
            Préparer mon arrivée en toute sérénité
          </p>
        </button>
      </Link>
      <Link to="/Anticiper-ma-sortie">
        <button
          type="button"
          className="w-[100%] h-20 rounded-xl mt-4 bg-lime-300"
        >
          <p className="p-4 text-base w-52 text-white">Anticiper ma sortie</p>
        </button>
      </Link>
      <Link to="/Ma-check-list">
        <button
          type="button"
          className="w-[100%] h-20 rounded-xl mt-4 bg-indigo-500"
        >
          <p className="p-4 text-base w-54 text-white">
            Ma check-list avant le départ à la Clinique
          </p>
        </button>
      </Link>
    </div>
  );
}
