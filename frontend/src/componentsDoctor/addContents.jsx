import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const imageTypes = ["image/jpeg", "image/jpg", "image/png", "application/pdf"];

export default function CreateContentForm() {
  const [protocols, setProtocols] = useState("");
  const [selectedProtocol, setSelectedProtocol] = useState("");
  const [title, setTitle] = useState("");
  const [type, setType] = useState("image");
  const [timing, setTiming] = useState("");
  const [description, setDescription] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [step, setStep] = useState("");
  const [category, setCategory] = useState("compréhension");

  const getAllProtocols = () => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/protocols`, {
      method: "GET",
      credentials: "include",
    })
      .then((resp) => resp.json())
      .then((data) => {
        setProtocols(data);
      })
      .catch((err) => console.error(err));
  };

  useEffect(() => {
    getAllProtocols();
  }, [selectedProtocol]);

  if (!protocols) {
    return <p>En attente des protocoles...</p>;
  }

  const handleChangeProtocol = (e) => {
    const protocolIdToUpdate = parseInt(e.target.value, 10);

    if (!Number.isNaN(protocolIdToUpdate, 10)) {
      setSelectedProtocol(protocolIdToUpdate);
    } else {
      alert("Ce champ est requis, veuillez renseigner une valeur");
    }
  };

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeType = (e) => {
    setType(e.target.value);
  };

  const handleChangeTiming = (e) => {
    setTiming(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleChangeSource = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  const handleChangeStep = (e) => {
    setStep(e.target.value);
  };

  const handleChangeCategory = (e) => {
    setCategory(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !title ||
      !selectedProtocol ||
      !timing ||
      !description ||
      !selectedFile ||
      !step
    ) {
      alert("Veuillez remplir tous les champs obligatoires.");
    } else {
      const contentData = new FormData();
      contentData.append("title", title);
      contentData.append("type", type);
      contentData.append("timing", timing);
      contentData.append("description", description);
      contentData.append("source", selectedFile);
      contentData.append("step", step);
      contentData.append("category", category);
      contentData.append("protocol_id", selectedProtocol);

      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/contents`, {
        method: "POST",
        credentials: "include",
        body: contentData,
      })
        .then((res) => res.json())
        .then(() => {
          alert("Votre contenu a bien été enregistré.");
          setSelectedProtocol("");
          setTitle("");
          setType("image");
          setTiming("");
          setDescription("");
          setSelectedFile(null);
          setStep("");
        })
        .catch((error) => {
          console.error("Error:", error);
          alert(
            "Une erreur s'est produite lors de l'enregistrement du contenu."
          );
        });
    }
  };

  return (
    <div className="mt-20">
      <div className="create-content-form-container min-h-screen bg-[#242731]">
        <h2 className="text-white italic text-xl pl-4 text-center mb-5">
          Ajouter un nouveau contenu
        </h2>
        <div className="flex justify-center items-center">
          <div className="rounded-2xl shadow-lg shadow-slate-950/70 mb-10">
            <section className="">
              <p className="text-white italic text-sm pl-4">
                * Champs obligatoires
              </p>
              <div className="bg-dark-02 rounded-24">
                <form onSubmit={handleSubmit} className="mt-2 px-4">
                  <div className="flex flex-col ">
                    <div className="grid lg:grid-cols-2 gap-4 overflow-y-auto pb-5 lg:h-[370px] ">
                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="protocol"
                          className="text-base mb-2 text-white"
                        >
                          Protocole :
                        </label>
                        <select
                          id="protocol"
                          name="protocol"
                          value={selectedProtocol}
                          className="px-4 py-1 text-black rounded-md w-full"
                          onChange={handleChangeProtocol}
                        >
                          <option value="">Sélectionnez un protocole</option>
                          {protocols.map((protocol) => (
                            <option key={protocol.id} value={protocol.id}>
                              {protocol.title}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="title"
                          className="text-base mb-2 text-white"
                        >
                          Titre :
                        </label>
                        <input
                          type="text"
                          id="title"
                          name="title"
                          value={title}
                          onChange={handleChangeTitle}
                          className="px-4 py-1 text-black rounded-md w-full"
                        />
                      </div>

                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="type"
                          className="text-base mb-2 text-white"
                        >
                          Type :
                        </label>
                        <select
                          id="type"
                          name="type"
                          value={type}
                          onChange={handleChangeType}
                          className="px-4 py-1 text-black rounded-md w-full"
                        >
                          <option value="image">Image</option>
                          <option value="video">Vidéo</option>
                          <option value="text">Texte</option>
                        </select>
                      </div>

                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="timing"
                          className="text-base mb-2 text-white"
                        >
                          Durée :
                        </label>
                        <input
                          type="text"
                          id="timing"
                          name="timing"
                          value={timing}
                          onChange={handleChangeTiming}
                          className="px-4 py-1 text-black rounded-md w-full"
                        />
                      </div>

                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="description"
                          className="text-base mb-2 text-white"
                        >
                          Description :
                        </label>
                        <textarea
                          id="description"
                          name="description"
                          value={description}
                          onChange={handleChangeDescription}
                          className="px-4 py-1 text-black rounded-md w-full"
                        />
                      </div>

                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="source"
                          className="text-base mb-2 text-white"
                        >
                          Source :
                        </label>
                        <input
                          type="file"
                          id="source"
                          name="source"
                          accept={imageTypes.join(",")}
                          onChange={handleChangeSource}
                          className="px-4 py-1 text-white rounded-md w-full"
                        />
                      </div>

                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="step"
                          className="text-base mb-2 text-white"
                        >
                          Étape :
                        </label>
                        <input
                          type="text"
                          id="step"
                          name="step"
                          value={step}
                          onChange={handleChangeStep}
                          className="px-4 py-1 text-black rounded-md w-full"
                        />
                      </div>

                      <div className="form-group flex flex-col items-start">
                        <label
                          htmlFor="category"
                          className="text-base mb-2 text-white"
                        >
                          Catégorie :
                        </label>
                        <select
                          id="category"
                          name="category"
                          value={category}
                          onChange={handleChangeCategory}
                          className="px-4 py-1 text-black rounded-md w-full"
                        >
                          <option value="compréhension">Compréhension</option>
                          <option value="démonstration">Démonstration</option>
                          <option value="expérimentation">
                            Expérimentation
                          </option>
                        </select>
                      </div>
                    </div>
                    <div className="text-center ">
                      <button
                        type="submit"
                        className="bg-[#323847] rounded-full shadow-slate-950/90 shadow-xl mb-5 text-white
                    hover:text-white sm:hover:bg-white/30 w-5/12 mx-4"
                      >
                        <p className="px-6 py-2 text-center">Ajouter</p>
                      </button>

                      <Link to="/">
                        <button
                          type="submit"
                          className="bg-[#323847] rounded-full shadow-slate-950/90 shadow-xl mb-5 text-white
                    hover:text-white sm:hover:bg-white/30 w-5/12"
                        >
                          <p className="px-6 py-2 text-center">Retour</p>
                        </button>
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
