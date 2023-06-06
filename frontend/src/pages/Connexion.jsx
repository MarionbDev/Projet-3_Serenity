// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// function Connexion() {
//   const [formValues, setFormValues] = useState({
//     email: "",
//     mdp: "",
//   });
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormValues((prevValues) => ({
//       ...prevValues,
//       [name]: value,
//     }));
//   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Ici vous pouvez effectuer une action telle qu'envoyer les données à un serveur

//     // Réinitialiser les valeurs du formulaire
//     setFormValues({
//       email: "",
//       mdp: "",
//     });

//     // Afficher le message de confirmation
//     setIsSubmitted(true);
//   };

//   return (
//     <div className="min-h-screen bg-teal-500 ">
//       <h1 className="font-extrabold text-white text-5xl w-96 h-28 flex justify-center">
//         Connectez vous
//       </h1>
//       <h2 className="font-extrabold text-white text-xl w-96 h-28 flex justify-center">
//         à votre espace personnel
//       </h2>
//       <form
//         className="flex flex-col items-center"
//         name="connexion"
//         onSubmit={handleSubmit}
//       >
//         <label className="font-bold text-white text-base" htmlFor="email">
//           Adress Email
//         </label>
//         <input
//           className="bg-teal-600 rounded-lg text-black w-60"
//           type="text"
//           name="email"
//           required
//           value={formValues.email}
//           onChange={handleChange}
//         />
//         <label className="font-bold text-white text-base" htmlFor="mdp">
//           Mot de passe
//         </label>
//         <input
//           className="bg-teal-600 rounded-lg text-black w-60"
//           type="text"
//           name="mdp"
//           required
//           value={formValues.mdp}
//           onChange={handleChange}
//         />
//         <Link className="text-base text-black" to="/mdp">
//           Mot de passe oublié?
//         </Link>
//         <button
//           className="bg-rose-400 text-white font-bold text-2xl mt-10"
//           type="submit"
//           onClick={() => setIsSubmitted(false)}
//         >
//           S'identifier
//         </button>
//       </form>
//     </div>
//   );
// }
// export default Connexion;
