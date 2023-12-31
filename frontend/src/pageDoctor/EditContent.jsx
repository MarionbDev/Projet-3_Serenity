import PropTypes from "prop-types";
import HeaderDoctor from "../componentsDoctor/HeaderDoctor";
import SideBarDoctor from "../componentsDoctor/SideBarDoctor";
import AddYellowDoc from "../componentsDoctor/addYellowDoc";

const Button = ({ title, color, component, onSelectComponent }) => {
  const handleClick = () => {
    onSelectComponent(component);
  };

  return (
    <button
      type="button" // Add the type attribute for button
      className={`w-full h-20 ${color} mb-4 rounded-lg flex justify-start items-center pl-4 text-white`}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  component: PropTypes.node.isRequired,
  onSelectComponent: PropTypes.func.isRequired,
};

// const ProtocolComponent = ({ onSelectComponent }) => {
//   return (
//     <div className="border-2 border-black p-4 shadow-lg rounded-lg bg-white w-1/3">
//       <h2 className="text-2xl mb-4">Protocol Serenity</h2>
//       <div className="flex flex-col">
//         <Button
//           title="Comprendre mon opération"
//           color="bg-yellow-400"
//           component={<AddYellowDoc />}
//           onSelectComponent={onSelectComponent}
//         />
//       </div>
//     </div>
//   );
// };

// ProtocolComponent.propTypes = {
//   onSelectComponent: PropTypes.func.isRequired,
// };

export default function EditContents() {
  // const [selectedComponent] = useState(null);

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className=" w-2/3 pt-10 ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor text="Ajoutez une intervention !" />
      </div>
      <div className="">
        <AddYellowDoc />
        {/* {selectedComponent && (
          <div className="w-1/3 rounded-lg p-4 ml-4">{selectedComponent}</div>
        )} */}
      </div>
    </div>
  );
}
