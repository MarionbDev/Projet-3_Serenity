export default function HeaderMobilePrepaPatient() {
  return (
    <>
      <div className="flex justify-around m-6">
        <img
          className="h-24 w-24 rounded-lg "
          src="/src/assets/images/patient1.png"
          alt="avatar"
        />
        <div className="flex-col">
          <h1 className="text-2xl ml-6 mt-2">Cécile</h1>
          <p className="flex items-center text-xs w-52 h-10 ml-6">
            Préparation pour ma chirurgie
          </p>
          <p className="flex items-center text-xl w-52 h-10 -mt-4 ml-6">
            Doctor Nerisson
          </p>
        </div>
      </div>

      <div className="flex justify-end -mt-4 m-3">
        <div className="flex-col items-end m-4 text-right">
          <p className="p-1 text-xs">Date</p>
          <p className="p-1 text-xl">6 Février 2040</p>
        </div>
        <div className="flex-col items-end m-4 text-right">
          <p className="p-1 text-xs">Heure</p>
          <p className="p-1 text-xl">04:02</p>
        </div>
      </div>
    </>
  );
}
