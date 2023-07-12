import { useState } from "react";
import image6 from "../../assets/images/Img6.png";
import image7 from "../../assets/images/Img7.png";
import image8 from "../../assets/images/Img8.png";

const fileTypes = [
  "file/doc",
  "file/docx",
  "file/odt",
  "file/txt",
  "file/csv",
  "file/png",
  "file/jpeg",
  "file/jpg",
];

function ImageList() {
  const [uploadFile, setUploadFile] = useState("");
  const handleChangeUploadFile = (e) => {
    console.log(e);
    const fileSelected = e.target.files[0];

    if (fileTypes.includes(fileSelected.type)) {
      setUploadFile(e.target.files[0]);
    } else {
      alert("Only doc, docx, odt, txt, csv, png, jpeg and jpg are allowed");
    }
  };

  if (!uploadFile) {
    alert("You must provide a file!");
  } else {
    const fileData = new FormData();
    fileData.append("type", uploadFile);
    fetch(`${import.meta.env.VITE_BACKEND_URL}/doctors`, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      body: fileData,
    });
  }

  return (
    <div className="flex justify-center">
      <div className="p-2 ml-20">
        <img src={image6} alt="doc6" className="ml-20 mx-1 w-30 h-auto" />
        <p className="ml-20 mb-2 w-44 h-auto text-sm">Fiche administrative</p>
        <input
          className="rounded-full text-black px-2 py-1"
          type="file"
          id="uploadFile"
          onChange={handleChangeUploadFile}
        />
        <img src={image6} alt="doc7" className="ml-20 mx-1 w-30 h-auto" />
        <p className="ml-20 mb-2 w-44 h-auto text-sm">Consentement éclairé</p>
        <input
          className="ml-10 rounded-full text-black px-2 py-1"
          type="file"
          id="uploadFile"
          onChange={handleChangeUploadFile}
        />
      </div>
      <div className="p-2">
        <img src={image8} alt="doc8" className="mx-1 w-30 h-auto" />
        <p className="ml-5 mb-2 w-44 h-auto text-sm">Votre retour mutuelle</p>

        <input
          className="rounded-full text-black px-2 py-1"
          type="file"
          id="uploadFile"
          onChange={handleChangeUploadFile}
        />
        <img src={image7} alt="doc9" className="mx-1 w-30 h-auto" />
        <p className="ml-5 mb-2 w-44 h-auto text-sm">
          Avez-vous vu votre anesthésiste
        </p>
        <input
          className="rounded-full text-black px-2 py-1"
          type="file"
          id="uploadFile"
          onChange={handleChangeUploadFile}
        />
      </div>
    </div>
  );
}

export default ImageList;
