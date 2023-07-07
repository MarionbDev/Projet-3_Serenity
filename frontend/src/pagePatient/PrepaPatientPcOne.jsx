import CasePrepaPcPatient from "../componentsPatient/pc/CasePrepaPcPatient";
import HeaderPrepaPatientPc from "../componentsPatient/pc/HeaderPrepaPatientPc";
import SideBarPrepaPcOne from "../componentsPatient/pc/SideBarPrepaPc";

export default function PrepaPatientPcOne() {
  return (
    <>
      <SideBarPrepaPcOne />
      <HeaderPrepaPatientPc />
      <CasePrepaPcPatient />
    </>
  );
}
