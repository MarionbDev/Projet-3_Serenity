import { useState, useEffect } from "react";
import { useUserContext } from "../contexts/UserContext";
import edit from "../assets/logoDoctor/edit.png";
import trash from "../assets/logoDoctor/trash.png";

// import PropTypes from "prop-types";
import SideBarDoctor from "./SideBarDoctor";
import search from "../assets/logoDoctor/Search.png";

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

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <p className="text-[24px]">Bonjour, </p>
        <p className="text-[37px]">Une nouvelle intervention ?!</p>
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
            // onChange={(e) => setQuery(e.target.value)}
            // value={query}
          />
          <div className="flex  ml-[35rem] items-center">
            <img src={edit} alt="edit" className="w-[24px] h-[24px] mr-8" />
            <img src={trash} alt="trash" className="w-[24px] h-[24px]" />
          </div>
        </div>
        <section>
          <div className=" text-gray-500 flex mt-8 text-[16px] h-[45px]">
            <p className="ml-8">Sélection</p>
            <p className="ml-[40rem]">Nombre réalisé</p>
          </div>

          <div className="text-white flex h-[104px] mt-[31px]">
            {interventions.map((intervention) => (
              <div key={intervention.id} className="flex">
                <p className="ml-8">{intervention.name}</p>
                <p className="ml-[34rem]">{intervention.intervention_count}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
// InterventionDoctor.propTypes = { lastname: PropTypes.string.isRequired };
