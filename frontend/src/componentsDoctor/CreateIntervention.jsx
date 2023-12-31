import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

import SideBarDoctor from "./SideBarDoctor";
import HeaderDoctor from "./HeaderDoctor";

export default function CreateIntervention() {
  const { idDoctor } = useUserContext();
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [doctorId, setDoctorId] = useState("");
  const [patientId, setPatientId] = useState("");
  const [time, setTime] = useState("");
  const [doctorsList, setDoctorsList] = useState([]);
  const [patientsList, setPatientsList] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/doctors`)
      .then((res) => res.json())
      .then((data) => setDoctorsList(data));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients`)
      .then((res) => res.json())
      .then((data) => setPatientsList(data));
  }, []);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeProtocol = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDoctorId = (e) => {
    setDoctorId(e.target.value);
  };

  const handleChangePatient = (e) => {
    setPatientId(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/protocols`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    })
      .then((res) => res.json())
      .then((protocolData) => {
        const protocolId = protocolData.insertId;

        fetch(`${import.meta.env.VITE_BACKEND_URL}/api/interventions`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            time,
            protocol_id: protocolId,
            patient_id: patientId,
          }),
        })
          .then((res) => res.json())
          .then((interventionData) => {
            const interventionId = interventionData.insertId;

            fetch(`${import.meta.env.VITE_BACKEND_URL}/api/surgeryTypes`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                name,
                doctor_id: doctorId,
                intervention_id: interventionId,
              }),
            })
              // .then((res) => res.json())
              .then(() => {
                navigate(`/doctors/${idDoctor}/interventions/`);
              })
              // .then(() => {})
              .catch((error) => {
                console.error(error);
              });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="min-h-screen bg-[#242731]">
      <div className="hidden md:block">
        <SideBarDoctor />
      </div>
      <div className="md:ml-[321px] py-5 md:py-14 text-[#FFFFFF]">
        <HeaderDoctor text="Ajoutez une intervention !" />
      </div>
      <div className="flex justify-center items-center md:ml-64">
        <div className="rounded-2xl shadow-lg shadow-slate-950/70 mb-10">
          <section className="">
            <p className="text-white italic text-sm pl-4">
              * Champs obligatoires
            </p>
            <div className="bg-dark-02 rounded-24" />
            <form onSubmit={handleSubmit} className="mt-2 px-4">
              <div className="flex flex-col">
                <div className="grid lg:grid-cols-2 gap-4 overflow-y-auto pb-5  ">
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="surgeryType"
                      className="text-base mb-2 text-white"
                    >
                      Type d'opération *
                    </label>
                    <input
                      type="text"
                      id="surgeryType"
                      className="px-4 py-1 text-black rounded-md w-full"
                      value={name}
                      onChange={handleChangeName}
                      placeholder="Renseigner un type d'opération"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="protocol"
                      className="text-base mb-2 text-white"
                    >
                      Protocole *
                    </label>
                    <input
                      type="text"
                      id="protocol"
                      className="px-4 py-1 text-black rounded-md w-full"
                      value={title}
                      onChange={handleChangeProtocol}
                      placeholder="Renseigner un protocole"
                    />
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="doctor"
                      className="text-base mb-2  text-white"
                    >
                      Praticien *
                    </label>
                    <select
                      id="doctor"
                      className="px-4 py-1 text-black rounded-md w-full"
                      value={doctorId}
                      onChange={handleChangeDoctorId}
                    >
                      <option value="">Selectionner un praticien</option>
                      {doctorsList.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.firstname} {doc.lastname}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col items-start">
                    <label
                      htmlFor="patient"
                      className="text-base mb-2 text-white"
                    >
                      Patient *
                    </label>
                    <select
                      id="patient"
                      className="px-4 py-1 text-black rounded-md w-full"
                      value={patientId}
                      onChange={handleChangePatient}
                    >
                      <option value="">Selectionner un patient</option>
                      {patientsList.map((patient) => (
                        <option key={patient.id} value={patient.id}>
                          {patient.firstname} {patient.lastname}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="dateTime"
                      className="text-base mb-2 text-white"
                    >
                      Date & Heure *
                    </label>
                    <input
                      type="datetime-local"
                      id="time"
                      className="px-4 py-1 text-black rounded-md w-full"
                      value={time}
                      onChange={handleChangeTime}
                    />
                  </div>
                </div>
                <div className="flex justify-center mt-5">
                  <button
                    type="submit"
                    onClick={handleSubmit}
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
