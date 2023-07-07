import { Link } from "react-router-dom";
import Arrow from "../assets/images/Arrow.png";
import { useUserContext } from "../contexts/UserContext";

import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";
import ImageListThree from "../componentsPatient/mobile/ImageListThree";

function PrepaEtapeThreeOne() {
  const { idPatient } = useUserContext();

  return (
    <>
      <div>
        <HeaderMobilePrepaPatient />
        <Link to={`/patients/${idPatient}/ma-preparation/preparer-mon-arrivee`}>
          <img src={Arrow} alt="doc15" className="mb-2 ml-3" />
        </Link>
        <HeaderPreparation
          text="Préparer mon arrivée en toute sérénité"
          color="bg-pink-400"
        />
        <p className="ml-14 mb-2">Votre parcours en quelques étapes</p>
        <p className="ml-40 mb-2 w-44 h-auto text-sm text-blue-400">Etape 1</p>
        <p className="ml-28 mb-2 w-44 h-auto text-sm">La douche bétadinée</p>
      </div>
      <ImageListThree />
      <div>
        {" "}
        <Link
          to={`/patients/${idPatient}/ma-preparation/preparer-mon-arrivee/2`}
        >
          <button
            type="button"
            className="flex items-center rounded-xl m-8 p-4 h-14 text-xl mt-5 bg-pink-400"
          >
            <p className="p-4 w-52 text-white">Suivant</p>
          </button>
        </Link>
      </div>
    </>
  );
}

export default PrepaEtapeThreeOne;
