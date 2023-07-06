import Sportive from "../../assets/images/Sportive.png";

function ImageListThree() {
  return (
    <div className="flex">
      <div className="p-2 ml-3">
        <img
          src={Sportive}
          alt="doc"
          className="flex justify-center m-auto mx-1 w-30 h-auto"
        />
      </div>
    </div>
  );
}

export default ImageListThree;
