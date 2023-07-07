import { Link } from "react-router-dom";
import Arrow from "../assets/images/Arrow.png";
import { useUserContext } from "../contexts/UserContext";

import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";
import ImageListThree from "../componentsPatient/mobile/ImageListThree";

function PrepaEtapeThreeOne() {
  const { idPatient } = useUserContext();

  return (
    <div>
      <HeaderMobilePrepaPatient />
      <Link to={`/patients/${idPatient}/ma-preparation/preparer-mon-arrivee/1`}>
        <img src={Arrow} alt="doc15" className="mb-2 ml-3" />
      </Link>
      <HeaderPreparation
        text="Préparer mon arrivée en toute sérénité"
        color="bg-pink-400"
      />
      <p className="flex ml-14 mb-2">Votre parcours en quelques étapes</p>
      <p className="flex ml-40 mb-2 w-44 h-auto text-sm text-blue-400 ">
        Etape 2
      </p>
      <p className="flex ml-28 mb-2 w-44 h-auto text-sm">
        Votre dossier administratif
      </p>
      <ImageListThree />
      <div className="flex flex-col ml-10">
        <label className="w-36 h-12 mb-1 rounded-xl container shadow-md">
          <input type="checkbox" />
          Pièce d'identité
          <span className="checkmark" />
        </label>

        <label className="w-36 h-12 mb-1 rounded-xl container shadow-md">
          <input type="checkbox" />
          Test covid
          <span className="checkmark" />
        </label>
      </div>
    </div>
  );
}

export default PrepaEtapeThreeOne;
