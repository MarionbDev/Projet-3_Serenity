/* eslint-disable jsx-a11y/media-has-caption */

import { Link } from "react-router-dom";
import Arrow from "../assets/images/Arrow.png";
import { useUserContext } from "../contexts/UserContext";
import nature from "../assets/videos/nature.mp4";

import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";

function PrepaEtapeThreeOne() {
  const { idPatient } = useUserContext();

  return (
    <div>
      <HeaderMobilePrepaPatient />
      <Link to={`/patients/${idPatient}/ma-preparation/preparer-mon-arrivee`}>
        <img src={Arrow} alt="doc15" className="mb-8 ml-8" />
      </Link>
      <HeaderPreparation
        text="Préparer mon arrivée en toute sérénité"
        color="bg-pink-400"
      />
      <div className="flex flex-col items-center">
        <p className=" mb-2 text-xl">Votre parcours en quelques étapes</p>
        <p className=" mb-2 text-lg text-blue-400">Etape 1</p>
        <p className="text-base mb-8">La douche bétadinée</p>
        <video controls width="300">
          <source src={nature} />
        </video>{" "}
      </div>
      <div className="flex flex-row justify-around mt-8 mb-8">
        <Link to={`/patients/${idPatient}/ma-preparation/preparer-mon-arrivee`}>
          <button
            type="button"
            className="rounded-xl h-14 text-xl mt-5 bg-blue-400 w-32"
          >
            <p className="text-white">Précédent</p>
          </button>
        </Link>
        <Link
          to={`/patients/${idPatient}/ma-preparation/preparer-mon-arrivee/2`}
        >
          <button
            type="button"
            className="rounded-xl h-14 text-xl mt-5 bg-pink-400 w-32"
          >
            <p className="text-white">Suivant</p>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PrepaEtapeThreeOne;
