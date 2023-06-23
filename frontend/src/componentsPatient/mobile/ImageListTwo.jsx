import image6 from "../../assets/images/Img6.png";
import image7 from "../../assets/images/Img7.png";
import image8 from "../../assets/images/Img8.png";

function ImageList() {
  return (
    <div className="flex justify-center">
      <div className="p-2 ml-3">
        <img src={image6} alt="doc6" className="ml-5 mx-1 w-30 h-auto" />
        <p className="ml-7 mb-2 w-44 h-auto text-sm">Fiche administrative</p>
        <img src={image6} alt="doc7" className="ml-5 mx-1 w-30 h-auto" />
        <p className="ml-7 mb-2 w-44 h-auto text-sm">Consentement éclairé</p>
      </div>
      <div className="p-2">
        <img src={image8} alt="doc8" className="mx-1 w-30 h-auto" />
        <p className="ml-5 mb-2 w-44 h-auto text-sm">Votre retour mutuelle</p>
        <img src={image7} alt="doc9" className="mx-1 w-30 h-auto" />
        <p className="ml-5 mb-2 w-44 h-auto text-sm">
          Avez-vous vu votre anesthésiste
        </p>
      </div>
    </div>
  );
}

export default ImageList;
