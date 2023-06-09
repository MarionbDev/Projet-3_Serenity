import { Link } from "react-router-dom";
import React from "react";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:  min-h-screen bg-teal-500">
      <Carousel />
      <div className=" basis-5/12 sm:basis-1/2 flex flex-col mt-6 gap-6 sm:mt-48">
        <div className="">
          <Link to="/patient">
            <Button value="Connexion Patient" />
          </Link>
        </div>
        <div>
          <Link to="/doctor">
            <Button value="Connexion Médecin" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
