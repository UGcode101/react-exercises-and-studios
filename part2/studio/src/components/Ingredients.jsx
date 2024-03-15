import React from 'react';
import recipeData from './recipe.json'; 

const IngredientList = (props) => {
  const { ingredients } = props;

  return (
    <div>
      <h3>Ingredients</h3>
      <ul>
        {ingredients.map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
};

export default IngredientList;