import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";
import ImageListTwo from "../componentsPatient/mobile/ImageListTwo";

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
