import { useState } from "react";

export default function CheckList() {
  const [isChecked, setIsChecked] = useState([false, false, false, false]);

  const handleCheckboxChange = (index) => {
    const updatedCheckedState = [...isChecked];
    updatedCheckedState[index] = !updatedCheckedState[index];
    setIsChecked(updatedCheckedState);
  };

  return (
    <div className="mt-[40px] w-[70vw] border-4 rounded-2xl border-indigo-500 bg-gray-100">
      <p className="mt-8 ml-8 text-xl">Ma checklist avant le départ</p>
      {/* <div className="mt-8 ml-8  w-60 h-16 "> */}
      <div className="flex flex-col ml-10 mt-8">
        <div className="mb-10">
          <label
            style={{
              backgroundColor: isChecked[0] ? "rgba(72, 187, 120, 0.5)" : "",
            }}
            className="w-36 h-12 p-5 rounded-xl container shadow-md hover:bg-indigo-100 duration-300"
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
            className="w-36 h-12 p-5 rounded-xl container shadow-md hover:bg-indigo-100 duration-300"
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
            className="w-36 h-12 p-5 rounded-xl container shadow-md hover:bg-indigo-100 duration-300"
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
              Test COVID
            </span>
          </label>
        </div>

        <div className="mb-10">
          <label
            style={{
              backgroundColor: isChecked[3] ? "rgba(72, 187, 120, 0.5)" : "",
            }}
            className="w-36 h-12 p-5 rounded-xl container shadow-md hover:bg-indigo-100 duration-300"
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
              Carte vitale
            </span>
          </label>
        </div>

        <div className="mb-10">
          <label
            style={{
              backgroundColor: isChecked[5] ? "rgba(72, 187, 120, 0.5)" : "",
            }}
            className="w-36 h-12 p-5 rounded-xl container shadow-md hover:bg-indigo-100 duration-300"
          >
            <input
              type="checkbox"
              className="mr-2"
              checked={isChecked[5]}
              onChange={() => handleCheckboxChange(5)}
            />
            <span
              style={{
                textDecoration: isChecked[5] ? "line-through" : "none",
              }}
            >
              Carte mutuelle
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}
