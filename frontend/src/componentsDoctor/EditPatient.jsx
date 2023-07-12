import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
// import { convertDateFormat } from "../services/convertTime";
import SideBarDoctor from "./SideBarDoctor";
import HeaderDoctor from "./HeaderDoctor";

export default function EditPatient() {
  const [onePatient, setOnePatient] = useState([]);
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [maidenName, setMaidenName] = useState("");
  const [sexe, setSexe] = useState();
  const [birthday, setBirthday] = useState("");
  const [familySituation, setFamilySituation] = useState();
  const [professionnalSituation, setProfessionnalSituation] = useState();
  const [occupation, setOccupation] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState("");
  const [road, setRoad] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [city, setCity] = useState("");
  const [telFix, setTelFix] = useState("");
  const [telPort, setTelPort] = useState("");
  const [mail, setMail] = useState("");
  const [hashedPassword, setHashedPassword] = useState("");
  const navigate = useNavigate();

  const { idDoctor } = useUserContext();
  const { patientId } = useParams();

  const getOnePatient = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients/${patientId}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setOnePatient(data);
        setFirstname(data.firstname);
        setLastname(data.lastname);
        setSexe(data.sexe);
        setTelFix(data.tel_fixe);
        setTelPort(data.tel_portable);
        setMaidenName(data.maiden_name);
        setBirthday(data.birthday);
        setRoad(data.road);
        setCountry(data.country);
        setZipCode(data.zip_code);
        setCity(data.city);
        setFamilySituation(data.family_situation);
        setProfessionnalSituation(data.professionnal_situation);
        setOccupation(data.occupation);
        setNumberOfChildren(data.number_of_children);
        setMail(data.mail);
        setHashedPassword(data.hashedPassword);
      })
      .catch((err) => console.error(err));
  };

  const handleUpdatePatient = (e) => {
    e.preventDefault();

    const updatedPatient = {
      lastname,
      firstname,
      maiden_name: maidenName,
      birthday,
      sexe,
      family_situation: familySituation,
      professionnal_situation: professionnalSituation,
      occupation,
      number_of_children: numberOfChildren,
      road,
      country,
      zip_code: zipCode,
      city,
      tel_fixe: telFix,
      tel_portable: telPort,
      mail,
      hashedPassword,
      patientId,
    };

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients/${patientId}`, {
      method: "PUT",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedPatient),
    })
      // .then((res) => res.json())
      .then(() => {
        navigate(`/doctors/${idDoctor}/patients`);
      })
      .catch((error) => {
        console.error("Error updating patient:", error);
      });
  };

  useEffect(() => {
    getOnePatient();
  }, [patientId]);

  if (!onePatient) {
    return <p>Loading page</p>;
  }

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor text="Informations sur votre patient !" />
      </div>
      <div className="text-[#FFFFFF] absolute w-[1055px] ml-[321px] mt-[162px] rounded-2xl shadow-lg shadow-slate-950/70  h-[500px]  ">
        <div>
          <div className="px-10 py-10 top-7 bg-dark-02 rounded-24 ">
            <form>
              <div className="flex  ">
                <div className=" mr-10 ">
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
                  <div className="">
                    <label
                      htmlFor="maiden-name"
                      className=" text-base mb-2 text-gray-400"
                    >
                      Nom de jeune fille :
                    </label>
                    <input
                      className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                      type="text"
                      id="nom de jeune fille"
                      value={maidenName}
                      onChange={(e) => setMaidenName(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="sexe"
                      className=" text-base mb-2 text-gray-400"
                    >
                      Sexe :
                    </label>
                    <select
                      className="bg-[#242731] ml-2 px-4 py-1  text-white  rounded-md hover:bg-[#424655]"
                      id="sexe"
                      value={sexe}
                      onChange={(e) => setSexe(e.target.value)}
                    >
                      <option>Sélectionner</option>
                      <option value="Masculin">Masculin</option>
                      <option value="Féminin">Féminin</option>
                    </select>
                  </div>
                  <div className=" mb-6">
                    <label
                      htmlFor="date"
                      className=" text-base mb-2 text-gray-400"
                    >
                      Date de naissance :
                    </label>
                    <input
                      className="bg-[#242731] ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                      id="birthday"
                      type="text"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="family-situation"
                      className=" text-base mb-2 text-gray-400"
                    >
                      Situation familiale :
                    </label>
                    <select
                      className="bg-[#242731] ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                      id="family-situation"
                      value={familySituation}
                      onChange={(e) => setFamilySituation(e.target.value)}
                    >
                      <option>Sélectionner </option>
                      <option value="Marié(e)" style={{ color: "white" }}>
                        Marié(e)
                      </option>
                      <option value="Pacsé(e)">Pacsé(e)</option>
                      <option value="Célibataire">Célibataire</option>
                      <option value="Séparé(e)">Séparé(e)</option>
                      <option value="Veuf(ve)">Veuf(ve)</option>
                      <option value="Divorcé(e)">Divorcé(e)</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="number-of-children"
                      className=" text-base mb-2 text-gray-400"
                    >
                      Nombre d'enfant :
                    </label>
                    <input
                      className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                      type="number"
                      id="number-of-children"
                      value={numberOfChildren}
                      onChange={(e) => setNumberOfChildren(e.target.value)}
                    />
                  </div>
                  <div className=" ">
                    <label
                      htmlFor="professionnal-situation"
                      className=" text-base mb-2 text-gray-400"
                    >
                      Situation professionnelle :
                    </label>
                    <select
                      className=" bg-[#242731] w-56  ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                      id="professionnal-situation"
                      value={professionnalSituation}
                      onChange={(e) =>
                        setProfessionnalSituation(e.target.value)
                      }
                    >
                      <option>Sélectionner</option>
                      <option value="Agriculteur exploitant">
                        Agriculteur exploitant
                      </option>
                      <option value="Artisan/Commerçant/Chef d''entreprise">
                        Artisan/Commerçant/Chef d'entreprise
                      </option>
                      <option value="Cadre/Professions intellectuelles supérieures">
                        Cadre/Professions intellectuelles supérieures
                      </option>
                      <option value="Profession intermédiaire">
                        Profession intermédiaire
                      </option>
                      <option value="Employé">Employé</option>
                      <option value="Ouvrier">Ouvrier</option>
                      <option value="Retraité">Retraité</option>
                      <option value="Sans activité">Sans activité</option>
                    </select>
                  </div>
                  <div className="">
                    <label
                      htmlFor="occupation"
                      className=" text-base mb-2 text-gray-400"
                    >
                      Métier :
                    </label>
                    <input
                      className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                      type="text"
                      id="occupation"
                      value={occupation}
                      onChange={(e) => setOccupation(e.target.value)}
                    />
                  </div>
                </div>
                <div className="ml-12">
                  <div className="">
                    <label
                      htmlFor="tel_fixe"
                      className="text-base mb-2 text-gray-400"
                    >
                      Téléphone fixe :
                    </label>
                    <input
                      className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                      type="text"
                      id="tel_fixe"
                      value={telFix}
                      onChange={(e) => setTelFix(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="tel-mobile"
                      className="text-base mb-2 text-gray-400"
                    >
                      Téléphone portable :
                    </label>
                    <input
                      className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                      type="text"
                      id="tel-mobile"
                      value={telPort}
                      onChange={(e) => setTelPort(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="mail"
                      className="text-base mb-2 text-gray-400"
                    >
                      Mail :
                    </label>
                    <input
                      className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                      type="email"
                      id="mail"
                      value={mail}
                      onChange={(e) => setMail(e.target.value)}
                    />
                  </div>

                  <div className="flex flex-col ">
                    <label htmlFor="road" className="text-base text-gray-400">
                      N°, rue, route, avenue ... :
                    </label>
                    <input
                      className="h-16 bg-[#242731] w-68 px-2 py-1 text-white rounded-md hover:bg-[#424655]"
                      type="text"
                      id="road"
                      value={road}
                      onChange={(e) => setRoad(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="zip-code"
                      className="text-base mb-2 text-gray-400"
                    >
                      Code Postal :
                    </label>
                    <input
                      className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                      type="number"
                      id="zip-code"
                      value={zipCode}
                      onChange={(e) => setZipCode(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="city"
                      className="text-base mb-2 text-gray-400"
                    >
                      Ville :
                    </label>
                    <input
                      className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                      type="text"
                      id="city"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    />
                  </div>
                  <div className="">
                    <label
                      htmlFor="country"
                      className="text-base mb-2 text-gray-400"
                    >
                      Pays :
                    </label>
                    <input
                      className="bg-[#242731] w-72 ml-2 px-4 py-1 text-white rounded-md hover:bg-[#424655]"
                      type="text"
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-center border-t-[1px] border-[#a5a5a5]/20 mt-14 ">
                <Link to={`/doctors/${idDoctor}/patients/`}>
                  <button
                    type="submit"
                    className="bg-[#323847]  rounded-full shadow-slate-950/90 shadow-xl mt-6 text-white
                  hover:text-white sm:hover:bg-white/30"
                    onClick={handleUpdatePatient}
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
