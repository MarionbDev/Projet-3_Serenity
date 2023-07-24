import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import SideBarDoctor from "./SideBarDoctor";
import HeaderDoctor from "./HeaderDoctor";

export default function CreateDoctor() {
  const { idDoctor } = useUserContext();
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  // const [image, setImage] = useState("");
  const [language, setLanguage] = useState("");
  const [bio, setBio] = useState("");
  const [certificate, setCertificate] = useState("");
  const [role, setRole] = useState("");
  const [otherFormation, setOtherFormation] = useState("");
  const [experience, setExperience] = useState("");
  const [partnership, setPartnership] = useState("");
  const [worksAndPublication, setWorksAndPublication] = useState("");
  const [awardAndRecognition, setAwardAndRecognition] = useState("");

  const handleChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleChangeTel = (e) => {
    setTel(e.target.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // const handleChangeImage = (e) => {
  //   setImage(e.target.value);
  // };

  const handleChangeLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const handleChangeBio = (e) => {
    setBio(e.target.value);
  };

  const handleChangeCertificate = (e) => {
    setCertificate(e.target.value);
  };

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  const handleChangeOtherFormation = (e) => {
    setOtherFormation(e.target.value);
  };

  const handleChangeExperience = (e) => {
    setExperience(e.target.value);
  };

  const handleChangePartnership = (e) => {
    setPartnership(e.target.value);
  };

  const handleChangeWorksAndPublication = (e) => {
    setWorksAndPublication(e.target.value);
  };

  const handleChangeAwardAndRecognition = (e) => {
    setAwardAndRecognition(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstname,
      lastname,
      tel,
      mail,
      password,
      // image,
      language,
      bio,
      certificate,
      role,
      otherFormation,
      experience,
      partnership,
      worksAndPublication,
      awardAndRecognition,
    };

    fetch("http://localhost:8000/api/doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      // .then((res) => res.json())
      .then(() => {
        navigate(`/doctors/${idDoctor}/praticiens/`);
      });
  };

  return (
    <div className="min-h-screen bg-[#242731]">
      <div className="hidden md:block">
        <SideBarDoctor />
      </div>
      <div className="md:ml-[321px] py-5 md:py-14 text-[#FFFFFF]">
        <HeaderDoctor text="Un nouveau praticien ?!" />
      </div>
      <div className="flex justify-center items-center md:ml-64">
        <div className="rounded-2xl shadow-lg shadow-slate-950/70 mb-10">
          <section className="">
            <p className="text-white italic text-sm pl-4">
              * Champs obligatoires
            </p>
            <form onSubmit={handleSubmit} className="mt-2 px-4">
              <div className="flex flex-col">
                <div className="grid lg:grid-cols-2 gap-4 overflow-y-auto pb-5 lg:h-[370px] ">
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="firstname"
                      className=" text-base mb-2 text-white"
                    >
                      Prénom *
                    </label>
                    <input
                      className="px-4 py-1 text-black rounded-md w-full"
                      type="text"
                      id="firstname"
                      required
                      value={firstname}
                      onChange={handleChangeFirstname}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="lastname"
                      className="text-base mb-2 text-white"
                    >
                      Nom *
                    </label>
                    <input
                      className="w-full px-4 py-1 text-black rounded-md"
                      type="text"
                      id="lastname"
                      required
                      value={lastname}
                      onChange={handleChangeLastname}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="tel" className="text-base mb-2 text-white">
                      Téléphone
                    </label>
                    <input
                      className="w-full px-4 py-1 text-black rounded-md"
                      type="text"
                      id="tel"
                      value={tel}
                      onChange={handleChangeTel}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="role" className="text-base mb-2 text-white">
                      Rôle *
                    </label>
                    <input
                      className="w-full px-4 py-1 text-black rounded-md"
                      type="text"
                      id="role"
                      value={role}
                      onChange={handleChangeRole}
                    />
                  </div>

                  <div className="flex flex-col items-start">
                    <label htmlFor="mail" className="text-base mb-2 text-white">
                      Mail *
                    </label>
                    <input
                      className="w-full px-4 py-1 text-black rounded-md"
                      type="email"
                      id="mail"
                      value={mail}
                      onChange={handleChangeMail}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="password"
                      className="text-base mb-2 text-white"
                    >
                      Mot de passe *
                    </label>
                    <input
                      className="w-full px-4 py-1 text-black rounded-md"
                      type="password"
                      id="password"
                      value={password}
                      onChange={handleChangePassword}
                    />
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-col items-start mb-4">
                      <label
                        htmlFor="language"
                        className="text-base mb-2 text-white"
                      >
                        Langues
                      </label>
                      <textarea
                        rows={8}
                        cols={40}
                        className="w-full h-20 px-2 py-2 text-black rounded-md"
                        type="text"
                        id="language"
                        value={language}
                        onChange={handleChangeLanguage}
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="certificate"
                      className="text-base mb-2 text-white"
                    >
                      Diplômes
                    </label>
                    <textarea
                      rows={8}
                      cols={40}
                      className="w-full h-20 px-2 py-2 text-black rounded-md"
                      type="text"
                      id="certificate"
                      value={certificate}
                      onChange={handleChangeCertificate}
                    />
                  </div>
                  <div className="lg:col-span-2 flex flex-col items-start">
                    <label htmlFor="bio" className="text-base mb-2 text-white">
                      Biographie
                    </label>
                    <textarea
                      rows={8}
                      cols={40}
                      className="w-full h-24 px-2 py-2 text-black rounded-md"
                      type="text"
                      id="bio"
                      value={bio}
                      onChange={handleChangeBio}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="otherFormation"
                      className="text-base mb-2 text-white"
                    >
                      Autres formations
                    </label>
                    <textarea
                      rows={8}
                      cols={40}
                      className="w-full h-20 px-2 py-2 text-black rounded-md"
                      type="text"
                      id="otherFormation"
                      value={otherFormation}
                      onChange={handleChangeOtherFormation}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="experience"
                      className="text-base mb-2 text-white"
                    >
                      Experiences Professionnelles
                    </label>
                    <textarea
                      rows={8}
                      cols={40}
                      className="w-full h-20 px-2 py-2 text-black rounded-md"
                      type="text"
                      id="experience"
                      value={experience}
                      onChange={handleChangeExperience}
                    />
                  </div>

                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="worksAndPublication"
                      className="text-base mb-2 text-white"
                    >
                      Travaux et Publications
                    </label>
                    <textarea
                      rows={8}
                      cols={40}
                      className="w-full h-20 px-2 py-2 text-black rounded-md"
                      type="text"
                      id="worksAndPublication"
                      value={worksAndPublication}
                      onChange={handleChangeWorksAndPublication}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="awardAndRecognition"
                      className="text-base mb-2 text-white"
                    >
                      Prix et Reconnaissances
                    </label>
                    <textarea
                      rows={8}
                      cols={40}
                      className="w-full h-20 px-2 py-2 text-black rounded-md"
                      type="text"
                      id="awardAndRecognition"
                      value={awardAndRecognition}
                      onChange={handleChangeAwardAndRecognition}
                    />
                  </div>
                  <div className="lg:col-span-2 flex flex-col items-start">
                    <label
                      htmlFor="partnership"
                      className="text-base mb-2 text-white"
                    >
                      Partenaires Professionnels
                    </label>
                    <input
                      className="w-full px-4 py-1 text-black rounded-md"
                      type="text"
                      id="partnership"
                      value={partnership}
                      onChange={handleChangePartnership}
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
