import image1 from "/src/assets/images/Img.png";
import image2 from "/src/assets/images/Img2.png";
import image3 from "/src/assets/images/Img3.png";

function ImageList() {
  return (
    <>
      <div className="flex justify-center mb-2">
        <img src={image1} alt="doc1" />
      </div>
      <div className="flex justify-center">
        <img src={image2} alt="doc2" className="mx-1" />
        <img src={image3} alt="doc3" className="mx-1" />
      </div>
    </>
  );
}

export default ImageList;
