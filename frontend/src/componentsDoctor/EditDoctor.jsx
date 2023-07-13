import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
// import { convertDateFormat } from "../services/convertTime";
import SideBarDoctor from "./SideBarDoctor";
import HeaderDoctor from "./HeaderDoctor";

export default function EditDoctor() {
  const [oneDoctor, setOneDoctor] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  // const [password, setPassword] = useState("");
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
  const navigate = useNavigate();

  const { idDoctor } = useUserContext();
  const { praticienId } = useParams();

  const getOneDoctor = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/doctors/${praticienId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setOneDoctor(data);
        setFirstname(data.firstname);
        setLastname(data.lastname);
        setRole(data.role);
        setTel(data.tel);
        setLanguage(data.language);
        setBio(data.bio);
        setCertificate(data.certificate);
        setRole(data.role);
        setOtherFormation(data.otherFormation);
        setExperience(data.experience);
        setPartnership(data.partnership);
        setWorksAndPublication(data.worksAndPublication);
        setAwardAndRecognition(data.awardAndRecognition);
        setMail(data.mail);
      })
      .catch((err) => console.error(err));
  };

  const handleUpdatePraticien = (e) => {
    e.preventDefault();

    const updatedPraticien = {
      lastname,
      firstname,
      role,
      tel,
      mail,
      language,
      bio,
      certificate,
      otherFormation,
      experience,
      partnership,
      worksAndPublication,
      awardAndRecognition,
    };

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/doctors/${praticienId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPraticien),
    })
      // .then((res) => res.json())
      .then(() => {
        navigate(`/doctors/${idDoctor}/praticiens`);
      })
      .catch((error) => {
        console.error("Error updating praticien:", error);
      });
  };

  useEffect(() => {
    getOneDoctor();
  }, [praticienId]);

  if (!oneDoctor) {
    return <p>Loading page</p>;
  }

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor text="Informations sur le praticien :" />
      </div>
      <div className="text-[#FFFFFF] absolute sm:w-[50%] md:w-[75%] ml-[321px] mt-[162px] rounded-2xl shadow-lg shadow-slate-950/70  h-[500px]  ">
        <div>
          <div className="flex  justify-center py-8 top-7 bg-dark-02 rounded-24 ">
            <form className="flex flex-col items-center  w-[90%]">
              <div className=" ">
                <div className="  ">
                  <div className="grid grid-cols-2">
                    <div>
                      <label
                        htmlFor="firstname"
                        className=" text-base text-gray-400  "
                      >
                        Prénom :
                      </label>
                      <input
                        className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                        type="text"
                        id="firstname"
                        required
                        value={firstname}
                        onChange={(e) => setFirstname(e.target.value)}
                      />
                    </div>
                    <div className=" ">
                      <label
                        htmlFor="mail"
                        className="text-base  text-gray-400"
                      >
                        Mail :
                      </label>
                      <input
                        className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                        type="text"
                        id="mail"
                        required
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                      />
                    </div>
                    <div className=" ">
                      <label
                        htmlFor="lastname"
                        className="text-base  text-gray-400"
                      >
                        Nom :
                      </label>
                      <input
                        className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                        type="text"
                        id="lastname"
                        required
                        value={lastname}
                        onChange={(e) => setLastname(e.target.value)}
                      />
                    </div>

                    <div className=" ">
                      <label htmlFor="tel" className="text-base  text-gray-400">
                        Téléphone :
                      </label>
                      <input
                        className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                        type="text"
                        id="tel"
                        required
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                      />
                    </div>
                    <div className=" ">
                      <label
                        htmlFor="role"
                        className="text-base  text-gray-400"
                      >
                        Rôle :
                      </label>
                      <input
                        className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                        type="text"
                        id="role"
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      />
                    </div>

                    <div className=" ">
                      <label
                        htmlFor="language"
                        className="text-base  text-gray-400"
                      >
                        Langues :
                      </label>
                      <input
                        className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                        type="text"
                        id="language"
                        required
                        value={language}
                        onChange={(e) => setLanguage(e.target.value)}
                      />
                    </div>
                    <div className="flex flex-col w-[900px]">
                      <div className=" ">
                        <label
                          htmlFor="bio"
                          className="text-base  text-gray-400"
                        >
                          Biographie :
                        </label>
                        <textarea
                          rows={2}
                          cols={40}
                          className="bg-[#242731]  w-[905px]  px-2 py-2 text-white rounded-md"
                          type="text"
                          id="bio"
                          required
                          value={bio}
                          onChange={(e) => setBio(e.target.value)}
                        />
                      </div>
                      <div className="">
                        <div className="flex ">
                          <label
                            htmlFor="certificate"
                            className="text-base py-1  text-gray-400"
                          >
                            Diplômes :
                          </label>
                          <input
                            className="bg-[#242731] w-[80%] ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                            type="text"
                            id="certificate"
                            required
                            value={certificate}
                            onChange={(e) => setCertificate(e.target.value)}
                          />
                        </div>
                        <div className="flex ">
                          <label
                            htmlFor="otherFormation"
                            className="text-base py-1 text-gray-400"
                          >
                            Autres Formations :
                          </label>
                          <input
                            className="bg-[#242731] w-[70%] ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                            type="text"
                            id="otherFormation"
                            required
                            value={otherFormation}
                            onChange={(e) => setOtherFormation(e.target.value)}
                          />
                        </div>
                        <div className=" ">
                          <label
                            htmlFor="experience"
                            className="text-base py-1  text-gray-400"
                          >
                            Expériences Professionnelles :
                          </label>
                          <input
                            className="bg-[#242731] w-[70%] ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                            type="text"
                            id="experience"
                            required
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                          />
                        </div>
                        <div className="flex ">
                          <label
                            htmlFor="partnership"
                            className="text-base py-1 text-gray-400"
                          >
                            Partenaires Professionnels :
                          </label>
                          <input
                            className="bg-[#242731] w-[70%] ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                            type="text"
                            id="partnership"
                            required
                            value={partnership}
                            onChange={(e) => setPartnership(e.target.value)}
                          />
                        </div>
                        <div className="flex">
                          <label
                            htmlFor="worksAndPublication"
                            className="text-base py-1  text-gray-400"
                          >
                            Travaux et Publications :
                          </label>
                          <input
                            className="bg-[#242731] w-[70%] ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                            type="text"
                            id="worksAndPublication"
                            required
                            value={worksAndPublication}
                            onChange={(e) =>
                              setWorksAndPublication(e.target.value)
                            }
                          />
                        </div>
                        <div className="flex ">
                          <label
                            htmlFor="awardAndRecognition"
                            className="text-base py-1 text-gray-400"
                          >
                            Prix et Reconnaissances :
                          </label>
                          <input
                            className="bg-[#242731] w-[70%] ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                            type="text"
                            id="awardAndRecognition"
                            required
                            value={awardAndRecognition}
                            onChange={(e) =>
                              setAwardAndRecognition(e.target.value)
                            }
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-center border-t-[1px] border-[#a5a5a5]/20 w-[100%] ">
                <Link to={`/doctors/${idDoctor}/praticiens/`}>
                  <button
                    type="submit"
                    className="bg-[#323847]  rounded-full shadow-slate-950/90 shadow-xl mt-5 text-white
                  hover:text-white sm:hover:bg-white/30"
                    onClick={handleUpdatePraticien}
                  >
                    <p className="flex px-6 py-2">Modifier</p>
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
