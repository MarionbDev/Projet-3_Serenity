import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import trash from "../assets/logo/logoDoctor/trash.png";
import search from "../assets/logo/logoDoctor/Search.png";
import SideBarDoctor from "./SideBarDoctor";
import HeaderDoctor from "./HeaderDoctor";
import imgList from "../assets/images/Img.png";

export default function InterventionDoctor() {
  const [interventions, setInterventions] = useState([]);
  const [selectedIntervention, setSelectedIntervention] = useState(null);

  const { idDoctor } = useUserContext();

  const getAllInterventions = () => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL
      }/api/doctors/${idDoctor}/interventions`
    )
      .then((res) => res.json())
      .then((data) => {
        setInterventions(data);
        console.warn(data);
      });
  };

  // const getInterventionInfo = () => {
  //   fetch(
  //     `${
  //       import.meta.env.VITE_BACKEND_URL
  //     }/api/doctors/${idDoctor}/interventions`
  //   )
  //     .then((res) => res.json())
  //     .then((data) => {
  //       setInterventionInfo(data);
  //       console.warn(data);
  //     });
  // };

  const setInterventionInfo = (interventionId) => {
    setSelectedIntervention(
      interventionId === selectedIntervention ? null : interventionId
    );
  };

  useEffect(() => {
    if (idDoctor !== "") {
      getAllInterventions();
      // getInterventionInfo();
      console.warn(interventions);
    }
  }, [idDoctor]);

  // const deleteIntervention = (interventionId) => {
  //   fetch(
  //     `${import.meta.env.VITE_BACKEND_URL}/api/interventions/${interventionId}`,
  //     {
  //       method: "DELETE",
  //     }
  //   ).then((res) => {
  //     if (res.ok) {
  //       getAllInterventions();
  //     } else {
  //       console.error(
  //         "Une erreur s'est produite lors de la suppression de l'intervention."
  //       );
  //     }
  //   });
  // };

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor />
      </div>
      <div className="absolute w-[1055px]  ml-[321px] mt-[172px] rounded-2xl shadow-lg shadow-slate-950/70    ">
        <div className="flex mt-[32px] ">
          <img
            src={search}
            alt="search"
            className="relative left-12 bottom-1 w-[24px] h-[24px] mt-5 mr-4 flex"
          />
          <input
            className="h-[56px] w-[320px] text-gray-500 pl-10 bg-[#282b33]  shadow-slate-950/70 shadow-sm rounded-2xl"
            type="text"
            placeholder="Search "
          />
        </div>
        <section>
          <div className="flex border-b-[1px] border-[#a5a5a5]/20 ml-[32px]  text-gray-500 mt-8 text-[16px] h-[45px] w-[991px]">
            <p className="ml-8">Sélection</p>
            <p className="ml-[40rem]">Nombre d'intervention</p>
          </div>
          <div>
            <ul className="overflow-y-auto overflow-hidden h-[230px] text-white w-[991px] flex flex-col  border-b-[1px] border-[#a5a5a5]/20  mt-[31px]">
              {interventions.map((intervention) => (
                <li
                  key={`intervention-${intervention.id}`}
                  className="flex flex-col mb-8"
                >
                  <button
                    type="button"
                    className="flex items-center"
                    onClick={() => setInterventionInfo(intervention.id)}
                  >
                    <img
                      className="w-[96px] h-[80px] ml-[36px]  "
                      src={imgList}
                      alt="logo"
                    />
                    <div className="  w-[991px]">
                      <div className="flex justify-between w-[720px]">
                        <p className="ml-8 text-[16px] ">{intervention.name}</p>
                        <p className=" ">{intervention.intervention_count}</p>
                      </div>
                    </div>
                  </button>
                  <div className=" flex justify-center w-[991px]">
                    {selectedIntervention === intervention.id && (
                      <div className="flex justify-between w-[720px] my-5">
                        <ul className=" italic flex flex-col">
                          <li className="ml-8 text-[16px] list-disc mb-4">
                            Bénédicte Aphone le : 12/08/2023
                          </li>
                        </ul>
                        <div className="flex">
                          <button type="button">
                            <img
                              src={trash}
                              alt="trash"
                              className="w-[20px] h-[20px]"
                            />
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center ">
            <button
              type="button"
              className=" flex justify-center items-center bg-black text-white text-[14px] w-[166px] h-[56px] mb-2 mt-[38px] rounded-[16px] "
            >
              <p>Nouvelle intervention</p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
