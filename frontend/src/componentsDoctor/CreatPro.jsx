import React, { useState } from "react";
import SideBarDoctor from "./SideBarDoctor";
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
  // const [proList, setProList] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:8000/api/doctors")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setProList(data); // Store the fetched data in proList
  //     });
  // }, []);

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

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/professionnels`, {
      method: "POST",
      credentials: "include",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          console.error("Error");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-[#242731]">
      <div className="hidden md:block">
        <SideBarDoctor />
      </div>
      <div className="md:ml-[321px] py-2 md:py-9 text-[#FFFFFF]">
        <HeaderDoctor text="Un nouveau professionnels ?!" />
      </div>
      <div className="flex justify-center items-center md:ml-64">
        <div className="rounded-2xl shadow-lg shadow-slate-950/70 mb-10">
          <section className="">
            <p className="text-white italic text-sm pl-4">
              * Champs obligatoires
            </p>
            <form onSubmit={handleSubmit} className="mt-2 px-4">
              <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-4  ">
                  <div className="flex flex-col">
                    <label
                      htmlFor="firstname"
                      className="text-base mb-2 text-white"
                    >
                      Prénom *
                    </label>
                    <input
                      type="text"
                      id="firstname"
                      className="px-4 py-1 text-black rounded-md"
                      value={firstname}
                      onChange={(e) => setFirstname(e.target.value)}
                      placeholder="Entrez le prénom du professionnel"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="lastname"
                      className="text-base mb-2 text-white"
                    >
                      Nom *
                    </label>
                    <input
                      type="text"
                      id="lastname"
                      className="px-4 py-1 text-black rounded-md"
                      value={lastname}
                      onChange={(e) => setLastname(e.target.value)}
                      placeholder="Entrez le nom du professionnel"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col">
                    <label htmlFor="tel" className="text-base mb-2 text-white">
                      Téléphone *
                    </label>
                    <input
                      type="text"
                      id="tel"
                      className="px-4 py-1 text-black rounded-md"
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
                      Spécialité *
                    </label>
                    <select
                      id="speciality"
                      className="px-4 py-1 text-black rounded-md"
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
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="flex flex-col">
                    <label htmlFor="road" className="text-base mb-2 text-white">
                      Adresse *
                    </label>
                    <input
                      type="text"
                      id="road"
                      className="px-4 py-1 text-black rounded-md"
                      value={road}
                      onChange={(e) => setRoad(e.target.value)}
                      placeholder="Entrez l'adresse du professionnel"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="city" className="text-base mb-2 text-white">
                      Ville *
                    </label>
                    <input
                      type="text"
                      id="city"
                      className="px-4 py-1 text-black rounded-md"
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
                      Code postal *
                    </label>
                    <input
                      type="text"
                      id="zipCode"
                      className="px-4 py-1 text-black rounded-md"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                      placeholder="Entrez le code postal du professionnel"
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    type="submit"
                    className="bg-[#323847] rounded-full shadow-slate-950/90 shadow-xl mb-5 text-white
                    hover:text-white sm:hover:bg-white/30  duration-300"
                  >
                    <p className="flex px-6 py-2">Enregistrer</p>
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </div>
    </div>
  );
}
