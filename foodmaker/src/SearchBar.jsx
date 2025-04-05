import React from 'react';

const SearchBar = ({ setSearchQuery }) => {
    return (
        <input
            type="text"
            placeholder="Search recipes..."
            onChange={(e) => setSearchQuery(e.target.value)}
        />
    );
};

export default SearchBar;
