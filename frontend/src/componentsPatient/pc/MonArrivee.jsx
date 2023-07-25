/* eslint-disable jsx-a11y/media-has-caption */
import nature from "../../assets/videos/nature.mp4";
import relax2 from "../../assets/videos/relax2.mp4";

export default function MonArrivee() {
  return (
    <div className="p-8 flex mt-[40px] w-[70vw] border-4 rounded-2xl border-pink-400 bg-gray-100">
      <div>
        <p className="mb-8">Relaxation :</p>
        <div className="flex justify-center px-5 gap-10">
          <video controls width="450" className="flex">
            <source src={nature} />
          </video>

          <video controls width="450">
            <source src={relax2} />
          </video>
        </div>
      </div>
    </div>
  );
}
