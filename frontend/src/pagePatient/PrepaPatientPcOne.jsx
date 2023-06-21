import HeaderPrepaPatientPc from "../componentsPatient/pc/HeaderPrepaPatientPc";
import SideBarPrepaPcOne from "../componentsPatient/pc/SideBarPrepaPc";
import CasePrepaPcPatient from "../componentsPatient/pc/CasePrepaPcPatient";

export default function PrepaPatientPcOne() {
  return (
    <>
      <SideBarPrepaPcOne />
      <HeaderPrepaPatientPc />
      <CasePrepaPcPatient />
    </>
  );
}
