import React from 'react';
import "./App.css";
import recipes from './components/recipe.json'; 
import RateARecipe from "./components/RateARecipe";
import Button from "./components/Button"; 
import AuthorInfo from "./components/AuthorInfo";
import IngredientList from "./components/Ingredients";
import RecipeImage from "./components/RecipeImage";
import RecipeName from "./components/RecipeName";

export default function App() {
  const [savedRecipes, setSavedRecipes] = React.useState({});

  const toggleSave = (id) => {
    setSavedRecipes(prevState => ({
      ...prevState,
      [id]: !prevState[id]
    }));
  };

  return (
    <>
      {recipes.map((recipe) => (
        <div key={recipe.id} className="recipe-container">
          <RecipeImage imageUrl={recipe.recipeImage} />
          <RecipeName name={recipe.name} />
          <RateARecipe rating={recipe.rating} />
          <div onClick={() => toggleSave(recipe.id)}>
            <Button saveButton={!savedRecipes[recipe.id]} />
          </div>
          <AuthorInfo author={recipe.author} authorImage={recipe.authorImage} />
          <IngredientList ingredients={recipe.ingredients} />
        </div>
      ))}
    </>
  );
}
