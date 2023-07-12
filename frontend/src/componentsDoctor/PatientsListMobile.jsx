import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import { useUserContext } from "../contexts/UserContext";
import HeaderDoctor from "./HeaderDoctor";
import search from "../assets/logo/logoDoctor/Search.png";
import trash from "../assets/logo/logoDoctor/trash.png";
import view from "../assets/logo/logoDoctor/view.svg";

export default function DoctorPatientListMobile() {
  const [patient, setPatient] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedPatientId, setSelectedPatientId] = useState(null);

  const [open, setOpen] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  const { idDoctor } = useUserContext();

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

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
        console.warn(data);
      });
  };

  useEffect(() => {
    getAllPatients();
  }, []);

  const deleteIntervention = () => {
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

  if (!patient) {
    return <p>Loading page</p>;
  }

  return (
    <div className="min-h-screen bg-[#242731]">
      <div className=" text-[#FFFFFF]">
        <HeaderDoctor text="Un nouveau patient ?!" />
      </div>
      <div className="">
        <div className="flex h-6 mt-[20px] mb-4 ">
          <img
            src={search}
            alt="search"
            className="relative left-10 bottom-[18px] w-[18px] h-[18px] mt-5 mr-4 flex"
          />
          <input
            className="italic text-sm text-gray-500 pl-10 w-60 bg-[#282b33]  shadow-slate-950/70 shadow-sm rounded-2xl"
            type="text"
            placeholder="Nom de votre patient "
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <section className="px-3 flex items-center flex-col ">
          <div className="flex flex-col items-center rounded-2xl shadow-lg shadow-slate-950/70 pt-3 mb-2 px-2">
            <div className="flex w-64  gap-[38px] border-b-[1px] border-[#a5a5a5]/20 text-sm text-gray-500 ]">
              <p className="ml-1">Prénom</p>
              <p>Nom</p>
            </div>

            <div className="flex  text-gray-500 mt-4  ">
              <ul className="overflow-y-auto overflow-hidden h-56 text-[#FFFFFF] flex flex-col px-2  ">
                <div className="">
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
                        className="flex justify-between text-[14px] list-disc mb-1"
                      >
                        <div className="flex gap-3">
                          <p className="w-20">{item.firstname}</p>
                          <p className="w-20">{item.lastname}</p>
                          <div className="flex ">
                            <Link
                              to={`/doctors/${idDoctor}/patients/${item.id}`}
                            >
                              <button
                                type="button"
                                onClick={() => setSelectedPatientId(item.id)}
                              >
                                <img
                                  src={view}
                                  alt="edit"
                                  className="w-[18px] h-[18px] mr-8"
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
                                className="w-[20px] h-[20px]"
                              />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                </div>
              </ul>
            </div>

            <div className="flex justify-center mt-8 ">
              <Modal
                open={deleteOpen}
                onClose={deleteOnCloseModal}
                center
                classNames={{ overlay: "customOverlay", modal: "customModal" }}
                closeIcon={
                  <span
                    style={{
                      fontSize: "0px",
                      width: "18px",
                      height: "18px",
                      color: "white",
                    }}
                  >
                    X
                  </span>
                }
              >
                <h1 className=" text-sm text-[#FFFFFF] text-center">
                  Souhaitez-vous supprimer ce patient ?
                </h1>
                <div className="flex justify-center mt-4 gap-6 ">
                  <button
                    type="button"
                    onClick={deleteIntervention}
                    className="text-sm text-[#FFFFFF] bg-[#323847] rounded-full w-12"
                  >
                    Oui
                  </button>

                  <button
                    type="button"
                    onClick={handleNonDeleteButtonClick}
                    className="text-[#FFFFFF] bg-[#323847] rounded-full  w-12"
                  >
                    <p className="text-sm text-center p-1">Non</p>
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
                      fontSize: "0px",
                      width: "0px",
                      height: "0px",
                      color: "white",
                    }}
                  >
                    X
                  </span>
                }
              >
                <h1 className="text-[#FFFFFF] text-sm mb-2 text-center">
                  Souhaitez-vous créer un nouveau patient ?
                </h1>
                <div className="flex justify-center mt-3 gap-6 ">
                  <Link
                    to={`/doctors/${idDoctor}/patients/create-patient`}
                    className="text-[#FFFFFF] bg-[#323847] rounded-full w-12 "
                  >
                    <p className="text-sm text-center ">Oui</p>
                  </Link>
                  <button
                    type="button"
                    onClick={handleNonButtonClick}
                    className="text-[#FFFFFF] bg-[#323847] rounded-full  w-12 "
                  >
                    <p className="text-sm text-center ">Non</p>
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        </section>
        <div className="flex justify-center mt-5 ">
          <button
            type="button"
            onClick={onOpenModal}
            className="bg-[#323847] rounded-full shadow-slate-950/90 shadow-xl mb-5 text-white
             "
          >
            <p className="flex text-sm px-6 py-2">Un nouveau patient</p>
          </button>
        </div>
      </div>
    </div>
  );
}
