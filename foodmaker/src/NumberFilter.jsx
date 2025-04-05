import React from 'react';

const NumberFilter = ({ maxRecipes, setMaxRecipes }) => {
    return (
        <div>
            <label htmlFor="max-recipes">Max recipes to display:</label>
            <input
                id="max-recipes"
                type="number"
                value={maxRecipes}
                onChange={(e) => setMaxRecipes(e.target.value ? parseInt(e.target.value, 10) : 0)}
                min="1"
                max="30"  // You can adjust this maximum based on your API limits or preferences
                className="number-input"
            />
        </div>
    );
};

export default NumberFilter;
