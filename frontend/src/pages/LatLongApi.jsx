import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../App.css";

import { useState, useEffect } from "react";

export default function LatLongApi() {
  const [adresses, setAdresses] = useState([]);
  const [currentPosition, setCurrentPosition] = useState();

  const getAllProfessionnels = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/profesionnels`)
      .then((res) => res.json())
      .then((professionelsInfo) => {
        setAdresses(professionelsInfo);
      });
  };

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
  }, []);

  if (adresses.length === 0) {
    return <p>chargement de la page</p>;
  }

  return (
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
          <Popup>
            <figure className=" w-48">
              <img
                className="rounded-md"
                src={adress.image}
                alt="spécialiste"
              />
              <figcaption>
                <h3 className="text-center font-bold pt-2">{`${adress.firstname} ${adress.lastname}`}</h3>
                <p className="text-center">{`${adress.speciality} : ${adress.tel}`}</p>
              </figcaption>
            </figure>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
