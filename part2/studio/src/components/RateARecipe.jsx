import React from 'react';
import './styling.css'; 

let stars = ["⭐", "⭐ ⭐", "⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐", "⭐ ⭐ ⭐ ⭐ ⭐"];

function RateARecipe(props) {
  function GiveRating() {
    if (props.rating >= 1 && props.rating <= 5) {
      return <h3>{stars[props.rating - 1]}</h3>;
    } else {
      return null;
    }
  }
  return <GiveRating />;
}

export default RateARecipe;