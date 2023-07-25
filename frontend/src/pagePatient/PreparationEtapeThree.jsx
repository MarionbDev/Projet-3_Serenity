/* eslint-disable jsx-a11y/media-has-caption */
import { Link } from "react-router-dom";
import Arrow from "../assets/images/Arrow.png";
import { useUserContext } from "../contexts/UserContext";
import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";
import nature from "../assets/videos/nature.mp4";
import relax2 from "../assets/videos/relax2.mp4";

function PreparationEtapeThree() {
  const { idPatient } = useUserContext();

  return (
    <div>
      <HeaderMobilePrepaPatient />
      <Link to={`/patients/${idPatient}/ma-preparation`}>
        <img src={Arrow} alt="doc15" className="mb-8 ml-8" />
      </Link>
      <HeaderPreparation
        text="Préparer mon arrivée en toute sérénité"
        color="bg-pink-400"
      />
      <div className="flex flex-col items-center">
        <p className=" mb-8 text-xl">Votre parcours en quelques étapes</p>
        <div className="mb-8">
          <video controls width="300">
            <source src={nature} />
          </video>{" "}
        </div>
        <div className="mb-8">
          <video controls width="300">
            <source src={relax2} />
          </video>
        </div>
      </div>
    </div>
  );
}

export default PreparationEtapeThree;
