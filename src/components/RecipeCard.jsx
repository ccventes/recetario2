export default function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <h3>{recipe.strMeal}</h3>
      <p>{recipe.strCategory} • {recipe.strArea}</p>
      <a
        href={recipe.strSource || recipe.strYoutube}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver receta completa
      </a>
    </div>
  );
}
