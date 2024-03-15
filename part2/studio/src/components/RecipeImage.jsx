import React from 'react';
import recipeData from './recipe.json'; 
import './styling.css'; 

const RecipeImage = (props) => {
  const { imageUrl, name } = props;

  return (
    <div>
      <img src={imageUrl} alt={name} className="recipeImage" />
    </div>
  );
};

export default RecipeImage;

 //import json file for the data
 //apply css for className recipeImage
 