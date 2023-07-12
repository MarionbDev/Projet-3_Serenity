import HeaderDoctor from "../componentsDoctor/HeaderDoctor";
import SideBarDoctor from "../componentsDoctor/SideBarDoctor";
import ProtocolComponent from "../components/addContentSelectionBoard";
import AddYellowDoc from "../componentsDoctor/addYellowDoc";

export default function EditContents() {
  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor text="Ajoutez une intervention !" />
      </div>
      <div className="absolute w-[1055px] ml-[321px] mt-[162px] rounded-2xl shadow-lg shadow-slate-950/70 h-[600px] flex">
        <ProtocolComponent />
        <AddYellowDoc />
      </div>
    </div>
  );
}
