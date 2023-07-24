import { useState } from "react";
import LatLongApi from "../../pages/LatLongApi";

export default function Anticiper() {
  const [mapIsVisible, setMapIsVisible] = useState(false);

  return (
    <div className=" mt-[40px] w-[70vw] border-4 rounded-2xl  border-green-400 bg-gray-100">
      <div>
        <p className="mt-8 text-center ml-10 mb-2 mr-5">
          Afin de securiser votre retour à la maison votre chirurgien vous
          invite à prendre rendez-vous avec les professionnels de santé suivant:
        </p>
      </div>
      <div className=" flex flex-col m-8 ">
        {mapIsVisible ? (
          <LatLongApi />
        ) : (
          <button
            type="button"
            className="flex justify-center mb-1 rounded-xl mt-4 hover:bg-green-500 duration-300 bg-green-400 w-6/12 mx-auto"
            onClick={() => {
              setMapIsVisible(true);
            }}
          >
            <p className="p-4 text-base w-52 text-white">
              Afficher les Spécialistes autour de chez moi
            </p>
          </button>
        )}
      </div>
    </div>
  );
}
