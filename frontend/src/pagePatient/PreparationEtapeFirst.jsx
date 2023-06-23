import { Link } from "react-router-dom";
import Arrow from "../assets/images/Arrow.png";

import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";
import ImageList from "../componentsPatient/mobile/ImageList";
import VideoList from "../componentsPatient/mobile/VideoList";

function PreparationEtapeFirst() {
  return (
    <div>
      <HeaderMobilePrepaPatient />
      <Link to="/patients/:id">
        <img src={Arrow} alt="doc10" className="mb-2 ml-3" />
      </Link>
      <HeaderPreparation text="Comprendre mon opération" color="bg-amber-300" />
      <p className="ml-14 mb-2">Schémas et documentations</p>
      <ImageList />
      <VideoList />
    </div>
  );
}

export default PreparationEtapeFirst;
