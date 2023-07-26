import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function ChangePasswordPatient() {
  const navigate = useNavigate();

  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleChangeNewPassword = (e) => {
    setNewPassword(e.target.value);
  };

  const handleChangeConfirmNewPassword = (e) => {
    setConfirmNewPassword(e.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!mail || !password) {
      alert(
        "Vous devez renseigner votre adresse email et votre mot de passe !"
      );
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients/login`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          mail,
          password,
        }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          if (newPassword === confirmNewPassword) {
            fetch(
              `${import.meta.env.VITE_BACKEND_URL}/api/patients/${data.id}`,
              {
                method: "PUT",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  firstname: data.firstname,
                  lastname: data.lastname,
                  mail: data.mail,
                  password: newPassword,
                  id: data.id,
                }),
              }
            )
              .then(() => {
                navigate("/patients");
              })
              .catch((err) => {
                console.error(err);
              });
          } else {
            alert(
              "Attention : confirmation du nouveau de mot de passe non valide !! "
            );
            setNewPassword("");
            setConfirmNewPassword("");
          }
        })
        .catch((err) => {
          console.error(err);
        });
    }
  };

  return (
    <div className=" flex flex-col justify-center items-center min-h-screen bg-teal-500 ">
      <div className="mb-16">
        <h1 className="font-extrabold text-white text-4xl h-16 flex justify-center md:text-6xl p-5">
          Modifiez votre mot de passe
        </h1>
      </div>
      <form onSubmit={handleSubmit} className="p-4 flex flex-col items-start">
        <label htmlFor="mail" className="font-bold text-white text-base">
          email
        </label>
        <input
          className="bg-teal-600 rounded-lg text-black w-60 h-8 p-2 md:w-96"
          type="email"
          id="mail"
          value={mail}
          onChange={handleChangeMail}
          required
        />

        <label
          htmlFor="password"
          className="font-bold text-white text-base mt-6"
        >
          Mot de passe actuel
        </label>
        <input
          className="bg-teal-600 rounded-lg text-black w-60 h-8 p-2 md:w-96"
          type="password"
          id="password"
          value={password}
          onChange={handleChangePassword}
        />

        <label
          htmlFor="new-password"
          className="font-bold text-white text-base mt-6"
        >
          Nouveau mot de passe
        </label>
        <input
          className="bg-teal-600 rounded-lg text-black w-60 h-8 p-2 md:w-96"
          type="password"
          id="new-password"
          value={newPassword}
          onChange={handleChangeNewPassword}
        />

        <label
          htmlFor="confirm-new-password"
          className="font-bold text-white text-base mt-6"
        >
          Confirmer le nouveau mot de passe
        </label>
        <input
          className="bg-teal-600 rounded-lg text-black w-60 h-8 p-2 md:w-96"
          type="password"
          id="confirm-new-password"
          value={confirmNewPassword}
          onChange={handleChangeConfirmNewPassword}
        />

        <div className="flex justify-center">
          <button
            type="submit"
            className="mx-auto bg-rose-400 text-white font-bold text-2xl mt-14 rounded-lg w-40 h-10 md:w-52 md:h-12 "
          >
            Confirmer
          </button>
        </div>
      </form>
    </div>
  );
}
