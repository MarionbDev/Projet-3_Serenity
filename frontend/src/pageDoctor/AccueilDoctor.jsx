import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { convertDateFormat, convertHourFormat } from "../services/convertTime";
import SideBarDoctor from "../componentsDoctor/SideBarDoctor";
import HeaderDoctor from "../componentsDoctor/HeaderDoctor";
import search from "../assets/logo/logoDoctor/Search.png";

export default function AccueilDoctor() {
  const [patients, setPatients] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [surgeryTypes, setSurgeryTypes] = useState([]);

  const { idPatient } = useUserContext();
  const { idDoctor } = useUserContext();

  const getAllPatients = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients`)
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);
      });
  };

  const getAllSurgeryTypes = () => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/api/doctors/${idDoctor}/interventions`
    )
      .then((res) => res.json())
      .then((data) => {
        setSurgeryTypes(data);
      });
  };

  useEffect(() => {
    if (idDoctor !== "") {
      getAllSurgeryTypes();
    }
  }, [idDoctor]);

  useEffect(() => {
    if (idPatient !== "") {
      getAllPatients();
    }
  }, [idPatient]);

  useEffect(() => {
    if (searchInput !== "") {
      getAllPatients();
    }
  }, [searchInput]);

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute md:w-[770px] md:mt- lg:mt-[48px] md:ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor text="Vos rendez-vous :" />
        <div className="mt-[100px]">
          <ul className="w-600">
            {surgeryTypes.map((surgeryType) => (
              <div
                key={`intervention-${surgeryType.id}`}
                className="flex flex-col"
              >
                {surgeryType.interventions.map((item) => (
                  <li key={`item-${item.id}`} className="flex ">
                    <p className="w-40 mr-2 mb-5">
                      {surgeryTypes && convertDateFormat(item.time)}
                    </p>
                    <p className="w-16">
                      {surgeryTypes && convertHourFormat(item.time)}
                    </p>
                    <p className="w-64 ml-2">{surgeryType.name}</p>
                    <p className="">{item.patient.firstname}</p>
                    <p className="ml-3">{item.patient.lastname}</p>
                  </li>
                ))}
              </div>
            ))}
          </ul>
        </div>
      </div>
      <div className=" min-h-screen absolute md:flex-col md:justify-center md:items-center md:w-[500px] md:border-0 md:right-0 md:border-[#a5a5a5]/20 lg:border-l-[1px] lg:w-[300px] xl:w-[500px] ">
        <div className="flex  md:mt-10 lg:ml-[-20px] lg:mt-8">
          <img
            src={search}
            alt="search"
            className="flex relative w-[20px] h-[20px]  md:top-2 md:mt-36 md:left-10 md:mr-4 lg:mt-0 "
          />
          <input
            className="  md:mt-36 md:mr-28 md:h-[36px] md:w-72 lg:w-48 xl:w-56 md:py-3 md:pl-10 lg:mt-0 bg-[#282b33] rounded-xl shadow-slate-950/80 shadow-lg italic text-[#FFFFFF] text-[14px] "
            type="text"
            placeholder="Nom de votre patient "
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <div className="flex  md:m-6  md:overflow-y-auto md:overflow-hidden md:h-[370px] md:border-[1px] md:border-[#a5a5a5]/20 lg:h-[490px] xl:h-[570px] ">
          <ul className="md:overflow-y-auto  flex md:flex-col md:m-4 md:overflow-hidden text-[#FFFFFF] md:w-[391px] lg:w-[200px]  xl:w-[391px]  ">
            {patients
              .filter(
                (patient) =>
                  patient.lastname
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) ||
                  patient.firstname
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
              )
              .map((patient) => (
                <Link to={`patients/${patient.id}`}>
                  <li
                    key={`item-${patients.id}`}
                    className="flex md:gap-2 md:mb-3 text-[16px] "
                  >
                    <p>{patient.firstname}</p>
                    <p>{patient.lastname}</p>
                  </li>{" "}
                </Link>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
