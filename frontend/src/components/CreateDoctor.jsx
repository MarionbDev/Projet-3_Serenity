import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateDoctor() {
  const navigate = useNavigate();
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [tel, setTel] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  // const [image, setImage] = useState("");
  // const [language, setLanguage] = useState("");
  // const [bio, setBio] = useState("");
  // const [certificate, setCertificate] = useState("");
  const [role, setRole] = useState("");
  // const [otherFormation, setOtherFormation] = useState("");
  // const [experience, setExperience] = useState("");
  // const [partnership, setPartnership] = useState("");
  // const [worksAndPublication, setWorksAndPublication] = useState("");
  // const [awardAndRecognition, setAwardAndRecognition] = useState("");

  const handleChangeFirstname = (e) => {
    setFirstname(e.target.value);
  };

  const handleChangeLastname = (e) => {
    setLastname(e.target.value);
  };

  const handleChangeTel = (e) => {
    setTel(e.target.value);
  };

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  // const handleChangeImage = (e) => {
  //   setImage(e.target.value);
  // };

  // const handleChangeLanguage = (e) => {
  //   setLanguage(e.target.value);
  // };

  // const handleChangeBio = (e) => {
  //   setBio(e.target.value);
  // };

  // const handleChangeCertificate = (e) => {
  //   setCertificate(e.target.value);
  // };

  const handleChangeRole = (e) => {
    setRole(e.target.value);
  };

  // const handleChangeOtherFormation = (e) => {
  //   setOtherFormation(e.target.value);
  // };

  // const handleChangeExperience = (e) => {
  //   setExperience(e.target.value);
  // };

  // const handleChangePartnership = (e) => {
  //   setPartnership(e.target.value);
  // };

  // const handleChangeWorksAndPublication = (e) => {
  //   setWorksAndPublication(e.target.value);
  // };

  // const handleChangeAwardAndRecognition = (e) => {
  //   setAwardAndRecognition(e.target.value);
  // };

  const handleSubmit = () => {
    //  e.preventDefault();

    const data = {
      firstname,
      lastname,
      tel,
      mail,
      password,
      // image,
      // language,
      // bio,
      // certificate,
      role,
      // otherFormation,
      // experience,
      // partnership,
      // worksAndPublication,
      // awardAndRecognition,
    };

    fetch("http://localhost:8000/api/doctors", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((responseData) => {
        navigate(`/doctors/${responseData.id}`);
      });
  };

  return (
    <section className="flex flex-1 flex-col justify-evenly items-center text-white">
      <h2 className="my-8 mx-auto text-4xl">Create a new doctor</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-violet-900 p-6 rounded-2xl shadow-xl text-white max-w-6xl m-auto flex flex-col justify-evenly items-center"
      >
        <label
          htmlFor="firstname"
          className="flex text-2xl m-4 w-full items-center"
        >
          Firstname:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="text"
            id="firstname"
            required
            value={firstname}
            onChange={handleChangeFirstname}
          />
        </label>
        <label
          htmlFor="lastname"
          className="flex text-2xl m-4 w-full items-center"
        >
          Lastname:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="text"
            id="lastname"
            required
            value={lastname}
            onChange={handleChangeLastname}
          />
        </label>
        <label htmlFor="tel" className="flex text-2xl m-4 w-full items-center">
          Tel:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="text"
            id="tel"
            value={tel}
            onChange={handleChangeTel}
          />
        </label>
        <label htmlFor="mail" className="flex text-2xl m-4 w-full items-center">
          Mail:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="email"
            id="mail"
            value={mail}
            onChange={handleChangeMail}
          />
        </label>
        <label
          htmlFor="password"
          className="flex text-2xl m-4 w-full items-center"
        >
          Password:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="password"
            id="password"
            value={password}
            onChange={handleChangePassword}
          />
        </label>
        {/* <label
           htmlFor="image"
           className="flex text-2xl m-4 w-full items-center"
        >
           Image:
           <input
             className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
             type="text"
             id="image"
             value={image}
             onChange={handleChangeImage}
           /> 
         </label>
        <label
          htmlFor="language"
          className="flex text-2xl m-4 w-full items-center"
        >
          Language:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="text"
            id="language"
            value={language}
            onChange={handleChangeLanguage}
          />
        </label> 
         <label htmlFor="bio" className="flex text-2xl m-4 w-full items-center">
          Bio:
          <textarea
            className="ml-4 px-4 py-1 text-black flex-1 rounded"
            id="bio"
            value={bio}
            onChange={handleChangeBio}
          />
        </label> 
         <label
          htmlFor="certificate"
          className="flex text-2xl m-4 w-full items-center"
        >
          Certificate:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="text"
            id="certificate"
            value={certificate}
            onChange={handleChangeCertificate}
          />
        </label>  */}
        <label htmlFor="role" className="flex text-2xl m-4 w-full items-center">
          Role:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="text"
            id="role"
            value={role}
            onChange={handleChangeRole}
          />
        </label>
        {/* <label
          htmlFor="otherFormation"
          className="flex text-2xl m-4 w-full items-center"
        >
          Other Formation:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="text"
            id="otherFormation"
            value={otherFormation}
            onChange={handleChangeOtherFormation}
          />
        </label>
        <label
          htmlFor="experience"
          className="flex text-2xl m-4 w-full items-center"
        >
          Experience:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="text"
            id="experience"
            value={experience}
            onChange={handleChangeExperience}
          />
        </label>
        <label
          htmlFor="partnership"
          className="flex text-2xl m-4 w-full items-center"
        >
          Partnership:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="text"
            id="partnership"
            value={partnership}
            onChange={handleChangePartnership}
          />
        </label>
        <label
          htmlFor="worksAndPublication"
          className="flex text-2xl m-4 w-full items-center"
        >
          Works and Publication:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="text"
            id="worksAndPublication"
            value={worksAndPublication}
            onChange={handleChangeWorksAndPublication}
          />
        </label>
        <label
          htmlFor="awardAndRecognition"
          className="flex text-2xl m-4 w-full items-center"
        >
          Award and Recognition:
          <input
            className="ml-4 px-4 py-1 text-black flex-1 rounded-full"
            type="text"
            id="awardAndRecognition"
            value={awardAndRecognition}
            onChange={handleChangeAwardAndRecognition}
          />
        </label> */}
        <button
          type="submit"
          className="bg-blue-500 text-white px-6 py-2 rounded-full mt-6"
        >
          Submit
        </button>
      </form>
    </section>
  );
}
