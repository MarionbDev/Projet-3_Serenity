// import { NavLink } from "react-router-dom";
// import { useUserContext } from "../contexts/UserContext";

// export default function PrivateLink({ to, text }) {
//   const { user } = useUserContext();

//   if (user && user.role === "Admin") {
//     return (
//       <li className="mx-4 p-1">
//         <NavLink
//           className="bg-violet-900 inline-block rounded-full shadow-xl px-6 py-2 border-2 border-violet-900 hover:text-white hover:border-2 hover:border-white"
//           to={to}
//         >
//           {text}
//         </NavLink>
//       </li>
//     );
//   }

//   return null;
// }
