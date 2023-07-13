import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export default function PrivateLink({ to, text, authorizedRoles }) {
  const { role } = useUserContext();

  if (authorizedRoles.find((item) => item === role)) {
    return (
      <li className="mx-4 p-1 list-none">
        <div className="flex justify-center ">
          <NavLink
            className="bg-[#323847] py-2 px-4 rounded-full shadow-slate-950/90 shadow-xl mb-5 text-white
            hover:text-white sm:hover:bg-white/30"
            to={to}
          >
            {text}
          </NavLink>
        </div>
      </li>
    );
  }

  return null;
}

PrivateLink.propTypes = {
  to: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  authorizedRoles: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
