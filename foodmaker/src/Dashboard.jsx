// Dashboard.jsx
import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import NumberFilter from './NumberFilter';
import RecipeList from './RecipeList';
import { Bar, Doughnut } from 'react-chartjs-2';
import 'chart.js/auto';

const Dashboard = () => {
    const [recipes, setRecipes] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [maxRecipes, setMaxRecipes] = useState(10);

    useEffect(() => {
        async function fetchRecipes() {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=9ef26bdb4ef848ebbbb64c78c8e4ff1a&number=30&addRecipeInformation=true`);
            const data = await response.json();
            setRecipes(data.results);
        }
        fetchRecipes();
    }, []);

    const filteredRecipes = recipes
        .filter(recipe => recipe.title.toLowerCase().includes(searchQuery.toLowerCase()))
        .slice(0, maxRecipes);

    const prepTimes = filteredRecipes.map(r => r.readyInMinutes);
    const servings = filteredRecipes.map(r => r.servings);
    const labels = filteredRecipes.map(r => r.title);

    return (
        <div>
            <SearchBar setSearchQuery={setSearchQuery} />
            <NumberFilter maxRecipes={maxRecipes} setMaxRecipes={setMaxRecipes} />

            {/* Bar Chart - Prep Time */}
            <div className="statistics">
                <h2>Prep Times</h2>
                <Bar
                    data={{
                        labels,
                        datasets: [{
                            label: 'Minutes',
                            data: prepTimes,
                            backgroundColor: '#3498db'
                        }]
                    }}
                />
            </div>

            {/* Doughnut Chart - Servings */}
            <div className="statistics">
                <h2>Servings</h2>
                <Doughnut
                    data={{
                        labels,
                        datasets: [{
                            label: 'Servings',
                            data: servings,
                            backgroundColor: ['#e74c3c', '#9b59b6', '#2ecc71', '#f1c40f', '#1abc9c']
                        }]
                    }}
                />
            </div>

            <RecipeList recipes={filteredRecipes} />
        </div>
    );
};

export default Dashboard;