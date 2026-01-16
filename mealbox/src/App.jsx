// src/App.jsx 
// ------------------------------------------------------
// Purpose:
//  - Defines all routes in the application using React Router.
//  - Renders the Navbar globally.
//  - Loads the correct page component based on the route.
// ------------------------------------------------------

import { Routes, Route } from "react-router-dom";

// Shared navigation bar shown on every page
import Navbar from "./components/Navbar";

// Page components
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import RecipeDetailPage from "./pages/RecipeDetailPage";
import FavoritesPage from "./pages/FavoritesPage";
import SearchResultsPage from "./pages/SearchResultsPage";

export default function App() {
  return (
    <div className="app">
      {/* Navbar displayed globally at the top */}
      <Navbar />

      {/* Routed page content appears inside <main> */}
      <main className="main">
        <Routes>
          {/* Home page: shows recipe categories */}
          <Route path="/" element={<HomePage />} />

          {/* Category page: meals in a given category */}
          <Route path="/category/:categoryName" element={<CategoryPage />} />

          {/* Recipe detail page: single recipe by ID */}
          <Route path="/recipe/:recipeId" element={<RecipeDetailPage />} />

          {/* Favorites page: all favorited recipes */}
          <Route path="/favorites" element={<FavoritesPage />} />

          {/* Search page: results for ?query= in the URL */}
          <Route path="/search" element={<SearchResultsPage />} />
        </Routes>
      </main>
    </div>
  );
}
