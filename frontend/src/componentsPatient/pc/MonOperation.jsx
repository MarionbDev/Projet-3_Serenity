import { useState, useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";

export default function MonOperation() {
  const [images, setImages] = useState([]);
  const { idPatient } = useUserContext();

  const getInterventionInfo = () => {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/patients/${idPatient}/home`,
      { credentials: "include" }
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL
          }/api/patients/${idPatient}/contents`,
          {
            method: "POST",
            credentials: "include",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              id: data.id,
            }),
          }
        )
          .then((res) => {
            return res.json();
          })
          .then((datas) => {
            setImages(datas);
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getInterventionInfo();
  }, [idPatient]);

  return (
    <div className=" mt-[40px] w-[70vw] border-4 rounded-2xl border-yellow-500 bg-gray-100">
      <div className=" my-5">
        <ul
          className="flex flex-wrap gap-5 mx-5 items-center
        "
        >
          {images.map((image) => (
            <a
              href={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/${image.source}`}
            >
              <li
                key={image.source}
                className="mb-4 bg-amber-300 h-32 w-32 rounded-lg hover:bg-amber-200 hover:scale-105 duration-300"
              >
                <p className="text-white text-center px-1">
                  {image.description}
                </p>
              </li>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
}
