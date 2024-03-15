import React from 'react';
import recipeData from './recipe.json';
import './styling.css'; 

const AuthorInfo = (props) => {
  const { author, authorImage, website } = props;

  return (
    <div>
      <img src={authorImage} alt={author} className="authorImage" />
      <div>{author}</div>
      <a href={website}>{website}</a>
    </div>
  );
};

export default AuthorInfo;
 //import styles.css
 //import json file for author info
 //image, name, website
 //css for styling image
 