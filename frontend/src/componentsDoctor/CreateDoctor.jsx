import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBarDoctor from "./SideBarDoctor";
import HeaderDoctor from "./HeaderDoctor";

export default function CreateDoctor() {
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
      .then((res) => res.json())
      .then((responseData) => {
        navigate(`/doctors/${responseData.id}`);
      });
  };

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor text="Un nouveau praticien ?!" />
      </div>
      <div className="flex justify-center items-center h-screen">
        <div className="absolute  left-[321px] top-[172px] rounded-2xl shadow-lg shadow-slate-950/70 w-[1055px] h-[500px]">
          <section className="relative">
            <div className=" bg-dark-02 rounded-24" />
            <form onSubmit={handleSubmit} className="mt-2 px-4">
              <div className="flex flex-col">
                <div className="grid grid-cols-2 gap-4  overflow-y-auto pb-5 h-[420px]">
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="firstname"
                      className=" text-base mb-2 text-white"
                    >
                      Prénom
                    </label>
                    <input
                      className="w-96 px-4 py-1 text-black rounded-md"
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
                      Nom
                    </label>
                    <input
                      className="w-96 px-4 py-1 text-black rounded-md"
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
                      className="w-96 px-4 py-1 text-black rounded-md"
                      type="text"
                      id="tel"
                      value={tel}
                      onChange={handleChangeTel}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="role" className="text-base mb-2 text-white">
                      Role
                    </label>
                    <input
                      className="w-96 px-4 py-1 text-black rounded-md"
                      type="text"
                      id="role"
                      value={role}
                      onChange={handleChangeRole}
                    />
                  </div>

                  <div className="flex flex-col items-start">
                    <label htmlFor="mail" className="text-base mb-2 text-white">
                      Mail
                    </label>
                    <input
                      className="w-96 px-4 py-1 text-black rounded-md"
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
                      Mot de passe
                    </label>
                    <input
                      className="w-96 px-4 py-1 text-black rounded-md"
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
                        Language
                      </label>
                      <textarea
                        rows={8}
                        cols={40}
                        className="w-96 h-20 px-2 py-2 text-black rounded-md"
                        type="text"
                        id="language"
                        value={language}
                        onChange={handleChangeLanguage}
                      />
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="bio"
                        className="text-base mb-2 text-white"
                      >
                        Biographie
                      </label>
                      <textarea
                        rows={8}
                        cols={40}
                        className="w-[905px] h-24 px-2 py-2 text-black rounded-md"
                        type="text"
                        id="bio"
                        value={bio}
                        onChange={handleChangeBio}
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
                      className="w-96 h-20 px-2 py-2 text-black rounded-md"
                      type="text"
                      id="certificate"
                      value={certificate}
                      onChange={handleChangeCertificate}
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
                      className="w-96 h-20 px-2 py-2 text-black rounded-md"
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
                      className="w-96 h-20 px-2 py-2 text-black rounded-md"
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
                      className="w-96 h-20 px-2 py-2 text-black rounded-md"
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
                      className="w-96 h-20 px-2 py-2 text-black rounded-md"
                      type="text"
                      id="awardAndRecognition"
                      value={awardAndRecognition}
                      onChange={handleChangeAwardAndRecognition}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="partnership"
                      className="text-base mb-2 text-white"
                    >
                      Partenaires Professionnels
                    </label>
                    <input
                      className="w-96 px-4 py-1 text-black rounded-md"
                      type="text"
                      id="partnership"
                      value={partnership}
                      onChange={handleChangePartnership}
                    />
                  </div>
                </div>
                {/* Ajoutez d'autres labels ici */}
                <div className="flex justify-center mt-5">
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
    </div>
  );
}
