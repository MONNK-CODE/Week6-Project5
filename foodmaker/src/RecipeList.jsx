import React from 'react';
import { Link } from 'react-router-dom';

const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-grid">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card">
                    <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                    <h3 className="recipe-title">{recipe.title}</h3>
                    <Link to={`/recipes/${recipe.id}`} className="recipe-link">View Details</Link>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
