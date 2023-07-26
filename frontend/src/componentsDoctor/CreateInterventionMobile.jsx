import React, { useState, useEffect } from "react";
import edit from "../assets/logo/logoDoctor/edit.png";
import HeaderDoctor from "./HeaderDoctor";

export default function CreateInterventionMobile() {
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
              .then((res) => res.json())
              // .then((surgeryTypeData) => {
              //   console.warn(surgeryTypeData);
              // })
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
      <div className=" text-[#FFFFFF]">
        <HeaderDoctor text="Ajoutez une intervention !" />
      </div>
      <div className="flex ">
        <div className=" rounded-2xl shadow-lg shadow-slate-950/70">
          <div className="">
            <div className="">
              <button type="button">
                <img src={edit} alt="edit" className="w-[24px] h-[24px] mr-8" />
              </button>
            </div>
          </div>
          <section className="relative">
            <div className="bg-dark-02 rounded-24" />
            <form onSubmit={handleSubmit} className="p-4">
              <div className="flex flex-col">
                <div className="">
                  <div className="flex flex-col">
                    <label
                      htmlFor="surgeryType"
                      className="text-base mb-2 text-white"
                    >
                      Surgery Type
                    </label>
                    <input
                      type="text"
                      id="surgeryType"
                      className="px-4 py-1 text-black rounded-full"
                      value={name}
                      onChange={handleChangeName}
                      placeholder="Enter surgery type"
                    />
                  </div>
                  <div className="flex flex-col col-span-2">
                    <label
                      htmlFor="protocol"
                      className="text-base mb-2 text-white"
                    >
                      Protocol
                    </label>
                    <input
                      type="text"
                      id="protocol"
                      className="px-4 py-1 text-black rounded-full"
                      value={title}
                      onChange={handleChangeProtocol}
                      placeholder="Enter a protocol to follow"
                    />
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="doctor"
                      className="text-base mb-2  text-white"
                    >
                      Doctor
                    </label>
                    <select
                      id="doctor"
                      className="px-4 py-1 text-black rounded-full"
                      value={doctorId}
                      onChange={handleChangeDoctorId}
                    >
                      <option value="">Select a doctor</option>
                      {doctorsList.map((doc) => (
                        <option key={doc.id} value={doc.id}>
                          {doc.firstname} {doc.lastname}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="flex flex-col">
                    <label
                      htmlFor="patient"
                      className="text-base mb-2 text-white"
                    >
                      Patient
                    </label>
                    <select
                      id="patient"
                      className="px-4 py-1 text-black rounded-full"
                      value={patientId}
                      onChange={handleChangePatient}
                    >
                      <option value="">Select a patient</option>
                      {patientsList.map((patient) => (
                        <option key={patient.id} value={patient.id}>
                          {patient.firstname} {patient.lastname}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <div className="">
                  <div className="flex flex-col">
                    <label
                      htmlFor="dateTime"
                      className="text-base mb-2 text-white"
                    >
                      Date & Time
                    </label>
                    <input
                      type="datetime-local"
                      id="time"
                      className="px-4 py-1 text-black rounded-full"
                      value={time}
                      onChange={handleChangeTime}
                    />
                  </div>
                </div>
                <div className="mt-4">
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
