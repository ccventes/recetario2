import { useState } from "react";

export default function SearchBarLetter({ onSearch, onBack }) {
  const [letter, setLetter] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (letter.trim().length === 1) {
      onSearch(letter);
    } else {
      alert("Por favor ingresa solo una letra (A–Z).");
    }
  };

  return (
    <div className="search-bar">
      <button className="back-btn" onClick={onBack}>⬅ Volver</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          maxLength={1}
          placeholder="Busca por primera letra..."
          value={letter}
          onChange={(e) => setLetter(e.target.value.toLowerCase())}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}
