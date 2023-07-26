import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

export default function Administratif() {
  const [patient, setPatient] = useState([]);

  const { id } = useParams();

  const getOnePatient = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setPatient(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOnePatient();
  }, [id]);

  if (!patient) {
    return <p>Loading page</p>;
  }

  return (
    <div className="mt-[40px] w-[70vw] border-4 rounded-2xl border-cyan-400 bg-gray-100 py-8 mb-10">
      <p className=" ml-8 text-xl mb-2">La fiche administrative</p>
      <div className="text-base ">
        <div className="flex flex-col pl-20 pr-18">
          <p className="mt-2 mb-1 font-bold">État civil</p>
          <div className="flex justify-between pr-48">
            <div>
              <p>Sexe : {patient.sexe}</p>
              <p>Prénom : {patient.firstname}</p>
              <p>Nom : {patient.lastname}</p>
              <p>Situation familiale : {patient.family_situation}</p>
              <p>Profession : {patient.professionnal_situation}</p>
            </div>
            <div>
              <p>Nom de jeune fille : {patient.maiden_name}</p>
              <p>Date de naissance : {patient.birthday}</p>
              <p>
                Situation professionnelle : {patient.professionnal_situation}
              </p>
              <p>Nombre d'enfants : {patient.number_of_children}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-between pl-20 pr-18">
          <div className=" text-base">
            <p className="mt-8 mb-1 font-bold">Adresse et contact</p>
            <div className="flex  justify-between gap-20">
              <div>
                <p>Rue : {patient.road} </p>
                <p>Code postal : {patient.zip_code} </p>
                <p>Téléphone fixe : {patient.tel_fixe} </p>
                <p>Email : {patient.mail}</p>
              </div>
              <div>
                <p>Pays : {patient.country}</p>
                <p>Ville : {patient.city}</p>
                <p>Téléphone portable : {patient.tel_portable}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-10 ">
        <Link
          to={`/patients/${id}/ma-preparation/edit-demarches-administratives`}
        >
          <button
            type="button"
            className="border-2 rounded-xl p-3 duration-300 border-cyan-400 bg-white hover:bg-cyan-100"
          >
            <p>Mettre à jour mes données</p>
          </button>
        </Link>
      </div>
    </div>
  );
}
