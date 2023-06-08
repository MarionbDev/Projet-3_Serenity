import image4 from "../assets/images/Img4.png";
import image5 from "../assets/images/Img5.png";

function VideoList() {
  return (
    <>
      <div className="mt-10 ml-14 mb-2">
        <h1>Les vidéos du Dr Noailles</h1>
      </div>
      <div className="flex">
        <img src={image4} alt="doc4" className="ml-10 mb-5 mr-3" />
        <p>Mon chirurgien me parle des croisées</p>
      </div>
      <div className="flex">
        <img src={image5} alt="doc5" className="ml-10 mr-3" />
        <p>Comment améliorer ma prise en charge</p>
      </div>
    </>
  );
}

export default VideoList;
