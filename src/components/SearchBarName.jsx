import { useState } from "react";

export default function SearchBarName({ onSearch, onBack }) {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim().length > 0) {
      onSearch(name.trim());
    } else {
      alert("Por favor escribe el nombre de una receta.");
    }
  };

  return (
    <div className="search-bar">
      <button className="back-btn" onClick={onBack}>⬅ Volver</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Escribe el nombre de la receta..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}
