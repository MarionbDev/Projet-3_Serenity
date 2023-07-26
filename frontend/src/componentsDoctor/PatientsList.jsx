import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import { useUserContext } from "../contexts/UserContext";
import SideBarDoctor from "./SideBarDoctor";
import HeaderDoctor from "./HeaderDoctor";
import search from "../assets/logo/logoDoctor/Search.png";
import trash from "../assets/logo/logoDoctor/trash.png";
import view from "../assets/logo/logoDoctor/view.svg";

export default function DoctorPatientList() {
  const [patient, setPatient] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const { idDoctor } = useUserContext();
  // const { idPatient } = useUserContext();

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  // const deleteOnOpenModal = () => setDeleteOpen(true);
  const deleteOnCloseModal = () => setDeleteOpen(false);

  const handleNonButtonClick = () => {
    onCloseModal();
  };

  const handleNonDeleteButtonClick = () => {
    deleteOnCloseModal();
  };

  const handleDeleteOpenModal = (patientId) => {
    setSelectedPatientId(patientId);
    setDeleteOpen(true);
  };

  const getAllPatients = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/patients`)
      .then((res) => res.json())
      .then((data) => {
        setPatient(data);
      });
  };

  useEffect(() => {
    getAllPatients();
  }, []);

  const deleteIntervention = () => {
    // if (confirm("Voulez-vous supprimer cette intervention ?")) {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/patients/${selectedPatientId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    )
      .then(() => {
        getAllPatients();
        deleteOnCloseModal();
      })
      .catch((err) => console.error(err));
    // }
  };

  if (!patient.length === 0) {
    return <p>Loading page</p>;
  }

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor text="Un nouveau patient ?!" />
      </div>
      <div className="absolute w-[1055px] ml-[321px] mt-[162px] rounded-2xl shadow-lg shadow-slate-950/70  h-[500px]  ">
        <div className="flex mt-[32px] ">
          <img
            src={search}
            alt="search"
            className="relative left-12 bottom-2 w-[24px] h-[24px] mt-5 mr-4 flex"
          />
          <input
            className="italic h-[46px] w-[320px] text-gray-500 pl-10 bg-[#282b33]  shadow-slate-950/70 shadow-sm rounded-2xl"
            type="text"
            placeholder="Nom de votre patient "
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <section>
          <div className="flex grid-cols-5 gap-[56px] border-t-[1px] border-[#a5a5a5]/20 ml-[32px]  text-gray-500 mt-5 pt-2 text-[16px] h-[28px] w-[991px]">
            <p className="ml-8">Prénom</p>
            <p>Nom</p>
            <p className="ml-6">Téléphone fixe</p>
            <p>Téléphone portable</p>
            <p>Mail</p>
          </div>

          <div className="flex border-b-[1px] border-[#a5a5a5]/20 ml-[32px]  text-gray-500 mt-4 text-[16px] h-[1px] w-[991px]">
            <ul className="overflow-y-auto overflow-hidden h-[15rem] text-[#FFFFFF] w-[991px] flex flex-col  border-b-[1px] border-[#a5a5a5]/20  mt-[20px]">
              <div className="w-[720px] ">
                {patient
                  .filter(
                    (item) =>
                      item.lastname
                        .toLowerCase()
                        .includes(searchInput.toLowerCase()) ||
                      item.firstname
                        .toLowerCase()
                        .includes(searchInput.toLowerCase())
                  )
                  .map((item) => (
                    <li
                      key={item.id}
                      className="flex justify-between ml-8 text-[16px] list-disc mb-2"
                    >
                      <div className="flex grid-cols-5 gap-10">
                        <p className="w-20">{item.firstname}</p>
                        <p className="w-20">{item.lastname}</p>
                        <p className="w-36">{item.tel_fixe}</p>
                        <p className=" w-32">{item.tel_portable}</p>
                        <p className="w-72 text-">{item.mail}</p>
                        <div className="flex ">
                          <Link to={`/doctors/${idDoctor}/patients/${item.id}`}>
                            <button
                              type="button"
                              onClick={() => setSelectedPatientId(item.id)}
                            >
                              <img
                                src={view}
                                alt="edit"
                                className="w-[18px] h-[18px] mr-8 hover:scale-110 duration-100 "
                              />
                            </button>
                          </Link>
                          <button
                            type="button"
                            onClick={() => handleDeleteOpenModal(item.id)}
                          >
                            <img
                              src={trash}
                              alt="trash"
                              className="w-[24px] h-[24px] hover:scale-110 duration-100 "
                            />
                          </button>
                        </div>
                      </div>
                    </li>
                  ))}
              </div>
            </ul>
          </div>

          <div className="flex justify-center mt-8">
            <Modal
              open={deleteOpen}
              onClose={deleteOnCloseModal}
              center
              classNames={{ overlay: "customOverlay", modal: "customModal" }}
              closeIcon={
                <span
                  style={{
                    fontSize: "20px",
                    width: "18px",
                    height: "18px",
                    color: "white",
                  }}
                >
                  X
                </span>
              }
            >
              <h1 className="text-[#FFFFFF] text-center">
                Souhaitez-vous supprimer ce patient ?
              </h1>
              <div className="flex justify-center mt-2 gap-6 ">
                <button
                  type="button"
                  onClick={deleteIntervention}
                  className="text-[#FFFFFF] bg-[#323847] sm:rounded-full sm:mt-3 sm:w-20 sm:hover:bg-white/30  sm:hover:font-semibold"
                >
                  Oui
                </button>

                <button
                  type="button"
                  onClick={handleNonDeleteButtonClick}
                  className="text-[#FFFFFF] bg-[#323847] sm:rounded-full sm:mt-3 sm:w-20 sm:hover:bg-white/30  sm:hover:font-semibold"
                >
                  <p className=" text-center p-1">Non</p>
                </button>
              </div>
            </Modal>

            <Modal
              open={open}
              onClose={onCloseModal}
              center
              classNames={{ overlay: "customOverlay", modal: "customModal" }}
              closeIcon={
                <span
                  style={{
                    fontSize: "20px",
                    width: "18px",
                    height: "18px",
                    color: "white",
                  }}
                >
                  X
                </span>
              }
            >
              <h1 className="text-[#FFFFFF] text-center">
                Souhaitez-vous créer un nouveau patient ?
              </h1>
              <div className="flex justify-center mt-2 gap-6 ">
                <Link
                  to={`/doctors/${idDoctor}/patients/create-patient`}
                  className=" duration-300 text-[#FFFFFF] bg-[#323847] sm:rounded-full sm:mt-3 sm:w-20 sm:hover:bg-white/30  sm:hover:font-semibold"
                >
                  <p className=" text-center p-1">Oui</p>
                </Link>
                <button
                  type="button"
                  onClick={handleNonButtonClick}
                  className=" duration-300 text-[#FFFFFF] bg-[#323847] sm:rounded-full sm:mt-3 sm:w-20 sm:hover:bg-white/30  sm:hover:font-semibold"
                >
                  <p className=" text-center p-1">Non</p>
                </button>
              </div>
            </Modal>
          </div>
          <div className="flex justify-center mt-[250px]">
            <button
              type="button"
              onClick={onOpenModal}
              className="bg-[#323847] rounded-full shadow-slate-950/90 shadow-xl mb-5 text-white
            hover:text-white sm:hover:bg-white/30  duration-300  "
            >
              <p className="flex px-7 py-2">Un nouveau patient</p>
            </button>
          </div>
        </section>
      </div>
    </div>
  );
}
