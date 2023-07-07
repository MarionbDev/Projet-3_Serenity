import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import { useUserContext } from "../contexts/UserContext";
import SideBarDoctor from "./SideBarDoctor";
import HeaderDoctor from "./HeaderDoctor";
import edit from "../assets/logo/logoDoctor/edit.png";

export default function CreatePatient() {
  const navigate = useNavigate();
  const { idDoctor } = useUserContext();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  // const [time, setTime] = useState("");

  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleNonButtonClick = () => {
    onCloseModal();
  };

  const handleChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
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

      mail,
      password,
    };
    // console.log("Data before sending request:", data);

    if (!firstname || !lastname || !mail || !password) {
      // alert(
      //   "You must provide a firstname, a lastname, a mail and a password !!!"
      // );
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => {
          // console.log("Response from server:", res);
          return res.json();
        })
        .then(() => {
          navigate(`/doctors/${idDoctor}/patients/`);
        })
        .catch((err) => {
          console.error(err);
          // alert("Error to create the patient, please try again");
        });
    }
  };

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor text="Un nouveau patient ?!" />
      </div>
      <div className="flex justify-center items-center min-h-screen ">
        <div className="absolute left-[321px] top-[172px] rounded-2xl shadow-lg shadow-slate-950/70 w-[1055px] h-[500px]">
          <div className="flex justify-end mt-[12px]">
            <div className="flex  items-end">
              <button type="button">
                <img src={edit} alt="edit" className="w-[24px] h-[24px] mr-8" />
              </button>
            </div>
          </div>
          <section className="relative ">
            <div className="absolute left-24 right-4 top-7 bg-dark-02 rounded-24">
              <form onSubmit={handleSubmit} className="px-4">
                <div className="flex flex-col ">
                  <div className="grid grid-cols-3 gap-4  overflow-y-auto  h-[370px] ">
                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="firstname"
                        className=" text-base mb-2 text-white "
                      >
                        Prénom
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md"
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
                        className="px-4 py-1 text-black rounded-md"
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
                        className="px-4 py-1 text-black rounded-md"
                        type="text"
                        id="nom de jeune fille"
                      />
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="sexe"
                        className=" text-base mb-2 text-white"
                      >
                        Sexe
                      </label>
                      <select
                        className="px-4 py-1  text-black rounded-md"
                        type="text"
                        id="sexe"
                      >
                        <option>...</option>
                        <option value="Masculin">Masculin</option>
                        <option value="Féminin">Féminin</option>
                      </select>
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="dateTime"
                        className=" text-base mb-2 text-white"
                      >
                        Date de naissance
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md"
                        type="datetime-local"
                        id="birthday"
                      />
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="family-situation"
                        className=" text-base mb-2 text-white"
                      >
                        Situation familiale
                      </label>
                      <select
                        className="px-4 py-1 text-black rounded-md"
                        type="text"
                        id="family-situation"
                      >
                        <option>...</option>
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
                        Nombre d'enfant
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md"
                        type="text"
                        id="number-of-children"
                      />
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="professionnal-situation"
                        className=" text-base mb-2 text-white"
                      >
                        Situation professionnelle
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md"
                        type="text"
                        id="professionnal-situation"
                      />
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="occupation"
                        className=" text-base mb-2 text-white"
                      >
                        Métier
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md"
                        type="text"
                        id="occupation"
                      />
                    </div>

                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="tel"
                        className="text-base mb-2 text-white"
                      >
                        Téléphone
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md"
                        type="text"
                        id="tel"
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
                        className="px-4 py-1 text-black rounded-md"
                        type="text"
                        id="tel-mobile"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <label
                        htmlFor="mail"
                        className="text-base mb-2 text-white"
                      >
                        Mail
                      </label>
                      <input
                        className="px-4 py-1 text-black rounded-md"
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
                        className="px-4 py-1 text-black rounded-md"
                        type="password"
                        id="password"
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
                        className="px-4 py-1 text-black rounded-md"
                        type="text"
                        id="road"
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
                        className="px-4 py-1 text-black rounded-md"
                        type="text"
                        id="zip-code"
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
                        className="px-4 py-1 text-black rounded-md"
                        type="text"
                        id="city"
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
                        className="px-4 py-1 text-black rounded-md"
                        type="text"
                        id="country"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex justify-center mt-4">
                  <button
                    type="submit"
                    onClick={onOpenModal}
                    className="bg-[#323847] rounded-full shadow-xl mb-5 text-white
                    hover:text-white sm:hover:bg-white/30"
                  >
                    <p className="flex px-6 py-2">Enregistrer</p>
                  </button>
                </div>
                <Modal
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
                </Modal>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
