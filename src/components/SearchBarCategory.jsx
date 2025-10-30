import { useState } from "react";

export default function SearchBarCategory({ onSearch, onBack }) {
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (category.trim().length > 0) {
      onSearch(category.trim());
    } else {
      alert("Escribe una categoría, por ejemplo: 'Seafood', 'Beef'...");
    }
  };

  return (
    <div className="search-bar">
      <button className="back-btn" onClick={onBack}>⬅ Volver</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busca por categoría..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button type="submit">Buscar</button>
      </form>
    </div>
  );
}
