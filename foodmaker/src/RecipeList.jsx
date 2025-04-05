import React from 'react';

const RecipeList = ({ recipes }) => {
    return (
        <div className="recipe-grid">
            {recipes.map((recipe) => (
                <div key={recipe.id} className="recipe-card">
                    <img src={recipe.image} alt={recipe.title} className="recipe-image" />
                    <h3 className="recipe-title">{recipe.title}</h3>
                    <a
                        href={`https://spoonacular.com/recipes/${recipe.title}-${recipe.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="recipe-link"
                    >
                        View Recipe →
                    </a>
                </div>
            ))}
        </div>
    );
};

export default RecipeList;
