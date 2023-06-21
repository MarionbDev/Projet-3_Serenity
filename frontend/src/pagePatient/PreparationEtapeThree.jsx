import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";
// import { Link } from "react-router-dom";

function PreparationEtapeThree() {
  return (
    <div>
      <HeaderMobilePrepaPatient />
      <HeaderPreparation
        text="Préparer mon arrivée en toute sérénité"
        color="bg-pink-400"
      />
      <p className="ml-10 mb-2">
        Préparons nous à vivre la journée de l'intervention une première fois,
        histoire d'être en toute sérénité le jour J{" "}
      </p>
    </div>
    //   <Link to="/patient/:id/preparer-mon-arrivee">
    //   <button
    //     type="button"
    //     className="w-[100%] h-20 rounded-xl mt-4 bg-rose-400"
    //   >
    //     <p className="p-4 text-base w-52 text-white">
    //       Je commence !
    //     </p>
    //   </button>
    // </Link>
  );
}

export default PreparationEtapeThree;
