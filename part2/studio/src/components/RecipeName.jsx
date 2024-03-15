import React from 'react';
import recipeData from "./recipe.json";
import './styling.css'; 

const RecipeName = (props) => {
  const { name } = props;

  return <h1>{name}</h1>;
};

export default RecipeName;

//import return the name of the recipe as a level 1 header