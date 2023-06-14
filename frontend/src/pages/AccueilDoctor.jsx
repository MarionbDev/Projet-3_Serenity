import SideBarDoctor from "../components/SideBarDoctor";
import HeaderDoctor from "../components/HeaderDoctor";
import search from "../assets/logo/logoDoctor/Search.png";
import notification from "../assets/logo/logoDoctor/bell.png";

export default function AccueilDoctor() {
  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor />{" "}
      </div>

      <div className=" flex  w-[426px]  absolute right-0 border-l-[1px] min-h-screen border-[#a5a5a5]/20 ">
        <div className="flex pt-[60px] ">
          <img
            src={search}
            alt="search"
            className="relative top-2 left-10 w-[20px] h-[20px]  mr-4 flex"
          />
          <input
            className="h-[34px] w-36  py-3 pl-10 bg-[#242731] text-[14px] rounded-xl shadow-slate-950/70 shadow-sm"
            type="text"
            placeholder="Search "
          />
          <div className="rounded-full ml-32 mt-[-17px] h-[50px] w-[54px]  shadow-lg shadow-slate-950/80 flex justify-center items-center">
            <img
              src={notification}
              alt="notification"
              className=" w-[24px] h-[24px]  "
            />
          </div>
        </div>
      </div>
    </div>
  );
}
