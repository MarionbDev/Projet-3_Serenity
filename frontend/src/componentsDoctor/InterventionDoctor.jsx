import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { convertDateFormat, convertHourFormat } from "../services/convertTime";
import trash from "../assets/logo/logoDoctor/trash.png";
import search from "../assets/logo/logoDoctor/Search.png";
import SideBarDoctor from "./SideBarDoctor";
import HeaderDoctor from "./HeaderDoctor";
import imgList from "../assets/images/Img.png";

export default function InterventionDoctor() {
  const [surgeryTypes, setSurgeryTypes] = useState([]);
  const [selectedIntervention, setSelectedIntervention] = useState(null);
  const [searchInput, setSearchInput] = useState("");

  // console.log(searchInput);

  const { idDoctor } = useUserContext();

  const getAllSurgeryTypes = () => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/api/doctors/${idDoctor}/interventions`
    )
      .then((res) => res.json())
      .then((data) => {
        setSurgeryTypes(data);
        console.warn(data);
      });
  };

  const setInterventionInfo = (surgeryTypeId) => {
    setSelectedIntervention(
      surgeryTypeId === selectedIntervention ? null : surgeryTypeId
    );
  };

  const deleteIntervention = (id) => {
    // if (confirm("Voulez-vous supprimer cette intervention ?")) {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/api/doctors/${idDoctor}/interventions/${id}`,
      {
        method: "DELETE",
      }
    )
      .then(() => {
        // console.log("Intervention supprimée avec succès");
        getAllSurgeryTypes();
      })
      .catch((err) => console.error(err));
    // }
  };

  useEffect(() => {
    if (idDoctor !== "") {
      getAllSurgeryTypes();
      console.warn(surgeryTypes);
    }
  }, [idDoctor]);

  useEffect(() => {
    if (searchInput !== "") {
      getAllSurgeryTypes();
    }
  }, [searchInput]);

  if (!surgeryTypes) {
    return <p>Loading page</p>;
  }

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor text="Une nouvelle intervention ?!" />
      </div>
      <div className="absolute w-[1055px]  ml-[321px] mt-[172px] rounded-2xl shadow-lg shadow-slate-950/70    ">
        <div className="flex mt-[32px] ">
          <img
            src={search}
            alt="search"
            className="relative left-12 bottom-1 w-[24px] h-[24px] mt-5 mr-4 flex"
          />
          <input
            className="h-[56px] w-[320px] text-gray-500 pl-10 bg-[#282b33]  shadow-slate-950/70 shadow-sm rounded-2xl italic text-[#FFFFFF]"
            type="text"
            placeholder="Votre intervention "
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <section>
          <div className="flex border-b-[1px] border-[#a5a5a5]/20 ml-[32px]  text-gray-500 mt-8 text-[16px] h-[45px] w-[991px]">
            <p className="ml-8">Sélection</p>
            <p className="ml-[40rem]">Nombre d'intervention</p>
          </div>
          <div>
            <ul className="overflow-y-auto overflow-hidden h-[230px] text-[#FFFFFF] w-[991px] flex flex-col  border-b-[1px] border-[#a5a5a5]/20  mt-[31px]">
              {surgeryTypes
                .filter((surgeryType) =>
                  surgeryType.name
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                )
                .map((surgeryType) => (
                  <li
                    key={`intervention-${surgeryType.id}`}
                    className="flex flex-col mb-8"
                  >
                    <button
                      type="button"
                      className="flex items-center"
                      onClick={() => setInterventionInfo(surgeryType.id)}
                    >
                      <img
                        className="w-[96px] h-[80px] ml-[36px]  "
                        src={imgList}
                        alt="logo"
                      />
                      <div className="  w-[991px]">
                        <div className="flex justify-between w-[720px]">
                          <p className="ml-8 text-[16px] ">
                            {surgeryType.name}
                          </p>
                          <p className=" ">{surgeryType.count}</p>
                        </div>
                      </div>
                    </button>
                    <div className=" flex justify-center w-[991px]">
                      {selectedIntervention === surgeryType.id && (
                        <div className="flex justify-between w-[720px] my-5">
                          <ul className=" italic flex flex-col">
                            {surgeryType.interventions.map((item) => (
                              <div className="w-[720px]">
                                <li
                                  key={`item-${item.id}`}
                                  className="flex justify-between ml-8 text-[16px] list-disc mb-4"
                                >
                                  <div className="flex w-20 gap-3">
                                    <p>{item.patient.firstname}</p>
                                    <p>{item.patient.lastname}</p>
                                  </div>
                                  <div className="flex justify-end ">
                                    <p className="mr-6 text-[14px]">
                                      {surgeryTypes &&
                                        convertDateFormat(item.time)}
                                    </p>
                                    <p className="text-[14px]">
                                      {surgeryTypes &&
                                        convertHourFormat(item.time)}
                                    </p>
                                  </div>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      onClick={() =>
                                        deleteIntervention(item.id)
                                      }
                                    >
                                      <img
                                        src={trash}
                                        alt="trash"
                                        className="w-[20px] h-[20px]"
                                      />
                                    </button>
                                  </div>
                                </li>
                              </div>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  </li>
                ))}
            </ul>
          </div>
          <div className="flex justify-center mt-8">
            <Link
              to={`/doctors/${idDoctor}/interventions/create-intervention`}
              className="bg-black  rounded-full shadow-xl  mb-5 text-white hover:text-white hover:border-2 hover:border-white "
              Une
              nouvelle
              intervention
            >
              <p className="flex px-6 py-2">Une nouvelle intervention</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
