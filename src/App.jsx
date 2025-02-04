import { useState } from "react";

export default function App() {
  const [article, setArticle] = useState("");

  const handleField = (e) => {
    setArticle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Inviato");
    console.log("l'articolo è" + article);
  };

  return (
    <>
      <h1>Lista di articoli</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={article}
          onChange={handleField}
          placeholder="Scrivi l'articolo"
        />
        <button type="submit">Invia</button>
        {article && <p>L'articolo è: {article}</p>}
      </form>
    </>
  );
}
