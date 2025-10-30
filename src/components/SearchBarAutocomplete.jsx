import { useState, useEffect } from "react";

export default function SearchBarAutocomplete({ onSelectRecipe, onBack }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (query.length < 2) {
        setSuggestions([]);
        return;
      }

      try {
        const res = await fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${query}`);
        const data = await res.json();
        if (data.meals) {
          // filtra resultados que contengan el texto ingresado
          const filtered = data.meals.filter((meal) =>
            meal.strMeal.toLowerCase().includes(query.toLowerCase())
          );
          setSuggestions(filtered.slice(0, 5)); // máximo 5 sugerencias
        } else {
          setSuggestions([]);
        }
      } catch (error) {
        console.error("Error obteniendo sugerencias:", error);
      }
    };

    const debounce = setTimeout(fetchSuggestions, 400);
    return () => clearTimeout(debounce);
  }, [query]);

  const handleSelect = (name) => {
    setQuery(name);
    setSuggestions([]);
    onSelectRecipe(name);
  };

  return (
    <div className="search-bar autocomplete">
      <button className="back-btn" onClick={onBack}>
        ⬅ Volver
      </button>

      <div className="autocomplete-container">
        <input
          type="text"
          placeholder="Escribe al menos 2 letras..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((s) => (
              <li key={s.idMeal} onClick={() => handleSelect(s.strMeal)}>
                <img src={s.strMealThumb} alt={s.strMeal} />
                <span>{s.strMeal}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
