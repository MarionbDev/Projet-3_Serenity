import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Administratif() {
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
  // const [hashedPassword, setHashedPassword] = useState("");
  // const navigate = useNavigate();

  const { id } = useParams();

  const getOnePatient = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients/${id}`)
      .then((res) => res.json())
      .then((data) => {
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
      })
      .catch((err) => console.error(err));
  };

  // const handleUpdatePatient = (e) => {
  //   e.preventDefault();

  //   const updatedPatient = {
  //     lastname,
  //     firstname,
  //     maiden_name: maidenName,
  //     birthday,
  //     sexe,
  //     family_situation: familySituation,
  //     professionnal_situation: professionnalSituation,
  //     occupation,
  //     number_of_children: numberOfChildren,
  //     road,
  //     country,
  //     zip_code: zipCode,
  //     city,
  //     tel_fixe: telFix,
  //     tel_portable: telPort,
  //     mail,
  //     hashedPassword,
  //     patientId,
  //   };

  //   fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients/${patientId}`, {
  //     method: "PUT",
  //     credentials: "include",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(updatedPatient),
  //   })
  //     .then(() => {
  //       navigate(`/doctors/${idDoctor}/patients`);
  //     })
  //     .catch((error) => {
  //       console.error("Error updating patient:", error);
  //     });
  // };

  useEffect(() => {
    getOnePatient();
  }, [id]);

  if (!onePatient) {
    return <p>Loading page</p>;
  }

  return (
    <div className="mt-[40px] w-[70vw] border-4 rounded-2xl border-cyan-400 bg-gray-100">
      <p className="c mt-4 ml-8 text-xl">La fiche administrative</p>

      <div className="ml-8 text-base">
        <p className="mt-8 font-bold">État civil</p>
        <form className="flex flex-col mb-10">
          <label className="mr-2 mt-4" htmlFor="sexe">
            Sexe
          </label>
          <select
            className="w-64 mt-1 mb-4"
            id="sexe"
            value={sexe}
            onChange={(e) => setSexe(e.target.value)}
          >
            <option>Sélectionner</option>
            <option value="Masculin">Masculin</option>
            <option value="Féminin">Féminin</option>
          </select>
          <label className="mr-2" htmlFor="firstname">
            Nom
          </label>
          <input
            type="text"
            className="w-64 mt-1"
            placeholder="Saisissez votre nom"
            id="firstname"
            required
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <label className="mr-2 mt-4" htmlFor="lastname">
            Prénom
          </label>
          <input
            type="text"
            className="w-64 mt-1"
            placeholder="Saisissez votre prénom"
            id="lastname"
            required
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />

          <label className="mr-2 mt-4" htmlFor="situationfamiliale">
            Situation familiale
          </label>
          <select
            className="w-64 mt-1"
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

          <label className="mr-2 mt-4" htmlFor="profession">
            Profession
          </label>
          <input
            type="text"
            id="occupation"
            value={occupation}
            className="w-64 mt-1"
            placeholder="Saisissez votre profession"
            onChange={(e) => setOccupation(e.target.value)}
          />
          <label className="mr-2 mt-4" htmlFor="nomjeunefille">
            Nom de jeune fille
          </label>
          <input
            type="text"
            id="nom de jeune fille"
            value={maidenName}
            className="w-64 mt-1"
            placeholder="Saisissez votre nom de jeune fille"
            onChange={(e) => setMaidenName(e.target.value)}
          />

          <label className="mr-2 mt-4" htmlFor="date">
            Date de naissance
          </label>
          <input
            className="w-64 mt-1"
            placeholder="Saisissez votre date de naissance"
            id="birthday"
            type="text"
            value={birthday}
            onChange={(e) => setBirthday(e.target.value)}
          />
          <label className="mr-2 mt-4" htmlFor="situationpro">
            Situation professionnelle
          </label>
          <select
            className="w-64 mt-1"
            id="professionnal-situation"
            value={professionnalSituation}
            onChange={(e) => setProfessionnalSituation(e.target.value)}
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
          <label className="mr-2 mt-4" htmlFor="nombre">
            Nombre d'enfants
          </label>
          <input
            type="text"
            name="nombre"
            value={numberOfChildren}
            className="w-64 mt-1"
            placeholder="Nombre"
            onChange={(e) => setNumberOfChildren(e.target.value)}
          />
        </form>
      </div>

      <div className="border-t-2 border-b-2 w-[50%] mb-60 ml-8">
        <p className="mt-10 font-bold">Adresse et contact</p>
        <form className="flex flex-col mb-10">
          <label className="mr-2 mt-4" htmlFor="rue">
            Rue
          </label>
          <input
            type="text"
            id="road"
            value={road}
            onChange={(e) => setRoad(e.target.value)}
            className="w-64 mt-1"
            placeholder="Saisissez le nom de la rue"
          />

          <label className="mr-2 mt-4" htmlFor="pays">
            Pays
          </label>
          <input
            type="text"
            id="country"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-64 mt-1"
            placeholder="Saisissez votre pays"
          />

          <label className="mr-2 mt-4" htmlFor="code">
            Code postal
          </label>
          <input
            type="number"
            id="zip-code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
            className="w-64 mt-1"
            placeholder="Saisissez votre code postal"
          />

          <label className="mr-2 mt-4" htmlFor="ville">
            Ville
          </label>
          <input
            type="text"
            id="city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="w-64 mt-1"
            placeholder="Saisissez votre ville"
          />

          <label className="mr-2 mt-4" htmlFor="telfixe">
            Téléphone fixe
          </label>
          <input
            className="w-64 mt-1"
            placeholder="Saisissez votre téléphone fixe"
            type="text"
            id="tel_fixe"
            value={telFix}
            onChange={(e) => setTelFix(e.target.value)}
          />

          <label className="mr-2 mt-4" htmlFor="telportable">
            Téléphone portable
          </label>
          <input
            type="text"
            id="tel-mobile"
            value={telPort}
            onChange={(e) => setTelPort(e.target.value)}
            className="w-64 mt-1"
            placeholder="Saisissez votre téléphone portable"
          />

          <label className="mr-2 mt-4" htmlFor="email">
            Email
          </label>
          <input
            type="email"
            id="mail"
            value={mail}
            onChange={(e) => setMail(e.target.value)}
            className="w-64 mt-1"
            placeholder="Saisissez votre email"
          />
        </form>
      </div>
      {/* <button type="submit" onClick={handleUpdatePatient}></button> */}
    </div>
  );
}
