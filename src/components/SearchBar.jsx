import { useState } from "react";

export default function SearchBar({ onSearch }) {
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
    <form className="search-bar" onSubmit={handleSubmit}>
      <input
        type="text"
        maxLength={1}
        placeholder="Busca por la primera letra..."
        value={letter}
        onChange={(e) => setLetter(e.target.value.toLowerCase())}
      />
      <button type="submit">Buscar</button>
    </form>
  );
}
