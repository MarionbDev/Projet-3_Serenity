/* eslint-disable jsx-a11y/media-has-caption */

import { Link } from "react-router-dom";
import Arrow from "../assets/images/Arrow.png";
import { useUserContext } from "../contexts/UserContext";
import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";
import relax2 from "../assets/videos/relax2.mp4";

function PrepaEtapeThreeOne() {
  const { idPatient } = useUserContext();

  return (
    <div>
      <HeaderMobilePrepaPatient />
      <Link to={`/patients/${idPatient}/ma-preparation/preparer-mon-arrivee/1`}>
        <img src={Arrow} alt="doc15" className="mb-8 ml-8" />
      </Link>
      <HeaderPreparation
        text="Préparer mon arrivée en toute sérénité"
        color="bg-pink-400"
      />
      <div className="flex items-center flex-col">
        <p className="flex mb-2 text-xl">Votre parcours en quelques étapes</p>
        <p className="flex mb-2 text-lg text-blue-400 ">Etape 2</p>
        <p className="flex text-base mb-8">Votre dossier administratif</p>

        <video controls width="300">
          <source src={relax2} />
        </video>
        <label className="flex items-center w-40 h-14 mt-8 rounded-xl shadow-md">
          <input type="checkbox" className="ml-4 mr-2" />
          Pièce d'identité
          <span className="checkmark" />
        </label>

        <label className="flex items-center w-40 h-14 mt-4 mb-8 rounded-xl shadow-md">
          <input type="checkbox" className="ml-4 mr-2" />
          Test covid
          <span className="checkmark" />
        </label>
      </div>

      <div className="flex flex-row justify-around mb-8">
        <Link
          to={`/patients/${idPatient}/ma-preparation/preparer-mon-arrivee/1`}
        >
          <button
            type="button"
            className="rounded-xl h-14 text-xl mt-5 bg-blue-400 w-32"
          >
            <p className="text-white">Précédent</p>
          </button>
        </Link>
        <Link to={`/patients/${idPatient}/ma-preparation/preparer-mon-arrivee`}>
          <button
            type="button"
            className="rounded-xl h-14 text-xl mt-5 bg-green-400 w-32"
          >
            <p className="text-white">Terminer</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PrepaEtapeThreeOne;
