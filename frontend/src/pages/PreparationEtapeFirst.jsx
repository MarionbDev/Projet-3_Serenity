import HeaderMobilePrepaPatient from "../components/HeaderMobilePrepaPatient";
import HeaderPreparation from "../components/HeaderPreparation";
import ImageList from "../components/ImageList";
import VideoList from "../components/VideoList";

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
