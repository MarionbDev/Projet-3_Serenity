import { useState, useEffect } from "react";
import image6 from "../../assets/images/Img6.png";
import image8 from "../../assets/images/Img8.png";
import { useUserContext } from "../../contexts/UserContext";

const fileTypes = [
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.oasis.opendocument.text",
  "text/csv",
  "image/png",
  "image/jpeg",
  "application/pdf",
];

function ImageList() {
  const [mutual, setMutual] = useState("");
  const [consent, setConsent] = useState("");
  const [administrativeSheet, setAdministrativeSheet] = useState("");
  const [intervention, setIntervention] = useState("");

  const { idPatient } = useUserContext();

  const getIntervention = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/patients/${idPatient}/home`,
      { credentials: "include" }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setIntervention(data);
      });
  };
  useEffect(() => {
    getIntervention();
  }, [idPatient]);

  const handleChangeUploadFile = (e) => {
    const fileSelected = e.target.files[0];
    // console.log(fileSelected.type);

    if (fileSelected && fileTypes.includes(fileSelected.type)) {
      setMutual(fileSelected);
      setConsent(fileSelected);
      setAdministrativeSheet(fileSelected);
    } else {
      alert(
        "Seuls les fichiers doc, docx, odt, pdf, csv, png, jpeg et jpg sont autorisés"
      );
    }
  };

  const handleFileUpload = () => {
    if (
      mutual &&
      consent &&
      administrativeSheet &&
      idPatient &&
      intervention.id
    ) {
      const formData = new FormData();
      formData.append("mutual_file", mutual);
      formData.append("consent_file", consent);
      formData.append("administrative_sheet_file", administrativeSheet);
      formData.append("patient_id", idPatient);
      formData.append("intervention_id", intervention.id);

      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patientsContents`, {
        method: "POST",
        credentials: "include",
        body: formData,
      })
        .then(() => {
          alert("Votre contenu a bien été envoyé.");
          setMutual("");
          setConsent("");
          setAdministrativeSheet("");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Une erreur s'est produite lors du téléchargement du fichier.");
        });
    } else {
      alert("Veuillez sélectionner un fichier à télécharger !");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="">
        <div className="flex flex-col items-center">
          <img src={image6} alt="doc6" className="mx-1 w-30 h-auto" />
          <p className="ml-10 mb-2 w-44 h-auto text-sm">Fiche administrative</p>
          <input
            className="ml-20 rounded-full text-black px-2 py-1"
            type="file"
            id="uploadFile1"
            onChange={handleChangeUploadFile}
          />
        </div>
        <div className="flex flex-col items-center">
          <img src={image6} alt="doc7" className="mx-1 w-30 h-auto" />
          <p className="ml-10 mb-2 w-44 h-auto text-sm">Consentement éclairé</p>
          <input
            className="ml-20 rounded-full text-black px-2 py-1"
            type="file"
            id="uploadFile2"
            onChange={handleChangeUploadFile}
          />
        </div>
      </div>
      <div className="p-2">
        <div className="flex flex-col items-center">
          <img src={image8} alt="doc8" className="mx-1 w-30 h-auto" />
          <p className="ml-10 mb-2 w-44 h-auto text-sm">
            Votre retour mutuelle
          </p>
          <input
            className="ml-20 rounded-full text-black px-2 py-1"
            type="file"
            id="uploadFile3"
            onChange={handleChangeUploadFile}
          />
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="ml-20 mt-2 px-4 py-2 text-white bg-teal-400  rounded-md"
            onClick={handleFileUpload}
          >
            Envoyer
          </button>
        </div>
      </div>
    </div>
  );
}

export default ImageList;
