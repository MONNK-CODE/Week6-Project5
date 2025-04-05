import React from 'react';
const [maxRecipes, setMaxRecipes] = useState(10);

const NumberFilter = ({ setMaxRecipes }) => {
    return (
        <div>
            <label htmlFor="max-recipes">Max recipes to display:</label>
            <input
                id="max-recipes"
                type="number"
                value={maxRecipes}
                onChange={(e) => setMaxRecipes(parseInt(e.target.value, 10))}
                min="1"
                max="30"  // assuming you fetch a max of 30 recipes
            />
        </div>
    );
};


export default Filter;
