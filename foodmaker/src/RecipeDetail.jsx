// RecipeDetail.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        async function fetchRecipe() {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=9ef26bdb4ef848ebbbb64c78c8e4ff1a`);
            const data = await response.json();
            setRecipe(data);
        }
        fetchRecipe();
    }, [id]);

    if (!recipe) return <p>Loading...</p>;

    return (
        <div className="statistics">
            <h2>{recipe.title}</h2>
            <img src={recipe.image} alt={recipe.title} className="recipe-image" />
            <p><strong>Ready In:</strong> {recipe.readyInMinutes} mins</p>
            <p><strong>Servings:</strong> {recipe.servings}</p>
            <p><strong>Summary:</strong> <span dangerouslySetInnerHTML={{ __html: recipe.summary }} /></p>
            <a href={recipe.sourceUrl} target="_blank" rel="noopener noreferrer" className="recipe-link">View Full Instructions</a>
        </div>
    );
};

export default RecipeDetail;
