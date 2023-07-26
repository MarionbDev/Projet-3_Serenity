import { useState, useEffect } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useUserContext } from "../contexts/UserContext";
import serenity from "../assets/logo/logoPatient/logoSerenity.png";

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
    return (
      <p className="text-white flex justify-center mt-96">
        Loading the doctor...
      </p>
    );
  }

  return (
    <div className="md:flex-row ">
      <div className="flex justify-between">
        <Link
          to={`/doctors/${id}/`}
          className="md:flex ml-4 md:fixed md:ml-[-290px]
          "
        >
          <img
            src={serenity}
            alt="logo"
            className=" w-[45px] h-[45px] md:w-[55px] md:h-[55px] "
          />
          <p className="text-white text-[21px] md:mb-10 md:text-[24px] md:ml-2 ">
            SERENITY
          </p>
        </Link>
      </div>

      <div className="flex items-center flex-col justify-center  text-[#FFFFFF] md:items-start ">
        <p className="mb-1 text-[18px] font-semibold md:text-[24px]">
          Bonjour Dr {doctor.lastname} ,
        </p>
        <p className="italic md:text-[35px]">{text}</p>
      </div>
    </div>
  );
}

HeaderDoctor.propTypes = {
  text: PropTypes.string.isRequired,
};
