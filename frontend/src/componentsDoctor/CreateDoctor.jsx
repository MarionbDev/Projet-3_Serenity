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

  const handleSubmit = () => {
    //  e.preventDefault();

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
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor />
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
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center">
                    <label
                      htmlFor="firstname"
                      className="text-2xl mb-2 text-white"
                    >
                      Prénom
                    </label>
                    <input
                      className="px-4 py-1 text-black rounded-full"
                      type="text"
                      id="firstname"
                      required
                      value={firstname}
                      onChange={handleChangeFirstname}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <label
                      htmlFor="lastname"
                      className="text-2xl mb-2 text-white"
                    >
                      Nom
                    </label>
                    <input
                      className="px-4 py-1 text-black rounded-full"
                      type="text"
                      id="lastname"
                      required
                      value={lastname}
                      onChange={handleChangeLastname}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <label htmlFor="tel" className="text-2xl mb-2 text-white">
                      Téléphone
                    </label>
                    <input
                      className="px-4 py-1 text-black rounded-full"
                      type="text"
                      id="tel"
                      value={tel}
                      onChange={handleChangeTel}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <label htmlFor="mail" className="text-2xl mb-2 text-white">
                      Mail
                    </label>
                    <input
                      className="px-4 py-1 text-black rounded-full"
                      type="email"
                      id="mail"
                      value={mail}
                      onChange={handleChangeMail}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <label
                      htmlFor="password"
                      className="text-2xl mb-2 text-white"
                    >
                      Mot de passe
                    </label>
                    <input
                      className="px-4 py-1 text-black rounded-full"
                      type="password"
                      id="password"
                      value={password}
                      onChange={handleChangePassword}
                    />
                  </div>
                  <div className="flex flex-col items-center">
                    <label htmlFor="role" className="text-2xl mb-2 text-white">
                      Role
                    </label>
                    <input
                      className="px-4 py-1 text-black rounded-full"
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
                    className="bg-black text-white px-6 py-2 rounded-full mt-6"
                  >
                    Enregistrer
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
