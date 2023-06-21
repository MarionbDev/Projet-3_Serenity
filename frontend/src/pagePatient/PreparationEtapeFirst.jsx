import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";
import ImageList from "../componentsPatient/mobile/ImageList";
import VideoList from "../componentsPatient/mobile/VideoList";

function PreparationEtapeFirst() {
  return (
    <div>
      <HeaderMobilePrepaPatient />
      <HeaderPreparation text="Comprendre mon opération" color="bg-amber-300" />
      <p className="ml-14 mb-2">Schémas et documentations</p>
      <ImageList />
      <VideoList />
    </div>
  );
}

export default PreparationEtapeFirst;
