import { createContext, useContext, useState, useMemo, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const UserContext = createContext();

export default UserContext;

const UserContextProvider = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
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

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/refresh-token`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.warn(data.id);
        navigate(location.pathname);
        if (!data.role) {
          setIdPatient(data.id);
        } else {
          setIdDoctor(data.id);
          setRole(data.role);
        }
      })
      .catch((err) => {
        console.error(err);
        alert("Error to login please try again !");
      });
  }, []);

  return (
    <UserContext.Provider value={userMemo}>{children}</UserContext.Provider>
  );
};

const useUserContext = () => useContext(UserContext);

UserContextProvider.propTypes = { children: PropTypes.elementType.isRequired };

export { UserContextProvider, useUserContext };
