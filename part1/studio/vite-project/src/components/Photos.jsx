import React from 'react';
import styles from './Description.module.css'; // Adjust the path as necessary

function RecipePhoto() {
  const photoUrl = "https://honest-food.net/wp-content/uploads/2020/08/ground-pork-stir-fry-1200-500x500.jpg";

  return (
    <img src={photoUrl} alt="recipe photo" className={styles.imageUpdates} />
  );
}

export default RecipePhoto;