import React from "react";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

export default function PrivateLink({ to, text, authorizedRoles }) {
  const { role } = useUserContext();

  if (authorizedRoles.find((item) => item === role)) {
    return (
      <li className="mx-4 p-1 list-none">
        <NavLink
          className="bg-black inline-block rounded-full shadow-xl px-6 py-2 text-white hover:text-white hover:border-2 hover:border-white"
          to={to}
        >
          {text}
        </NavLink>
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
