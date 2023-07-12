import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";
import { convertDateFormat, convertHourFormat } from "../services/convertTime";
import trash from "../assets/logo/logoDoctor/trash.png";
import HeaderDoctor from "./HeaderDoctor";
import imgList from "../assets/images/Img.png";

export default function InterventionDoctor() {
  const [surgeryTypes, setSurgeryTypes] = useState([]);
  const [selectedIntervention, setSelectedIntervention] = useState(null);

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
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/surgeryTypes/${id}`, {
      method: "DELETE",
      credentials: "include",
    })
      .then(() => getAllSurgeryTypes())
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    if (idDoctor !== "") {
      getAllSurgeryTypes();
      console.warn(surgeryTypes);
    }
  }, [idDoctor]);

  useEffect(() => {
    getAllSurgeryTypes();
  }, []);

  if (!surgeryTypes) {
    return <p className="text-white flex justify-center mt-96">Loading page</p>;
  }

  return (
    <div className="min-h-screen bg-[#242731]">
      <div className=" text-[#FFFFFF]">
        <HeaderDoctor text="Une nouvelle intervention ?!" />
      </div>
      <section className="text-white ">
        <div className="h-[346px] mt-8 mx-5 pt-8 shadow-slate-950/90 shadow-md rounded-2xl ">
          <ul
            className=" h-[296px] overflow-y-auto overflow-hidden 
          "
          >
            {surgeryTypes.map((surgeryType) => (
              <li
                key={`intervention-${surgeryType.id}`}
                className=" text-[14px] mb-5"
              >
                <button
                  type="button"
                  className="flex items-center"
                  onClick={() => setInterventionInfo(surgeryType.id)}
                >
                  <img
                    className="w-[70px] h-[66px] ml-[36px]  "
                    src={imgList}
                    alt="logo"
                  />
                  <div className="ml-3 ">
                    <div className=" ">
                      <p className=" text-start ">{surgeryType.name}</p>
                    </div>
                  </div>
                </button>
                <div className=" flex justify-center">
                  {selectedIntervention === surgeryType.id && (
                    <div className="flex justify-between">
                      <ul className="flex flex-col">
                        {surgeryType.interventions.map((item) => (
                          <div className="mt-2">
                            <li
                              key={`item-${item.id}`}
                              className="flex flex-col mb-2"
                            >
                              <div className="flex justify-between w-48">
                                <div className="flex ">
                                  <p>{item.patient.firstname}</p>
                                  <p>{item.patient.lastname}</p>
                                </div>
                              </div>
                              <div className="flex justify-between ">
                                <div>
                                  <p className="">
                                    {surgeryTypes &&
                                      convertDateFormat(item.time)}
                                  </p>
                                  <p className="text-[14px]">
                                    {surgeryTypes &&
                                      convertHourFormat(item.time)}
                                  </p>
                                </div>
                                <div className="flex items-start">
                                  <button
                                    type="button"
                                    onClick={() =>
                                      deleteIntervention(item.surgeryTypeId)
                                    }
                                  >
                                    <img
                                      src={trash}
                                      alt="trash"
                                      className="w-[18px] h-[18px]"
                                    />
                                  </button>
                                </div>
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
        <div className="flex justify-center mt-5">
          <Link
            to={`/doctors/${idDoctor}/interventions/create-intervention`}
            className="bg-[#323847] rounded-full shadow-slate-950/90 shadow-xl text-white  "
          >
            <p className="flex text-sm px-6 py-2">Une nouvelle intervention</p>
          </Link>
        </div>
      </section>
    </div>
  );
}
