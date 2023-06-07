import { Link } from "react-router-dom";
import React from "react";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className=" md:min-h-screen md:flex ">
      <div className="md:mt-5 md:ml-10">
        <Carousel />
      </div>
      <div className="h-[254px] pt-14 flex flex-col md:w-96 md:mt-24 md:ml-20 md:mr-20">
        <div className="mb-5 md:mb-20">
          <Link to="/patient">
            <Button value="Connexion Médecin" />
          </Link>
        </div>

        <Link to="/doctor">
          <Button value="Connexion Patient" />
        </Link>
      </div>
    </div>
  );
};

export default Home;
