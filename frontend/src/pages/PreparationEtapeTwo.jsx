import HeaderMobilePrepaPatient from "../components/HeaderMobilePrepaPatient";
import HeaderPreparation from "../components/HeaderPreparation";
import ImageListTwo from "../components/ImageListTwo";

function PreparationEtapeTwo() {
  return (
    <div>
      <HeaderMobilePrepaPatient />
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
