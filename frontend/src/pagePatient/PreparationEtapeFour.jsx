import { Link } from "react-router-dom";
import Arrow from "../assets/images/Arrow.png";
import { useUserContext } from "../contexts/UserContext";

import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";

function PreparationEtapeFour() {
  const { idPatient } = useUserContext();

  return (
    <>
      <div>
        <HeaderMobilePrepaPatient />
        <Link to={`/patients/${idPatient}`}>
          <img src={Arrow} alt="doc13" className="mb-2 ml-3" />
        </Link>
        <HeaderPreparation
          text="Anticiper ma sortie en prenant rendez-vous"
          color="bg-green-400"
        />
        <p className="ml-10 mb-2 mr-5">
          Afin de securiser votre retour à la maison votre chirurgien vous
          invite à prendre rendez-vous avec les professionnels de santé suivant:
        </p>
      </div>
      <div className=" flex flex-col m-8 ">
        <button
          type="button"
          className="flex justify-center w-36 h-12 mb-1 rounded-xl bg-green-400"
        >
          <p className="p-4 text-base w-52 text-white">Kinésithérapeute</p>
        </button>
        <button
          value="Infirmier"
          type="button"
          className="flex justify-center w-36 h-12 mb-1 rounded-xl mt-4 bg-green-400"
        >
          <p className="p-4 text-base w-52 text-white">Infirmier</p>
        </button>
        <button
          value="Psychologue"
          type="button"
          className="flex justify-center w-36 h-12 mb-1 rounded-xl mt-4 bg-green-400"
        >
          <p className="p-4 text-base w-52 text-white">Psychologue</p>
        </button>
        <button
          type="button"
          className="flex justify-center w-36 h-12 mb-1 rounded-xl mt-4 bg-green-400"
        >
          <p className="p-4 text-base w-52 text-white">Ordonnance</p>
        </button>
      </div>
    </>
  );
}

export default PreparationEtapeFour;
