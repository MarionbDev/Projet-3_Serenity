import { useState, useEffect } from "react";
// import PropTypes from "prop-types";
import SideBarDoctor from "./SideBarDoctor";
import search from "../assets/logo/Search.png";

export default function InterventionDoctor() {
  const [setInterventions] = useState([]);

  const getAllInterventions = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/doctor/:id/intervention`)
      .then((resp) => resp.json())
      .then((data) => setInterventions(data));
  };

  useEffect(() => {
    getAllInterventions();
  }, []);

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <p className="text-[24px]">Bonjour Dr </p>
        <p className="text-[37px]">Une nouvelle intervention ?!</p>
      </div>
      <div className="absolute w-[1055px] h-96 ml-[321px] mt-[172px] rounded-2xl shadow-lg shadow-slate-950/70    ">
        <div className="flex mt-[32px]  ">
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
        </div>
        {/* <div>{interventions.map((intervention) => )}</div> */}
      </div>
    </div>
  );
}
// InterventionDoctor.propTypes = { lastname: PropTypes.string.isRequired };
