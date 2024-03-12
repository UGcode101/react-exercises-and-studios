import React from 'react';
import styles from './Description.module.css'; 

function RecipeAuthor() {
    const authorLink = "https://honest-food.net"; 
    const authorPhoto = "https://www.twincities.com/wp-content/uploads/2015/11/20131017__131020OUTDOORS1.jpg?w=620s://honest-food.net/wp-content/uploads/2020/08/ground-pork-stir-fry-1200.jpg";
    const authorName = "Hank Shaw"; 

    return (
        <div className={styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt={`${authorName}'s photo`} className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Honest Food</a>
            </div>
        </div>
    );
}

class RecipeDescription extends React.Component {
    render() {
        return (
            <div> 
                <div>    
                    <p>Taiwanese Style Traditional Stir Fry</p>
                </div>
                <RecipeAuthor />
            </div>
        );
    }
}

export default RecipeDescription;