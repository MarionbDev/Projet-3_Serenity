// import PropTypes from "prop-types";
// import { useUserContext } from "../contexts/UserContext";
import { Link } from "react-router-dom";

export default function SideBarDoctor() {
  // const { idDoctor } = useUserContext();

  return (
    <div className="min-h-screen w-64 border-r-[1px] border-[#a5a5a5]/20  fixed ">
      <div className="pt-6 pl-8 ">
        <img src="/src/assets/logo/logo1.png" alt="logo" />
      </div>

      <div className="mt-20 ml-4">
        <p className="text-gray-500 text-[12px] pb-4 ml-7">
          Console d'administration
        </p>
        <button
          className="bg-indigo-500 flex items-center rounded-lg w-[90%] h-14"
          type="button"
        >
          <img
            className="ml-6 mr-2"
            src="/src/assets/logo/icon1.png"
            alt="icon"
          />
          <p className="m-2 text-white font-semibold">Mon activité</p>
        </button>
        <button
          type="button"
          className="flex items-center rounded-lg w-[90%] h-14"
        >
          <img
            className="ml-7 mr-2"
            src="/src/assets/logo/Chart.png"
            alt="icon"
          />
          <p className="m-3 text-gray-500 font-semibold">Praticiens</p>
        </button>
        <button
          className="flex items-center rounded-lg w-[90%] h-14"
          type="button"
        >
          <img
            className="ml-7 mr-2"
            src="/src/assets/logo/Discovery.png"
            alt="icon"
          />
          <p className="m-3 text-gray-500 font-semibold">Patients</p>
        </button>
        <Link to="doctor/id/intervention">
          <button
            className="flex items-center rounded-lg w-[90%] h-14"
            type="button"
          >
            <img
              className="ml-7 mr-2 w-[24px] h-[24px]"
              src="/src/assets/logo/Wallet.png"
              alt="icon"
            />
            <p className="m-3 text-gray-500 font-semibold">Intervention</p>
          </button>
        </Link>
      </div>
      <div className="mt-20 ml-4">
        {/* <p className="m-3 text-gray-500 font-semibold text-sm">Agenda</p>
        <button
          className="flex items-center rounded-lg w-[90%] h-14"
          type="button"
        >
          <img
            className="ml-7 mr-2"
            src="/src/assets/logo/Notification.png"
            alt="icon"
          />
          <p className="m-3 text-gray-500 font-semibold">Agenda</p>
        </button>
        <button
          className="flex items-center rounded-lg w-[90%] h-14"
          type="button"
        >
          <img
            className="ml-7 mr-2"
            src="/src/assets/logo/Chart.png"
            alt="icon"
          />
          <p className="m-3 text-gray-500 font-semibold">Messagerie</p>
        </button> */}
      </div>
      <div className="mt-56 ml-4 flex">
        <img
          className="ml-4 w-14"
          src="/src/assets/logo/avatar1.png"
          alt="avatar"
        />
        <p className="m-3 text-gray-500 font-semibold">Dr Bé Bert</p>
      </div>
    </div>
  );
}
// SideBarDoctor.propTypes = { utilisateur: PropTypes.string.isRequired };
