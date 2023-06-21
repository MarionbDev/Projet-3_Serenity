import { createContext, useContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();

export default UserContext;

const UserContextProvider = ({ children }) => {
  const [idPatient, setIdPatient] = useState("");
  const [idDoctor, setIdDoctor] = useState("");
  const [role, setRole] = useState("");

  const userMemo = useMemo(() => ({
    idPatient,
    setIdPatient,
    idDoctor,
    setIdDoctor,
    role,
    setRole,
  }));

  return (
    <UserContext.Provider value={userMemo}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

UserContextProvider.propTypes = { children: PropTypes.elementType.isRequired };

export { UserContextProvider, useUserContext };
