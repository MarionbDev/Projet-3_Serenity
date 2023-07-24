import React, { useState, useEffect } from "react";
import SideBarDoctor from "./SideBarDoctor";
import edit from "../assets/logo/logoDoctor/edit.png";
import HeaderDoctor from "./HeaderDoctor";

const imageTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];

export default function CreateProfessional() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [tel, setTel] = useState("");
  const [image, setImage] = useState(null);
  const [speciality, setSpeciality] = useState("");
  const [road, setRoad] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [proList, setProList] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/doctors")
      .then((res) => res.json())
      .then((data) => {
        setProList(data); // Store the fetched data in proList
      });
  }, []);

  const handleChangeImage = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile && imageTypes.includes(selectedFile.type)) {
      setImage(selectedFile);
    } else {
      setImage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("tel", tel);
    formData.append("speciality", speciality);
    formData.append("road", road);
    formData.append("city", city);
    formData.append("zip_code", zipCode);
    formData.append("country", "France");
    formData.append("image", image);

    fetch("http://localhost:8000/api/profesionnels", {
      method: "POST",
      credentials: "include",
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.warn("Success");
        } else {
          console.error("Error");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor text="Ajoutez un professionnel !" />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="absolute left-[321px] top-[172px] rounded-2xl shadow-lg shadow-slate-950/70">
          <div className="flex mt-[32px]">
            <div className="flex ml-[35rem] items-center">
              <button type="button">
                <img src={edit} alt="edit" className="w-[24px] h-[24px] mr-8" />
              </button>
            </div>
          </div>
          <section className="relative">
            <div className="absolute left-24 right-4 top-7 bottom-37 bg-dark-02 rounded-24" />
            <form onSubmit={handleSubmit} className="p-4">
              <div className="flex flex-col">
                <div className="grid grid-cols-3 gap-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="firstname"
                      className="text-base mb-2 text-white"
                    >
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      className="px-4 py-1 text-black rounded-full"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      placeholder="Entrez le prénom du professionnel"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label
                      htmlFor="lastname"
                      className="text-base mb-2 text-white"
                    >
                      Nom
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      className="px-4 py-1 text-black rounded-full"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Entrez le nom du professionnel"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col">
                    <label htmlFor="tel" className="text-base mb-2 text-white">
                      Téléphone
                    </label>
                    <input
                      type="text"
                      id="tel"
                      className="px-4 py-1 text-black rounded-full"
                      value={tel}
                      onChange={(e) => setTel(e.target.value)}
                      placeholder="Entrez le téléphone du professionnel"
                    />
                  </div>
                  <div className="form-group flex flex-col items-start">
                    <label
                      htmlFor="source"
                      className="text-base mb-2 text-white"
                    >
                      Source :
                    </label>
                    <input
                      type="file"
                      id="image"
                      name="image"
                      accept={imageTypes.join(",")}
                      onChange={handleChangeImage}
                      className="px-4 py-1 text-white rounded-md w-full"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label
                      htmlFor="speciality"
                      className="text-base mb-2 text-white"
                    >
                      Spécialité
                    </label>
                    <select
                      id="speciality"
                      className="px-4 py-1 text-black rounded-full"
                      value={speciality}
                      onChange={(e) => setSpeciality(e.target.value)}
                    >
                      <option value="">Sélectionnez une spécialité</option>
                      <option value="Psychologue">Psychologue</option>
                      <option value="Kinésithérapeute">Kinésithérapeute</option>
                      <option value="Infirmier">Infirmier</option>
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="flex flex-col">
                    <label htmlFor="road" className="text-base mb-2 text-white">
                      Adresse
                    </label>
                    <input
                      type="text"
                      id="road"
                      className="px-4 py-1 text-black rounded-full"
                      value={road}
                      onChange={(e) => setRoad(e.target.value)}
                      placeholder="Entrez l'adresse du professionnel"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="city" className="text-base mb-2 text-white">
                      Ville
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="px-4 py-1 text-black rounded-full"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      placeholder="Entrez la ville du professionnel"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label
                      htmlFor="zipCode"
                      className="text-base mb-2 text-white"
                    >
                      Code postal
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      className="px-4 py-1 text-black rounded-full"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="Entrez le code postal du professionnel"
                    />
                  </div>
                </div>

                <div className="mt-4">
                  <button
                    type="submit"
                    className="bg-[#323847] rounded-full shadow-slate-950/90 shadow-xl mb-5 text-white
                    hover:text-white sm:hover:bg-white/30"
                  >
                    <p className="flex px-6 py-2">Enregistrer</p>
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
      <div className="flex justify-center items-center mt-4" />

      {/* Display the fetched data from proList */}
      <div>
        <h2>Fetched Professionals:</h2>
        <ul>
          {proList.map((pro) => (
            <li key={pro.id}>
              {pro.firstname} {pro.lastname} - {pro.speciality}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
