import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";

import { useState, useEffect } from "react";
import proImage from "../assets/images/pro.jpg";

function getCurrentDimension() {
  return {
    width: window.innerWidth,
    height: window.innerHeight,
  };
}

export default function LatLongApi() {
  const [screenSize, setScreenSize] = useState(getCurrentDimension());
  const [adresses, setAdresses] = useState([]);
  const [currentPosition, setCurrentPosition] = useState();
  const [currentSpeciality, setCurrentSpeciality] = useState("");

  const getAllProfessionnels = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/profesionnels`)
      .then((res) => res.json())
      .then((professionelsInfo) => {
        setAdresses(
          professionelsInfo.filter((pro) => {
            if (currentSpeciality === "") {
              return professionelsInfo;
            }
            return pro.speciality === currentSpeciality;
          })
        );
      });
  };

  useEffect(() => {
    const updateDimension = () => {
      setScreenSize(getCurrentDimension());
    };
    window.addEventListener("resize", updateDimension);

    return () => {
      window.removeEventListener("resize", updateDimension);
    };
  }, [screenSize]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (positionData) => {
        const { latitude, longitude } = positionData.coords;
        setCurrentPosition([latitude, longitude]);
      },
      (error) => {
        console.error(error);
      }
    );
  }, []);

  useEffect(() => {
    getAllProfessionnels();
  }, [currentSpeciality]);

  if (adresses.length === 0) {
    return <p>chargement de la page</p>;
  }

  return (
    <section>
      <div
        className="mb-4 flex flex-wrap gap-1
      "
      >
        <button
          type="button"
          onClick={() => {
            setCurrentSpeciality("Psychologue");
          }}
          className="mx-auto flex justify-center mb-1 rounded-xl mt-4 hover:bg-green-500 duration-300 bg-green-400 p-2 text-base w-40 text-white"
        >
          Psychologue
        </button>
        <button
          type="button"
          onClick={() => {
            setCurrentSpeciality("Kinésithérapeute");
          }}
          className="mx-auto flex justify-center mb-1 rounded-xl mt-4 hover:bg-green-500 duration-300 bg-green-400 p-2 text-base w-40 text-white"
        >
          Kinésithérapeute
        </button>
        <button
          type="button"
          onClick={() => {
            setCurrentSpeciality("Infirmier");
          }}
          className="mx-auto flex justify-center mb-1 rounded-xl mt-4 hover:bg-green-500 duration-300 bg-green-400 p-2 text-base w-40 text-white"
        >
          Infirmier
        </button>
        <button
          type="button"
          onClick={() => {
            setCurrentSpeciality("");
          }}
          className="mx-auto flex justify-center mb-1 rounded-xl mt-4 hover:bg-green-500 duration-300 bg-green-400 p-2 text-base w-40 text-white"
        >
          Tous
        </button>
      </div>
      <MapContainer
        center={
          !currentPosition
            ? [adresses[0].latitude, adresses[0].longitude]
            : currentPosition
        }
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {adresses.map((adress) => (
          <Marker
            key={`professionnel - ${adress.id}`}
            position={[adress.latitude, adress.longitude]}
          >
            {window.innerWidth >= 768 ? (
              <Popup>
                <figure className=" w-48 bg-gray-200 rounded-lg">
                  <img
                    className="mx-auto rounded-t-lg h-full lg:w-36 lg:h-36 lg:rounded-l-lg lg:rounded-none"
                    src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/${
                      adress.image
                    }`}
                    alt="spécialiste"
                  />
                  <figcaption className="text-center pb-2">
                    <h3 className="font-bold">{`${adress.firstname} ${adress.lastname}`}</h3>
                    <p>{`${adress.speciality} : ${adress.tel}`}</p>
                    <p>{adress.road}</p>
                    <p>{`${adress.zip_code} ${adress.city}`}</p>
                  </figcaption>
                </figure>
              </Popup>
            ) : null}
          </Marker>
        ))}
      </MapContainer>
      <div className="mt-4 w-full mx-auto lg:flex lg:flex-wrap lg:gap-2">
        {adresses.map((adress) => (
          <figure className="m-4 bg-gray-200 hover:bg-gray-300 rounded-lg duration-300 lg:flex  lg:mx-auto lg:justify-stretch lg:h-36">
            {adress.image ? (
              <img
                className=" rounded-t-lg h-full lg:w-36 lg:h-36 lg:rounded-l-lg lg:rounded-none"
                src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/${
                  adress.image
                }`}
                alt="spécialiste"
              />
            ) : (
              <img
                className=" rounded-t-lg h-full lg:w-36 lg:h-36 lg:rounded-l-lg lg:rounded-none"
                src={proImage}
                alt="spécialiste"
              />
            )}
            <figcaption className=" text-center px-2 ">
              <h3 className="font-bold pt-2">{`${adress.firstname} ${adress.lastname}`}</h3>
              <p>{`${adress.speciality} : ${adress.tel}`}</p>
              <p>{adress.road}</p>
              <p>{`${adress.zip_code} ${adress.city}`}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
