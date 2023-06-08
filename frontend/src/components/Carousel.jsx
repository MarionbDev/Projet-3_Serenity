import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const datas = [
  {
    id: 1,
    image: "./src/assets/images/Doctor.png",

    title: "Doctor",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vehicula nisi. Vivamus aliquet suscipit leo, non aliquam lacus efficitur eget. `,
  },
  {
    id: 2,
    image: "./src/assets/images/Nurse.jpg",

    title: "Nurse",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vehicula nisi. Vivamus aliquet suscipit leo, non aliquam lacus efficitur eget.`,
  },
  {
    id: 3,
    image: "./src/assets/images/Laboratory.jpg",

    title: "Labo",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vehicula nisi. Vivamus aliquet suscipit leo, non aliquam lacus efficitur eget.`,
  },
  {
    id: 4,
    image: "./src/assets/images/Surgery.jpg",

    title: "Surgery",
    description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget vehicula nisi. Vivamus aliquet suscipit leo, non aliquam lacus efficitur eget.`,
  },
];

export default function Carrousel() {
  return (
    <div className=" max-h-[500px] sm:max-h-screen max-w-screen overflow-hidden sm:w-1/2">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        showArrows={false}
      >
        {datas.map((data) => (
          <div key={data.id}>
            <img src={data.image} alt={data.title} />
          </div>
        ))}
      </Carousel>
    </div>
  );
}
