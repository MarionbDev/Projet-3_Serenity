import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const imageTypes = ["image/jpeg", "image/jpg", "image/png"];

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
    <div>
      <div className="create-content-form-container">
        <h2>Ajouter un nouveau contenu</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="protocol">Protocole :</label>
            <select
              id="protocol"
              name="protocol"
              value={selectedProtocol}
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

          <div className="form-group">
            <label htmlFor="title">Titre :</label>
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={handleChangeTitle}
            />
          </div>

          <div className="form-group">
            <label htmlFor="type">Type :</label>
            <select
              id="type"
              name="type"
              value={type}
              onChange={handleChangeType}
            >
              <option value="image">Image</option>
              <option value="video">Vidéo</option>
              <option value="text">Texte</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="timing">Durée :</label>
            <input
              type="text"
              id="timing"
              name="timing"
              value={timing}
              onChange={handleChangeTiming}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description :</label>
            <textarea
              id="description"
              name="description"
              value={description}
              onChange={handleChangeDescription}
            />
          </div>

          <div className="form-group">
            <label htmlFor="source">Source :</label>
            <input
              type="file"
              id="source"
              name="source"
              accept={imageTypes.join(",")}
              onChange={handleChangeSource}
            />
          </div>

          <div className="form-group">
            <label htmlFor="step">Étape :</label>
            <input
              type="text"
              id="step"
              name="step"
              value={step}
              onChange={handleChangeStep}
            />
          </div>

          <div className="form-group">
            <label htmlFor="category">Catégorie :</label>
            <select
              id="category"
              name="category"
              value={category}
              onChange={handleChangeCategory}
            >
              <option value="compréhension">Compréhension</option>
              <option value="démonstration">Démonstration</option>
              <option value="expérimentation">Expérimentation</option>
            </select>
          </div>

          <button type="submit">Ajouter</button>
        </form>

        <Link to="/">Retour</Link>
      </div>
    </div>
  );
}
