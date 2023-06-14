import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import SideBarDoctor from "../components/SideBarDoctor";
import search from "../assets/logoDoctor/Search.png";
import notification from "../assets/logoDoctor/bell.png";

export default function AccueilDoctor() {
  const [doctor, setDoctor] = useState(null);

  const { id } = useParams();

  const getOneDoctor = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/doctors/${id}`)
      .then((resp) => resp.json())
      .then((data) => setDoctor(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneDoctor();
  }, [id]);

  if (!doctor) {
    return <p>Loading the doctor...</p>;
  }

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF] ">
        <p className="text-[24px]">Bonjour Dr {doctor.lastname} </p>
        <p className="text-[37px]">Comment vont vos patients ?!</p>
      </div>
      <div className=" flex  w-[426px]  absolute right-0 border-l-[1px] min-h-screen border-[#a5a5a5]/20 ">
        <div className="flex pt-[60px] ">
          <img
            src={search}
            alt="search"
            className="relative top-2 left-10 w-[20px] h-[20px]  mr-4 flex"
          />
          <input
            className="h-[34px] w-36  py-3 pl-10 bg-[#242731] text-[14px] rounded-xl shadow-slate-950/70 shadow-sm"
            type="text"
            placeholder="Search "
          />
          <div className="rounded-full ml-32 mt-[-17px] h-[50px] w-[54px]  shadow-lg shadow-slate-950/80 flex justify-center items-center">
            <img
              src={notification}
              alt="notification"
              className=" w-[24px] h-[24px]  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
