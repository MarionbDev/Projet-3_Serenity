import { Link } from "react-router-dom";
import Arrow from "../assets/images/Arrow.png";
import { useUserContext } from "../contexts/UserContext";

import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";

function PreparationEtapeThree() {
  const { idPatient } = useUserContext();

  return (
    <>
      <div>
        <HeaderMobilePrepaPatient />
        <Link to={`/patients/${idPatient}`}>
          <img src={Arrow} alt="doc12" className="mb-2 ml-3" />
        </Link>
        <HeaderPreparation
          text="Préparer mon arrivée en toute sérénité"
          color="bg-pink-400"
        />
        <p className="ml-10 mb-2">
          Préparons nous à vivre la journée de l'intervention une première fois,
          histoire d'être en toute sérénité le jour J{" "}
        </p>
      </div>
      <Link to={`/patients/${idPatient}/preparer-mon-arrivee/1`}>
        <button
          type="button"
          className="flex items-center rounded-xl m-8 p-4 h-14 text-xl mt-20 bg-pink-400"
        >
          <p className="p-4 w-52 text-white">Je commence !</p>
        </button>
      </Link>
    </>
  );
}

export default PreparationEtapeThree;
