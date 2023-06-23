import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
import SideBarDoctor from "./SideBarDoctor";
import edit from "../assets/logo/logoDoctor/edit.png";
import HeaderDoctor from "./HeaderDoctor";

export default function CreateIntervention() {
  // const navigate = useNavigate();
  const [surgeryType, setSurgeryType] = useState("");
  const [doctor, setDoctor] = useState("");
  const [patientId, setPatientId] = useState("");
  const [time, setTime] = useState("");
  const [doctorsList, setDoctorsList] = useState([]);
  const [patientsList, setPatientsList] = useState([]);
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch("http://localhost:8000/api/doctors")
      .then((res) => res.json())
      .then((data) => setDoctorsList(data));

    fetch("http://localhost:8000/api/patients")
      .then((res) => res.json())
      .then((data) => setPatientsList(data));
  }, []);

  const handleChangeSurgeryType = (e) => {
    setSurgeryType(e.target.value);
  };

  const handleChangeProtocol = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDoctor = (e) => {
    setDoctor(e.target.value);
  };

  const handleChangePatient = (e) => {
    setPatientId(e.target.value);
  };

  const handleChangeTime = (e) => {
    setTime(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const data = {
    //   surgeryType,
    //   doctor,
    //   patientId,
    //   time,
    //   title,
    // };

    fetch("http://localhost:8000/api/protocols", {
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
        fetch("http://localhost:8000/api/interventions", {
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
            console.warn(interventionData);
          })
          .catch((error) => {
            console.error("2", error);
          });
      })
      .catch((error) => {
        console.error("1", error);
      });
  };

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
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
                <div className="grid grid-cols-3 gap-4">
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
                      value={surgeryType}
                      onChange={handleChangeSurgeryType}
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
                      value={doctor}
                      onChange={handleChangeDoctor}
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
                <div className="grid grid-cols-3 gap-4 py-4">
                  <div className="flex flex-col">
                    <label
                      htmlFor="dateTime"
                      className="text-base mb-2 text-white"
                    >
                      Date & Time
                    </label>
                    <input
                      type="datetime"
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
                    className="px-4 py-2 bg-primary rounded-full text-white"
                  >
                    Create Intervention
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
