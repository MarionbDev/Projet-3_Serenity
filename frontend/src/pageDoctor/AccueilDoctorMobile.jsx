import HeaderDoctor from "../componentsDoctor/HeaderDoctor";
import SideBarDoctor from "../componentsDoctor/SideBarDoctor";

export default function AccueilDoctorMobile() {
  return (
    <div className="min-h-screen  bg-[#242731]">
      <HeaderDoctor text="Commment vont vos patients ?!" />
      <SideBarDoctor />
    </div>
  );
}
