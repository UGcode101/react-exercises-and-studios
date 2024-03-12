import React from 'react';
import styles from './Ingredients.module.css'; 

function RecipeIngredients() {
    const ingredients = [
        "1 pound ground pork",
        "1 tablespoon soy sauce",
        "1 teaspoon white pepper",
        "2 tablespoons peanut or other cooking oil",
        "2 cloves garlic, minced"
    ];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul className={styles.ingredientList}>
                {ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
}

export default RecipeIngredients;