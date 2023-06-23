import { Link } from "react-router-dom";
import Arrow from "../assets/images/Arrow.png";

import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";

function PreparationEtapeFive() {
  return (
    <>
      <div className="mb-20 ">
        <HeaderMobilePrepaPatient />
        <Link to="/patients/:id">
          <img src={Arrow} alt="doc14" className="mb-2 ml-3" />
        </Link>
        <HeaderPreparation
          text="Ma check list avant le départ à la Clinique"
          color="bg-indigo-500"
        />
      </div>
      <div className="flex flex-col ml-10">
        <div className="mb-10">
          <label className="w-36 h-12 p-5 rounded-xl container shadow-md">
            <input type="checkbox" className="mr-2" />
            Pièce d'identité
          </label>
        </div>
        <div className="mb-10">
          <label className="w-36 h-12 p-5 rounded-xl container shadow-md">
            <input type="checkbox" className="mr-2" />
            Consultation anesthésique
          </label>
        </div>
        <div className="mb-10">
          <label className="w-36 h-12 p-5 rounded-xl container shadow-md">
            <input type="checkbox" className="mr-2" />
            Test Covid
          </label>
        </div>
        <div>
          <label className="w-36 h-12 p-5 rounded-xl container shadow-md">
            <input type="checkbox" className="mr-2" />
            Carte bleue
          </label>
        </div>
      </div>
    </>
  );
}

export default PreparationEtapeFive;
