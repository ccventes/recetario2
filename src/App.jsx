import { useState } from "react";
import SearchBarLetter from "./components/SearchBarLetter";
import SearchBarName from "./components/SearchBarName";
import SearchBarAutocomplete from "./components/SearchBarAutocomplete";
import RecipeList from "./components/RecipeList";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [activeSearch, setActiveSearch] = useState(null);

  const fetchRecipes = async (endpoint) => {
    try {
      const res = await fetch(endpoint);
      const data = await res.json();
      setRecipes(data.meals || []);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    }
  };

  return (
    <div className="app-container">
      <h1>CookEasy 🍳</h1>

      {/* Selector principal */}
      {!activeSearch && (
        <div className="search-selector">
          <p>elige un modo de búsqueda:</p>
          <button onClick={() => setActiveSearch("letter")}>🔤 Por letra</button>
          <button onClick={() => setActiveSearch("name")}>📝 Por nombre</button>
          <button onClick={() => setActiveSearch("autocomplete")}>⚡ Autocompletar</button>
        </div>
      )}

      {activeSearch === "letter" && (
        <SearchBarLetter
          onSearch={(letter) =>
            fetchRecipes(`https://themealdb.com/api/json/v1/1/search.php?f=${letter}`)
          }
          onBack={() => setActiveSearch(null)}
        />
      )}

      {activeSearch === "name" && (
        <SearchBarName
          onSearch={(name) =>
            fetchRecipes(`https://themealdb.com/api/json/v1/1/search.php?s=${name}`)
          }
          onBack={() => setActiveSearch(null)}
        />
      )}

      {activeSearch === "autocomplete" && (
        <SearchBarAutocomplete
          onSelectRecipe={(recipeName) =>
            fetchRecipes(`https://themealdb.com/api/json/v1/1/search.php?s=${recipeName}`)
          }
          onBack={() => setActiveSearch(null)}
        />
      )}

      <RecipeList recipes={recipes} />
    </div>
  );
}

export default App;
