import { useState, useEffect } from "react";
import { Modal } from "react-responsive-modal";
import { Link } from "react-router-dom"; // Ajout de l'import pour utiliser le composant Link
import { useUserContext } from "../contexts/UserContext";
import SideBarDoctor from "./SideBarDoctor";
import HeaderDoctor from "./HeaderDoctor";

function ProfessionalGuy() {
  const [professionels, setProfessionels] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [open, setOpen] = useState(false);

  const onOpenModal = () => setOpen(true);
  const onCloseModal = () => setOpen(false);

  const handleNonButtonClick = () => {
    onCloseModal();
  };

  const { idDoctor } = useUserContext();

  const getAllProfessionels = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/profesionnels`)
      .then((res) => res.json())
      .then((data) => {
        setProfessionels(data);
      });
  };

  useEffect(() => {
    if (idDoctor !== "") {
      getAllProfessionels();
    }
  }, [idDoctor]);

  useEffect(() => {
    if (searchInput !== "") {
      getAllProfessionels();
    }
  }, [searchInput]);

  if (!professionels) {
    return <p>Loading page</p>;
  }

  return (
    <div className="h-[105vh] bg-[#242731]">
      <SideBarDoctor />
      <div className="absolute  w-2/3 mt-[48px] ml-[321px] text-[#FFFFFF]">
        <HeaderDoctor text="Liste des professionnels médicaux" />
      </div>
      <div className="absolute w-[1055px]  ml-[321px] mt-[162px] rounded-2xl shadow-lg shadow-slate-950/70  h-[500px]  ">
        <div className="flex mt-[32px]  ">
          <input
            className="h-[56px] w-[320px] text-gray-500 pl-10 bg-[#282b33]  shadow-slate-950/70 shadow-sm rounded-2xl italic text-[#FFFFFF]"
            type="text"
            placeholder="Rechercher un professionnel"
            onChange={(e) => setSearchInput(e.target.value)}
          />
        </div>
        <section>
          <div className="flex border-b-[1px] border-[#a5a5a5]/20 ml-[32px]  text-gray-500 mt-8 text-[16px] h-[45px] w-[991px]">
            <p className="ml-8">Nom</p>
            {/* Add more columns here if needed */}
          </div>
          <div>
            <ul className="overflow-y-auto overflow-hidden h-[230px] text-[#FFFFFF] w-[991px] flex flex-col  border-b-[1px] border-[#a5a5a5]/20  mt-[31px]">
              {professionels
                .filter((professionel) =>
                  professionel.firstname
                    .toLowerCase()
                    .includes(searchInput.toLowerCase())
                )
                .map((professionel) => (
                  <li
                    key={`professionel-${professionel.id}`}
                    className="flex flex-col mb-8"
                  >
                    <p>{professionel.firstname}</p>
                    {/* Add more information about the professionel as needed */}
                  </li>
                ))}
            </ul>
            <div className="flex justify-center mt-4">
              <button
                type="button"
                onClick={onOpenModal}
                className="bg-[#323847] rounded-full shadow-xl mb-5 text-white
                hover:text-white sm:hover:bg-white/30"
              >
                <p className="flex px-6 py-2">Un nouveau Profesionnel</p>
              </button>
              <Modal
                open={open}
                onClose={onCloseModal}
                center
                classNames={{ overlay: "customOverlay", modal: "customModal" }}
                closeIcon={
                  <span
                    style={{
                      fontSize: "20px",
                      width: "20px",
                      height: "20px",
                      color: "white",
                    }}
                  >
                    X
                  </span>
                }
              >
                <h1 className="text-[#FFFFFF] font-semibold">
                  Souhaitez-vous créer un nouveau profesionnel ?
                </h1>

                <div className="flex justify-center mt-2 gap-6 ">
                  <Link
                    to={`/doctors/${idDoctor}/professionals/CreatPro`}
                    className="text-[#FFFFFF] bg-[#323847] sm:rounded-full sm:mt-3 sm:w-20 sm:hover:bg-white/30 sm:hover:font-semibold"
                  >
                    <p className=" text-center p-1">Oui</p>
                  </Link>
                  <button
                    type="button"
                    onClick={handleNonButtonClick}
                    className="text-[#FFFFFF] bg-[#323847] sm:rounded-full sm:mt-3 sm:w-20 sm:hover:bg-white/30 sm:hover:font-semibold"
                  >
                    <p className=" text-center p-1">Non</p>
                  </button>
                </div>
              </Modal>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ProfessionalGuy;
