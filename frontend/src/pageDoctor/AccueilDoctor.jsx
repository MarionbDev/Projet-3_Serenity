import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import SideBarDoctor from "../componentsDoctor/SideBarDoctor";
import HeaderDoctor from "../componentsDoctor/HeaderDoctor";
import search from "../assets/logo/logoDoctor/Search.png";
import notification from "../assets/logo/logoDoctor/bell.png";

export default function AccueilDoctor() {
  const [patients, setPatients] = useState([]);
  const [searchInput, setSearchInput] = useState("");

  const { idPatient } = useUserContext();

  const getAllPatients = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients`)
      .then((res) => res.json())
      .then((data) => {
        setPatients(data);
        console.warn(data);
      });
  };

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
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor text="Comment vont vos patients ?!" />{" "}
      </div>

      <div className=" flex flex-col  w-[426px]  absolute right-0 border-l-[1px] min-h-screen border-[#a5a5a5]/20 ">
        <div className="flex pt-[56px] ">
          <img
            src={search}
            alt="search"
            className="relative top-2 left-10 w-[20px] h-[20px]  mr-4 flex"
          />
          <input
            className="h-[36px] w-56  py-3 pl-10 bg-[#282b33] text-[14px] rounded-xl shadow-slate-950/80 shadow-lg italic text-[#FFFFFF] "
            type="text"
            placeholder="Nom de votre patient "
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <div className="rounded-full ml-20 mt-[-17px] h-[50px] w-[54px]  shadow-lg shadow-slate-950/80 flex justify-center items-center">
            <img
              src={notification}
              alt="notification"
              className=" w-[24px] h-[24px]  "
            />
          </div>
        </div>

        <div className="flex m-6 overflow-y-auto overflow-hidden h-[570px] border-[1px] border-[#a5a5a5]/20 ">
          <ul className="overflow-y-auto  overflow-hidden text-[#FFFFFF]  w-[991px] flex flex-col  m-4">
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
                <li
                  key={`item-${patients.id}`}
                  className="flex gap-2 mb-3 text-[16px] "
                >
                  <p>{patient.firstname}</p>
                  <p>{patient.lastname}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div className="flex absolute ml-72 mt-56 text-[#FFFFFF] w-[800px] h-auto">
        <p className="italic">Informations sur le patient :</p>
      </div>
    </div>
  );
}
