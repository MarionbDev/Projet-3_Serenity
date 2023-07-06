import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateDoctor() {
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
      alert("You must provide an email and a password !");
    } else {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/doctors/login`, {
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
              `${import.meta.env.VITE_BACKEND_URL}/api/doctors/${data.id}`,
              {
                method: "PUT",
                credentials: "include",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  firstname: data.firstname,
                  lastname: data.lastname,
                  tel: data.tel,
                  mail: data.mail,
                  password: newPassword,
                  role: data.role,
                  id: data.id,
                }),
              }
            )
              .then(() => {
                console.warn("ok");
                navigate("/doctors");
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
    <div className="min-h-screen bg-[#242731]">
      <section className="relative">
        <div className="absolute left-24 right-4 top-7 bottom-37 bg-dark-02 rounded-24" />
        <form onSubmit={handleSubmit} className="p-4">
          <div className="flex flex-col items-center">
            <label htmlFor="mail" className="text-2xl mb-2 text-white">
              email
            </label>
            <input
              className="px-4 py-1 text-black rounded-full"
              type="email"
              id="mail"
              value={mail}
              onChange={handleChangeMail}
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="password" className="text-2xl mb-2 text-white">
              Mot de passe actuel
            </label>
            <input
              className="px-4 py-1 text-black rounded-full"
              type="password"
              id="password"
              value={password}
              onChange={handleChangePassword}
            />
          </div>
          <div className="flex flex-col items-center">
            <label htmlFor="new-password" className="text-2xl mb-2 text-white">
              Nouveau mot de passe
            </label>
            <input
              className="px-4 py-1 text-black rounded-full"
              type="password"
              id="new-password"
              value={newPassword}
              onChange={handleChangeNewPassword}
            />
          </div>
          <div className="flex flex-col items-center">
            <label
              htmlFor="confirm-new-password"
              className="text-2xl mb-2 text-white"
            >
              Confirmer le nouveau mot de passe
            </label>
            <input
              className="px-4 py-1 text-black rounded-full"
              type="password"
              id="confirm-new-password"
              value={confirmNewPassword}
              onChange={handleChangeConfirmNewPassword}
            />
          </div>

          {/* Ajoutez d'autres labels ici */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-black text-white px-6 py-2 rounded-full mt-6"
            >
              Confirmer
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
