import ReactPlayer from "react-player";

export default function MonArrivee() {
  return (
    <div className="flex mt-[40px] border-4 rounded-2xl border-pink-400 bg-gray-100 w-[70vw]">
      <div className="flex flex-row justify-center mt-4 gap-10">
        <div className="flex justify-center">
          <p>Relaxation profonde</p>
        </div>
        <div className="flex flex-col mb-8 mt-8 gap-4">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=HDqAgiHNLWo"
            width="20rem"
            height="10rem"
          />

          <ReactPlayer
            url="https://www.youtube.com/watch?v=DczdzpTrMFQ"
            width="20rem"
            height="10rem"
          />
        </div>

        <div className="flex flex-col mt-8 mb-8 gap-4">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=l4fQ0GA1oOI"
            width="20rem"
            height="10rem"
          />

          <ReactPlayer
            url="https://www.youtube.com/watch?v=EL6gQWo_aSM"
            width="20rem"
            height="10rem"
          />
        </div>
      </div>
    </div>
  );
}
