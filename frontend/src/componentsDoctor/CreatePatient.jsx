import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
// import { Modal } from "react-responsive-modal";
import { useUserContext } from "../contexts/UserContext";
import SideBarDoctor from "./SideBarDoctor";
import HeaderDoctor from "./HeaderDoctor";

export default function CreatePatient() {
  const navigate = useNavigate();
  const { idDoctor } = useUserContext();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [maidenName, setMaidenName] = useState("");
  const [sexe, setSexe] = useState();
  const [birthday, setBirthday] = useState();
  const [familySituation, setFamilySituation] = useState();
  const [professionnalSituation, setProfessionnalSituation] = useState();
  const [occupation, setOccupation] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState();
  const [road, setRoad] = useState("");
  const [country, setCountry] = useState("");
  const [zipCode, setZipCode] = useState();
  const [city, setCity] = useState("");
  const [telFix, setTelFix] = useState("");
  const [telPort, setTelPort] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  // const [open, setOpen] = useState(false);

  // const onOpenModal = () => setOpen(true);
  // const onCloseModal = () => setOpen(false);

  // const handleNonButtonClick = () => {
  //   onCloseModal();
  // };

  const handleChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleChangeMaidenName = (e) => {
    setMaidenName(e.target.value);
  };

  const handleChangeBirthday = (e) => {
    setBirthday(e.target.value);
  };

  const handleChangeSexe = (e) => {
    setSexe(e.target.value);
  };

  const handleChangeFamilySituation = (e) => {
    setFamilySituation(e.target.value);
  };

  const handleChangeProfessionnalSituation = (e) => {
    setProfessionnalSituation(e.target.value);
  };

  const handleChangeOccupation = (e) => {
    setOccupation(e.target.value);
  };

  const handleChangeNumberChildren = (e) => {
    setNumberOfChildren(e.target.value);
  };

  const handleChangeRoad = (e) => {
    setRoad(e.target.value);
  };

  const handleChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const handleChangeZipCode = (e) => {
    setZipCode(e.target.value);
  };

  const handleChangeCity = (e) => {
    setCity(e.target.value);
  };

  const handleChangeTelFix = (e) => {
    setTelFix(e.target.value);
  };

  const handleChangeTelPort = (e) => {
    setTelPort(e.target.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      firstname,
      lastname,
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
      password,
    };
    // console.log(data);

    if (!firstname || !lastname || !birthday || !mail || !password) {
      // eslint-disable-next-line no-alert
      alert(
        "You must provide a firstname, a lastname, a mail and a password !!!"
      );
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        // .then((res) => {
        //   // console.log(res);
        //   return res.json();
        // })
        .then(() => {
          navigate(`/doctors/${idDoctor}/patients/`);
        })
        .catch((err) => {
          console.error(err);
          // eslint-disable-next-line no-alert
          alert("Error to create the patient, please try again");
        });
    }
  };

  return (
    <div className="min-h-screen bg-[#242731]">
      <div className="hidden md:block">
        <SideBarDoctor />
      </div>
      <div className="md:ml-[321px] py-5 md:py-14 text-[#FFFFFF]">
        <HeaderDoctor text="Un nouveau patient ?!" />
      </div>
      <div className="flex justify-center items-center md:ml-64">
        <div className="rounded-2xl shadow-lg shadow-slate-950/70 mb-10">
          <section className="">
            <p className="text-white italic text-sm pl-4">
              * Champs obligatoires
            </p>
            <div className="bg-dark-02 rounded-24">
              <form onSubmit={handleSubmit} className="mt-2 px-4">
                <div className="flex flex-col ">
                  <div className="grid lg:grid-cols-2 gap-4 overflow-y-auto pb-5 lg:h-[370px] ">
                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="firstname"
                        className=" text-base mb-2 text-white "
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
                        className="px-4 py-1 text-black rounded-md w-full"
                        type="text"
                        id="lastname"
                        required
                        value={lastname}
                        onChange={handleChangeLastname}
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="maiden-name"
                        className=" text-base mb-2 text-white"
                      >
                        Nom de jeune fille
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md w-full"
                        type="text"
                        id="nom de jeune fille"
                        value={maidenName}
                        onChange={handleChangeMaidenName}
                      />
                    </div>
                    <div className="flex gap-4">
                      <div className="flex flex-col items-start">
                        <label
                          htmlFor="sexe"
                          className=" text-base mb-2 text-white"
                        >
                          Sexe
                        </label>
                        <select
                          className="px-4 py-1  text-black rounded-md w-full"
                          id="sexe"
                          value={sexe}
                          onChange={handleChangeSexe}
                        >
                          <option>Sélectionner</option>
                          <option value="Masculin">Masculin</option>
                          <option value="Féminin">Féminin</option>
                        </select>
                      </div>
                      <div className="flex flex-col items-start">
                        <label
                          htmlFor="date"
                          className=" text-base mb-2 text-white"
                        >
                          Date de naissance *
                        </label>
                        <input
                          className="px-4 py-1 text-black rounded-md w-full"
                          type="text"
                          placeholder="JJ/MM/AAAA"
                          id="birthday"
                          value={birthday}
                          onChange={handleChangeBirthday}
                        />
                      </div>
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="family-situation"
                        className=" text-base mb-2 text-white"
                      >
                        Situation familiale
                      </label>
                      <select
                        className="px-4 py-1 text-black rounded-md w-full"
                        id="family-situation"
                        value={familySituation}
                        onChange={handleChangeFamilySituation}
                      >
                        <option>Sélectionner</option>
                        <option value="Marié(e)">Marié(e)</option>
                        <option value="Pacsé(e)">Pacsé(e)</option>
                        <option value="Célibataire">Célibataire</option>
                        <option value="Séparé(e)">Séparé(e)</option>
                        <option value="Veuf(ve)">Veuf(ve)</option>
                        <option value="Divorcé(e)">Divorcé(e)</option>
                      </select>
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="number-of-children"
                        className=" text-base mb-2 text-white"
                      >
                        Nombre d'enfants
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md w-full"
                        type="number"
                        id="number-of-children"
                        value={numberOfChildren}
                        onChange={handleChangeNumberChildren}
                      />
                    </div>

                    <div className="flex flex-col items-start ">
                      <label
                        htmlFor="professionnal-situation"
                        className=" text-base mb-2 text-white"
                      >
                        Situation professionnelle
                      </label>
                      <select
                        className="px-4 py-1 text-black rounded-md w-full"
                        id="professionnal_situation"
                        value={professionnalSituation}
                        onChange={handleChangeProfessionnalSituation}
                      >
                        <option>Sélectionner</option>
                        <option value="Agriculteur exploitant">
                          Agriculteur exploitant
                        </option>
                        <option value="Artisan/Commerçant/Chef d''entreprise">
                          Artisan / Commerçant / Chef d'entreprise
                        </option>
                        <option value="Cadre/Professions intellectuelles supérieures">
                          Cadre / Professions intellectuelles supérieures
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

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="occupation"
                        className=" text-base mb-2 text-white"
                      >
                        Métier
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md w-full"
                        type="text"
                        id="occupation"
                        value={occupation}
                        onChange={handleChangeOccupation}
                      />
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="tel"
                        className="text-base mb-2 text-white"
                      >
                        Téléphone fixe
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md w-full"
                        type="text"
                        id="tel"
                        value={telFix}
                        onChange={handleChangeTelFix}
                      />
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="tel-mobile"
                        className="text-base mb-2 text-white"
                      >
                        Téléphone portable
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md w-full"
                        type="text"
                        id="tel-mobile"
                        value={telPort}
                        onChange={handleChangeTelPort}
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="mail"
                        className="text-base mb-2 text-white"
                      >
                        Mail *
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md w-full"
                        type="email"
                        id="mail"
                        required
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
                        className="px-4 py-1 text-black rounded-md w-full"
                        type="password"
                        id="password"
                        required
                        value={password}
                        onChange={handleChangePassword}
                      />
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="road"
                        className="text-base mb-2 text-white"
                      >
                        N°, rue, route, avenue ...
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md w-full"
                        type="text"
                        id="road"
                        value={road}
                        onChange={handleChangeRoad}
                      />
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="zip-code"
                        className="text-base mb-2 text-white"
                      >
                        Code Postal
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md w-full"
                        type="number"
                        id="zip-code"
                        value={zipCode}
                        onChange={handleChangeZipCode}
                      />
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="city"
                        className="text-base mb-2 text-white"
                      >
                        Ville
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md w-full"
                        type="text"
                        id="city"
                        value={city}
                        onChange={handleChangeCity}
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="country"
                        className="text-base mb-2 text-white"
                      >
                        Pays
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md w-full"
                        type="text"
                        id="country"
                        value={country}
                        onChange={handleChangeCountry}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-6">
                  <Link to={`/doctors/${idDoctor}/patients/`}>
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="bg-[#323847] rounded-full shadow-slate-950/90 shadow-xl mb-5 text-white
                    hover:text-white sm:hover:bg-white/30  duration-300"
                    >
                      <p className="flex px-6 py-2">Enregistrer</p>
                    </button>
                  </Link>
                </div>
                {/* <Modal
                  open={open}
                  onClose={onCloseModal}
                  center
                  classNames={{
                    overlay: "customOverlay",
                    modal: "customModal",
                  }}
                  closeIcon={
                    <span
                      style={{
                        fontSize: "20px",
                        width: "20px",
                        height: "20px",
                        color: "white",
                      }}
                    >
                      X
                    </span>
                  }
                >
                  <h1 className="text-[#FFFFFF] text-center">
                    Confirmer l'enregistrement ?
                  </h1>

                  <div className="flex justify-center mt-2 gap-6 ">
                    <Link
                      to={`/doctors/${idDoctor}/patients/`}
                      className="text-[#FFFFFF] bg-[#323847] sm:rounded-full sm:mt-3 sm:w-20 sm:hover:bg-white/30  sm:hover:font-semibold"
                    >
                      <p className=" text-center p-1">Oui</p>
                    </Link>
                    <button
                      type="button"
                      onClick={handleNonButtonClick}
                      className="text-[#FFFFFF] bg-[#323847] sm:rounded-full sm:mt-3 sm:w-20 sm:hover:bg-white/30  sm:hover:font-semibold"
                    >
                      <p className=" text-center p-1">Non</p>
                    </button>
                  </div>
                </Modal> */}
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
