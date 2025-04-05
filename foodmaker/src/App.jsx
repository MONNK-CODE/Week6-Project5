import React, { useState, useEffect } from 'react';
import RecipeList from './RecipeList';
import SearchBar from './SearchBar';
import NumberFilter from './NumberFilter';
import './App.css';

function App() {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [maxRecipes, setMaxRecipes] = useState(10); // Default number of recipes to display

    useEffect(() => {
        async function fetchRecipes() {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9ef26bdb4ef848ebbbb64c78c8e4ff1a&number=30`);
            const data = await response.json();
            setRecipes(data.results);
        }
        fetchRecipes();
    }, []);

    // Filtering the recipes based on search query and max number of recipes
    const filteredRecipes = recipes
        .filter(recipe => recipe.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, maxRecipes);

    return (
        <div className="container">
            <h1>Recipe Dashboard</h1>
            <SearchBar setSearchQuery={setSearchQuery} />
            <NumberFilter maxRecipes={maxRecipes} setMaxRecipes={setMaxRecipes} />
            <RecipeList recipes={filteredRecipes} />
        </div>
    );
}

export default App;
