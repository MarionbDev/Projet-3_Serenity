import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SideBarDoctor from "./SideBarDoctor";
import edit from "../assets/logo/logoDoctor/edit.png";
import HeaderDoctor from "./HeaderDoctor";

export default function CreateDoctor() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  // const [image, setImage] = useState("");
  // const [language, setLanguage] = useState("");
  // const [bio, setBio] = useState("");
  // const [certificate, setCertificate] = useState("");
  const [role, setRole] = useState("");
  // const [otherFormation, setOtherFormation] = useState("");
  // const [experience, setExperience] = useState("");
  // const [partnership, setPartnership] = useState("");
  // const [worksAndPublication, setWorksAndPublication] = useState("");
  // const [awardAndRecognition, setAwardAndRecognition] = useState("");

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

  // const handleChangeLanguage = (e) => {
  //   setLanguage(e.target.value);
  // };

  // const handleChangeBio = (e) => {
  //   setBio(e.target.value);
  // };

  // const handleChangeCertificate = (e) => {
  //   setCertificate(e.target.value);
  // };

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  // const handleChangeOtherFormation = (e) => {
  //   setOtherFormation(e.target.value);
  // };

  // const handleChangeExperience = (e) => {
  //   setExperience(e.target.value);
  // };

  // const handleChangePartnership = (e) => {
  //   setPartnership(e.target.value);
  // };

  // const handleChangeWorksAndPublication = (e) => {
  //   setWorksAndPublication(e.target.value);
  // };

  // const handleChangeAwardAndRecognition = (e) => {
  //   setAwardAndRecognition(e.target.value);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstname,
      lastname,
      tel,
      mail,
      password,
      // image,
      // language,
      // bio,
      // certificate,
      role,
      // otherFormation,
      // experience,
      // partnership,
      // worksAndPublication,
      // awardAndRecognition,
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
      <div className="hidden md:block">
        <SideBarDoctor />
      </div>
      <div className="md:ml-[321px] py-5 md:py-14 text-[#FFFFFF]">
        <HeaderDoctor />
      </div>
      <div className="flex justify-center items-center md:ml-64">
        <div className="rounded-2xl shadow-lg shadow-slate-950/70 mb-10 px-10">
          <div className="">
            <div className="">
              <button type="button">
                <img src={edit} alt="edit" className="w-[24px] h-[24px] mr-8" />
              </button>
            </div>
          </div>
          <section className="">
            <p className="text-white italic text-sm pl-4">
              * Champs obligatoires
            </p>
            <div className="bg-dark-02 rounded-24" />
            <form onSubmit={handleSubmit} className="mt-2 px-4">
              <div className="flex flex-col">
                <div className="grid lg:grid-cols-2 gap-4 overflow-y-auto">
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="firstname"
                      className="text-base mb-2 text-white"
                    >
                      Prénom
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
                      Nom
                    </label>
                    <input
                      className="px-4 py-1 text-black rounded-md w-full"
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
                      className="px-4 py-1 text-black rounded-md w-full"
                      type="text"
                      id="tel"
                      value={tel}
                      onChange={handleChangeTel}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="mail" className="text-base mb-2 text-white">
                      Mail
                    </label>
                    <input
                      className="px-4 py-1 text-black rounded-md w-full"
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
                      className="px-4 py-1 text-black rounded-md w-full"
                      type="password"
                      id="password"
                      value={password}
                      onChange={handleChangePassword}
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label htmlFor="role" className="text-base mb-2 text-white">
                      Role
                    </label>
                    <input
                      className="px-4 py-1 text-black rounded-md w-full"
                      type="text"
                      id="role"
                      value={role}
                      onChange={handleChangeRole}
                    />
                  </div>
                </div>
                {/* Ajoutez d'autres labels ici */}
                <div className="flex justify-center">
                  <button
                    type="submit"
                    className="bg-[#323847] rounded-full shadow-slate-950/90 shadow-xl my-6 text-white
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
