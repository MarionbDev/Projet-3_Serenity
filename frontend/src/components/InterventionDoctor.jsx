import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import edit from "../assets/logo/logoDoctor/edit.png";
import trash from "../assets/logo/logoDoctor/trash.png";
import search from "../assets/logo/logoDoctor/Search.png";
import SideBarDoctor from "./SideBarDoctor";
import HeaderDoctor from "./HeaderDoctor";
import imgList from "../assets/logo/logoDoctor/imgList.png";

export default function InterventionDoctor() {
  const [interventions, setInterventions] = useState([]);
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
  useEffect(() => {
    if (idDoctor !== "") {
      getAllInterventions();
      console.warn(interventions);
    }
  }, []);

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
      <div className="absolute w-[1055px] h-96 ml-[321px] mt-[172px] rounded-2xl shadow-lg shadow-slate-950/70    ">
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
          <div className="flex  ml-[35rem] items-center">
            <button type="button">
              <img src={edit} alt="edit" className="w-[24px] h-[24px] mr-8" />
            </button>
          </div>
        </div>
        <section>
          <div className="flex border-b-[1px] border-[#a5a5a5]/20 ml-[32px]  text-gray-500 mt-8 text-[16px] h-[45px] w-[991px]">
            <p className="ml-8">Sélection</p>
            <p className="ml-[40rem]">Nombre réalisé</p>
          </div>

          <ul className="text-white flex items-start border-b-[1px] border-[#a5a5a5]/20 h-[104px]  ml-[32px] mt-[31px]">
            {interventions.map((intervention) => (
              <li key={intervention.id} className="flex items-center">
                <button type="button">
                  <img src={trash} alt="trash" className="w-[24px] h-[24px]" />
                </button>
                <img
                  className="w-[96px] h-[80px] ml-[36px]  "
                  src={imgList}
                  alt="logo"
                />
                <div className="flex">
                  <p className=" ml-8">{intervention.name}</p>
                  <p className="ml-[25rem]">
                    {intervention.intervention_count}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
