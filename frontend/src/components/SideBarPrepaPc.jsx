export default function SideBarPrepaPc() {
  return (
    <div className="min-h-screen w-64 border-r-2 fixed">
      <div className="pt-6 pl-8 ">
        <img src="/src/assets/logo/logo1.png" alt="logo" />
      </div>
      <div className="mt-20 ml-4">
        <button
          className="bg-indigo-500 flex items-center rounded-lg w-[90%] h-14"
          type="button"
        >
          <img
            className="ml-6 mr-2"
            src="/src/assets/logo/icon1.png"
            alt="icon"
          />
          <p className="m-2 text-white font-semibold">Ma préparation</p>
        </button>
        <button
          type="button"
          className="flex items-center rounded-lg w-[90%] h-14"
        >
          <img
            className="ml-7 mr-2"
            src="/src/assets/logo/bag.png"
            alt="icon"
          />
          <p className="m-3 text-gray-500 font-semibold">Ma préparation</p>
        </button>
        <button
          className="flex items-center rounded-lg w-[90%] h-14"
          type="button"
        >
          <img
            className="ml-7 mr-2"
            src="/src/assets/logo/Chart.png"
            alt="icon"
          />
          <p className="m-3 text-gray-500 font-semibold">Agenda</p>
        </button>
      </div>
      <div className="mt-20 ml-4">
        <p className="m-3 text-gray-500 font-semibold text-sm">Des nouvelles</p>
        <button
          className="flex items-center rounded-lg w-[90%] h-14"
          type="button"
        >
          <img
            className="ml-7 mr-2"
            src="/src/assets/logo/Notification.png"
            alt="icon"
          />
          <p className="m-3 text-gray-500 font-semibold">Agenda</p>
        </button>
        <button
          className="flex items-center rounded-lg w-[90%] h-14"
          type="button"
        >
          <img
            className="ml-7 mr-2"
            src="/src/assets/logo/Chat.png"
            alt="icon"
          />
          <p className="m-3 text-gray-500 font-semibold">Messagerie</p>
        </button>
      </div>
      <div className="mt-44 ml-4 flex">
        <img
          className="ml-4 w-14"
          src="/src/assets/logo/avatar1.png"
          alt="avatar"
        />
        <p className="m-3 text-gray-500 font-semibold">Bé Bert</p>
      </div>
    </div>
  );
}
