import { Link } from "react-router-dom";
import React from "react";
import Button from "../components/Button";
import Carousel from "../components/Carousel";

const Home = () => {
  return (
    <div className="flex flex-col sm:flex-row sm: justify-evenly">
      <Carousel />
      <div className=" basis-5/12 sm:basis-1/2 flex flex-col gap-6">
        <div>
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
