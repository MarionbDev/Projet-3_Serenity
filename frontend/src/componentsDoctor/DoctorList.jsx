/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Modal } from "react-responsive-modal";
import { useUserContext } from "../contexts/UserContext";
import trash from "../assets/logo/logoDoctor/trash.png";
import PrivateLink from "../components/PrivateLink";
// import PropTypes from "prop-types";
import SideBarDoctor from "./SideBarDoctor";
import search from "../assets/logo/logoDoctor/Search.png";
import HeaderDoctor from "./HeaderDoctor";
import view from "../assets/logo/logoDoctor/view.svg";

export default function DoctorList() {
  const [praticien, setPraticien] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedDoctorId, setSelectedDoctorId] = useState(null);

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
    setSelectedDoctorId(patientId);
    setDeleteOpen(true);
  };

  const getAllPraticien = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/doctors/`)
      .then((res) => res.json())
      .then((data) => {
        setPraticien(data);
        console.warn(data);
      });
  };
  useEffect(() => {
    if (idDoctor !== "") {
      getAllPraticien();
      console.warn(praticien);
    }
  }, []);

  const deleteIntervention = () => {
    // if (confirm("Voulez-vous supprimer cette intervention ?")) {
    fetch(
      `${import.meta.env.VITE_BACKEND_URL}/api/doctors/${selectedDoctorId}`,
      {
        method: "DELETE",
        credentials: "include",
      }
    )
      .then(() => {
        getAllPraticien();
        deleteOnCloseModal();
      })
      .catch((err) => console.error(err));
    // }
  };

  if (!praticien.length === 0) {
    return <p>Loading page</p>;
  }

  return (
    <div className="min-h-screen bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor text="Liste des praticiens :" />
      </div>
      <div className="md:ml-[100px] py-5 md:py-14  text-[#FFFFFF]">
        <div className="absolute  w-[900px] ml-[321px] mt-[120px] rounded-2xl shadow-lg shadow-slate-950/70  h-[500px]">
          <div className="flex mt-[32px] ">
            <img
              src={search}
              alt="search"
              className=" relative left-12 bottom-2 w-[24px] h-[24px] mt-5 mr-4 flex"
            />
            <input
              className="italic h-[46px] w-[320px] text-gray-500 pl-10 bg-[#282b33]  shadow-slate-950/70 shadow-sm rounded-2xl"
              type="text"
              placeholder="Nom du praticien "
              onChange={(e) => setSearchInput(e.target.value)}
            />
          </div>
          <section>
            <div className="flex grid-cols-5 gap-[56px] border-t-[1px] border-[#a5a5a5]/20 ml-[32px]  text-gray-500 mt-5 pt-2 text-[16px] h-[28px] w-[820px]">
              <p className="ml-8">Prénom</p>
              <p>Nom</p>
              <p className="ml-4">Téléphone</p>
              <p className="ml-12">Mail</p>
            </div>

            <div className="flex  border-b-[1px] border-[#a5a5a5]/20 ml-[32px]  text-gray-500 mt-4 text-[16px] h-[1px] w-[820px]">
              <ul className="overflow-y-auto overflow-hidden h-[15rem] text-[#FFFFFF] w-[820px] flex flex-col  border-b-[1px] border-[#a5a5a5]/20  mt-[20px]">
                <div className="w-[720px] ">
                  {praticien
                    .filter(
                      (doctor) =>
                        doctor.lastname
                          .toLowerCase()
                          .includes(searchInput.toLowerCase()) ||
                        doctor.firstname
                          .toLowerCase()
                          .includes(searchInput.toLowerCase())
                    )
                    .map((doctor) => (
                      <li
                        key={doctor.id}
                        className="flex justify-between ml-8 text-[16px] list-disc mb-2"
                      >
                        <div className="flex grid-cols-5 gap-10x ">
                          <p className="w-28">{doctor.firstname}</p>
                          <p className=" w-28">{doctor.lastname}</p>
                          <p className="w-48">{doctor.tel}</p>
                          <p className="w-72 text-">{doctor.mail}</p>
                          <div className="flex ml-10 ">
                            <Link
                              to={`/doctors/${idDoctor}/praticiens/${doctor.id}`}
                            >
                              <button type="button">
                                <img
                                  src={view}
                                  alt="edit"
                                  className="w-[18px] h-[18px] mr-8 hover:scale-110 duration-100 "
                                />
                              </button>
                            </Link>

                            <button
                              type="button"
                              onClick={() => handleDeleteOpenModal(doctor.id)}
                            >
                              <img
                                src={trash}
                                alt="trash"
                                className="w-[24px] h-[24px]  hover:scale-125 duration-100"
                              />
                            </button>
                          </div>
                        </div>
                      </li>
                    ))}
                </div>
              </ul>
            </div>
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
                Souhaitez-vous supprimer ce praticien ?
              </h1>
              <div className="flex justify-center mt-2 gap-6 ">
                <button
                  type="button"
                  onClick={deleteIntervention}
                  className=" duration-300 text-[#FFFFFF] bg-[#323847] sm:rounded-full sm:mt-3 sm:w-20 sm:hover:bg-white/30  sm:hover:font-semibold"
                >
                  Oui
                </button>

                <button
                  type="button"
                  onClick={handleNonDeleteButtonClick}
                  className=" duration-300 text-[#FFFFFF] bg-[#323847] sm:rounded-full sm:mt-3 sm:w-20 sm:hover:bg-white/30  sm:hover:font-semibold"
                >
                  <p className=" text-center p-1">Non</p>
                </button>
              </div>
            </Modal>
          </section>
          <div className=" flex justify-center mt-[280px]">
            <PrivateLink
              to={`/doctors/${idDoctor}/praticiens/admin/CreateDoctor`}
              text="Un nouveau praticien"
              authorizedRoles={["Admin"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
// DoctorList.propTypes = { lastname: PropTypes.string.isRequired };
