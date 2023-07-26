import { useState, useEffect } from "react";
import { useUserContext } from "../../contexts/UserContext";

function ImageList() {
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
    <div className=" mb-2 mx-auto w-10/12">
      <ul className="flex flex-wrap gap-5 justify-center">
        {images.map((image) => (
          <a href={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/${image.source}`}>
            <li
              key={image.source}
              className="w-32 h-32 gap-3 mb-4 justify-between items-center bg-amber-300 rounded-lg hover:bg-amber-200 hover:scale-105 duration-300"
            >
              <p className="text-white px-1 text-center">{image.description}</p>
            </li>
          </a>
        ))}
      </ul>
    </div>
  );
}

export default ImageList;
