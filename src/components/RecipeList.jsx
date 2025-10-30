import RecipeCard from "./RecipeCard";

export default function RecipeList({ recipes }) {
  if (recipes.length === 0) {
    return <p className="no-results">No hay recetas para mostrar.</p>;
  }

  return (
    <div className="recipe-list">
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.idMeal} recipe={recipe} />
      ))}
    </div>
  );
}
