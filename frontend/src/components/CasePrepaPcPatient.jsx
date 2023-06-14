export default function CasePrepaPcPatient() {
  return (
    <div className="flex justify-around ml-[256px]">
      <button
        className="mt-16 ml-16 border-4 rounded-2xl border-yellow-500 w-32 h-32"
        type="button"
      >
        <p>Comprendre mon opération</p>
      </button>
      <button
        className="mt-16 ml-16 border-4 rounded-2xl border-teal-600 w-32 h-32"
        type="button"
      >
        <p>Se débarasser des formalitées administrative</p>
      </button>
      <button
        className="mt-16 ml-16 border-4 rounded-2xl border-pink-400 w-32 h-32"
        type="button"
      >
        <p>Préparer mon arrivée en toute sérénité</p>
      </button>
      <button
        className="mt-16 ml-16 border-4 rounded-2xl border-green-400 w-32 h-32"
        type="button"
      >
        <p>Anticiper ma sortie</p>
      </button>
      <button
        className="mt-16 ml-16 mr-16 border-4 rounded-2xl border-indigo-500 w-32 h-32"
        type="button"
      >
        <p>Ma check list avant mon départ pour la clinique</p>
      </button>
    </div>
  );
}
