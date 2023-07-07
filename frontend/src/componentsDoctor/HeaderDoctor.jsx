import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserContext } from "../contexts/UserContext";
import serenity from "../assets/logo/logoPatient/logoSerenity.png";
import logoAvatar from "../assets/logo/logoPatient/avatar1.png";

export default function HeaderDoctor({ text }) {
  const id = parseInt(useParams().id, 10);
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const { idDoctor } = useUserContext();

  const getOneDoctor = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/doctors/${idDoctor}`, {
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => setDoctor(data))
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getOneDoctor();
  }, [idDoctor]);

  useEffect(() => {
    if (id !== idDoctor) {
      navigate("/doctors");
    }
  }, [id]);

  if (!doctor) {
    return <p>Loading the doctor...</p>;
  }

  return (
    <div className="  flex flex-col md:flex-row ">
      <div className="flex justify-between">
        <div className="flex mt-4 ml-4 md:absolute md:ml-[-290px] md:mt-8 lg:mt-[0px]">
          <img
            src={serenity}
            alt="logo"
            className=" w-[45px] h-[45px] md:w-[55px] md:h-[55px] "
          />
          <p className="text-white text-[21px] md:mb-10 md:text-[24px] md:ml-2 ">
            SERENITY
          </p>
        </div>

        <div className="flex justify-end mr-3 mt-4 md:hidden md:mt-48 md:ml-4">
          <p className="text-[16px] mt-1 mr-3 md:m-3 text-gray-500 font-semibold">
            Dr {doctor.lastname}
          </p>
          <img
            className="shadow-slate-950/60 w-8 h-8 shadow-lg rounded-full md:ml-4 md:w-18"
            src={logoAvatar}
            alt="avatar"
          />
        </div>
      </div>

      <div className="flex items-center flex-col justify-center pt-16 md:pt-8 text-[#FFFFFF] md:items-start lg:pt-0 lg:mt-[-0px] ">
        <p className="mb-1 text-[18px] font-semibold md:text-[24px]">
          Bonjour Dr {doctor.lastname} ,
        </p>
        <p className="italic md:text-[28px]  xl:text-[35px]">{text}</p>
      </div>
    </div>
  );
}

HeaderDoctor.propTypes = {
  text: PropTypes.string.isRequired,
};
