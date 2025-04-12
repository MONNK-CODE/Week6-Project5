import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import RecipeDetail from './RecipeDetail';
import './App.css';

function App() {
    return (
        <div className="container">
            <h1>Recipe Dashboard</h1>
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/recipes/:id" element={<RecipeDetail />} />
            </Routes>
        </div>
    );
}

export default App;
