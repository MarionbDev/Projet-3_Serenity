import { Link } from "react-router-dom";
import Arrow from "../assets/images/Arrow.png";
import { useUserContext } from "../contexts/UserContext";

import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";
import ImageListTwo from "../componentsPatient/mobile/ImageListTwo";

function PreparationEtapeTwo() {
  const { idPatient } = useUserContext();

  return (
    <div>
      <HeaderMobilePrepaPatient />
      <Link to={`/patients/${idPatient}/ma-preparation`}>
        <img src={Arrow} alt="doc11" className="mb-2 ml-3" />
      </Link>
      <HeaderPreparation
        text="finir les démarches administratives"
        color="bg-teal-400"
      />
      <p className="ml-14 mb-2">Quelques documents</p>
      <ImageListTwo />
    </div>
  );
}

export default PreparationEtapeTwo;
