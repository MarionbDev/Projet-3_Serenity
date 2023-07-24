// import React, { useState } from "react";
// import CreateContentForm from "./addContents";

// const addGreenDoc = () => {
//   const [isContentVisible, setContentVisible] = useState(false);

//   const handleDivClick = () => {
//     setContentVisible(!isContentVisible);
//   };

//   return (
//     <div
//       style={{
//         width: "675px",
//         height: "400px",
//         backgroundColor: "#242731",
//         borderRadius: "10px",
//         display: "flex",
//         justifyContent: "flex-start",
//       }}
//     >
//       <div
//         style={{
//           display: "flex",
//           flexDirection: "column",
//           alignItems: "flex-start",
//           paddingLeft: "20px",
//           height: "100%",
//           width: "100%",
//         }}
//       >
//         <div
//           style={{
//             width: "100%",
//             height: "80px",
//             backgroundColor: "#BAEA64",
//             borderRadius: "10px",
//             marginBottom: "20px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//           }}
//         >
//           <h1 style={{ color: "white" }}>Anticiper ma sortie</h1>
//         </div>
//         <div
//           style={{
//             width: "100px",
//             height: "26.67%",
//             backgroundColor: "white",
//             borderRadius: "10px",
//             marginTop: "20px",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             flexDirection: "column",
//             cursor: "pointer",
//           }}
//           onClick={handleDivClick}
//         >
//           <h3>Ajouter</h3>
//         </div>
//         {isContentVisible && (
//           <CreateContentForm style={{ marginTop: "20px" }} />
//         )}{" "}
//       </div>
//     </div>
//   );
// };

// export default addGreenDoc;
