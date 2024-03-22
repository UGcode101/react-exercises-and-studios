import React from 'react';

const RecipeAuthor = ({ authorLink, authorPhoto, authorName }) => (
  <div>
    <img src={authorPhoto} alt={authorName} style={{ objectFit: "contain", borderRadius: "50%" }} />
    <div>
      <h3>{authorName}</h3>
      <a href={authorLink}>Visit Author Page</a>
    </div>
  </div>
);

const RecipeIngredients = ({ ingredients }) => (
  <div>
    <h3>Recipe Ingredients</h3>
    <ul>
      {ingredients.map((ingredient, index) => (
        <li key={index}>{ingredient}</li>
      ))}
    </ul>
  </div>
);

const RecipeDescription = ({ title, description, ingredients, author, photoUrl }) => (
  <div>
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
    <div className="recipePhotoBlock">
      <img src={photoUrl} alt="Delicious Lasagna" style={{ width: "100%", height: "auto" }} />
      <RecipeIngredients ingredients={ingredients} />
      <RecipeAuthor {...author} />
    </div>
  </div>
);

const RecipeDisplay = ({ recipe }) => (
  <div className="recipePhotoBlock">
    <RecipeDescription {...recipe} />
  </div>
);

// Below is the entry point of your component where you utilize RecipeDisplay
export default function App() {
  const lasagnaRecipe = {
    title: "Easy Homemade Lasagna",
    description: "This lasagna recipe is a cozy, comforting dinner made easy with layers of rich tomato sauce, cheese mixture, and noodles.",
    photoUrl: "https://www.spendwithpennies.com/wp-content/uploads/2022/12/1200-Lasagna-SpendWithPennies-24-1.jpeg",
    ingredients: [
      "12 lasagna noodles uncooked",
      "4 cups mozzarella cheese, shredded and divided",
      "½ cup parmesan cheese, shredded and divided",
      "½ pound lean ground beef",
      "½ pound Italian sausage",
      "1 onion, diced",
      "2 cloves garlic, minced",
      "36 ounces pasta sauce",
      "2 tablespoons tomato paste",
      "1 teaspoon Italian seasoning",
      "2 cups ricotta cheese",
      "¼ cup fresh parsley, chopped",
      "1 egg, beaten"
    ],
    author: {
      authorName: "Holly Nilson",
      authorPhoto: "https://secure.gravatar.com/avatar/fa4bdeb9d2aa6450536af2064fac2481?s=128&r=g",
      authorLink: "https://www.spendwithpennies.com/easy-homemade-lasagna/"
    }
  };

  return <RecipeDisplay recipe={lasagnaRecipe} />;
}

