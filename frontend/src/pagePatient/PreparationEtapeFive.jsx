import { useState } from "react";
import { Link } from "react-router-dom";
import Arrow from "../assets/images/Arrow.png";
import { useUserContext } from "../contexts/UserContext";

import HeaderMobilePrepaPatient from "../componentsPatient/mobile/HeaderMobilePrepaPatient";
import HeaderPreparation from "../componentsPatient/mobile/HeaderPreparation";

function PreparationEtapeFive() {
  const { idPatient } = useUserContext();
  const [isChecked, setIsChecked] = useState([false, false, false, false]);

  const handleCheckboxChange = (index) => {
    const updatedCheckedState = [...isChecked];
    updatedCheckedState[index] = !updatedCheckedState[index];
    setIsChecked(updatedCheckedState);
  };

  return (
    <>
      <div className="mb-20">
        <HeaderMobilePrepaPatient />
        <Link to={`/patients/${idPatient}`}>
          <img src={Arrow} alt="doc14" className="mb-2 ml-3" />
        </Link>
        <HeaderPreparation
          text="Ma check list avant le départ à la Clinique"
          color="bg-indigo-500"
        />
      </div>
      <div className="flex flex-col ml-10">
        <div className="mb-10">
          <label
            style={{
              backgroundColor: isChecked[0] ? "rgba(72, 187, 120, 0.5)" : "",
            }}
            className="w-36 h-12 p-5 rounded-xl container shadow-md"
          >
            <input
              type="checkbox"
              className="mr-2"
              checked={isChecked[0]}
              onChange={() => handleCheckboxChange(0)}
            />
            <span
              style={{
                textDecoration: isChecked[0] ? "line-through" : "none",
              }}
            >
              Pièce d'identité
            </span>
          </label>
        </div>
        <div className="mb-10">
          <label
            style={{
              backgroundColor: isChecked[1] ? "rgba(72, 187, 120, 0.5)" : "",
            }}
            className="w-36 h-12 p-5 rounded-xl container shadow-md"
          >
            <input
              type="checkbox"
              className="mr-2"
              checked={isChecked[1]}
              onChange={() => handleCheckboxChange(1)}
            />
            <span
              style={{
                textDecoration: isChecked[1] ? "line-through" : "none",
              }}
            >
              Consultation anesthésique
            </span>
          </label>
        </div>
        <div className="mb-10">
          <label
            style={{
              backgroundColor: isChecked[2] ? "rgba(72, 187, 120, 0.5)" : "",
            }}
            className="w-36 h-12 p-5 rounded-xl container shadow-md"
          >
            <input
              type="checkbox"
              className="mr-2"
              checked={isChecked[2]}
              onChange={() => handleCheckboxChange(2)}
            />
            <span
              style={{
                textDecoration: isChecked[2] ? "line-through" : "none",
              }}
            >
              Test Covid
            </span>
          </label>
        </div>
        <div>
          <label
            style={{
              backgroundColor: isChecked[3] ? "rgba(72, 187, 120, 0.5)" : "",
            }}
            className="w-36 h-12 p-5 rounded-xl container shadow-md"
          >
            <input
              type="checkbox"
              className="mr-2"
              checked={isChecked[3]}
              onChange={() => handleCheckboxChange(3)}
            />
            <span
              style={{
                textDecoration: isChecked[3] ? "line-through" : "none",
              }}
            >
              Carte bleue
            </span>
          </label>
        </div>
      </div>
    </>
  );
}

export default PreparationEtapeFive;
