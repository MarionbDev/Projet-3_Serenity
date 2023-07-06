import { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/images/Arrow.png";
import { useUserContext } from "../contexts/UserContext";

import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";
import LatLongApi from "../pages/LatLongApi";

function PreparationEtapeFour() {
  const { idPatient } = useUserContext();
  const [mapIsVisible, setMapIsVisible] = useState(false);

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
        {mapIsVisible ? (
          <LatLongApi />
        ) : (
          <button
            type="button"
            className="flex justify-center mb-1 rounded-xl mt-4 bg-green-400"
            onClick={() => {
              setMapIsVisible(true);
            }}
          >
            <p className="p-4 text-base w-52 text-white">
              Afficher les Spécialistes autour de chez moi
            </p>
          </button>
        )}
      </div>
    </>
  );
}

export default PreparationEtapeFour;
