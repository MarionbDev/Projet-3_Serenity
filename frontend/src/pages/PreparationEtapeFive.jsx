import HeaderMobilePrepaPatient from "../components/HeaderMobilePrepaPatient";
import HeaderPreparation from "../components/HeaderPreparation";

function PreparationEtapeFive() {
  return (
    <>
      <div>
        <HeaderMobilePrepaPatient />
        <HeaderPreparation
          text="Ma check list avant le départ à la Clinique"
          color="bg-indigo-500"
        />
      </div>
      <div className="flex flex-col ml-10">
        <label className="w-36 h-12 mb-1 rounded-xl container shadow-md">
          <input type="checkbox" />
          Pièce d'identité
          <span className="checkmark" />
        </label>

        <label className="w-36 h-12 mb-1 rounded-xl container shadow-md">
          <input type="checkbox" />
          Consultation anesthésique
          <span className="checkmark" />
        </label>

        <label className="w-36 h-12 mb-1 rounded-xl container shadow-md">
          <input type="checkbox" />
          Test Covid
          <span className="checkmark" />
        </label>

        <label className="w-36 h-12 mb-1 rounded-xl container shadow-md">
          <input type="checkbox" />
          Carte bleue
          <span className="checkmark" />
        </label>
      </div>
    </>
  );
}

export default PreparationEtapeFive;
