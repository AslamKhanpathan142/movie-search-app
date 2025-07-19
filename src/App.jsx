import React, { useState, useEffect } from "react";
import MovieNavbar from "./components/MovieNavbar.jsx";
import MovieFooter from "./components/MovieFooter.jsx";
import { Outlet } from "react-router-dom";
import {Toaster, toast} from "react-hot-toast";
function App() {
  const [searchTerm, setSearchTerm] = useState("ironman");
  const [searchResults, setSearchResults] = useState([]);
  const [addFavorite, setAddFavorite] = useState([]);

  const handleAddFavorite = (evt, movie) => {
    evt.preventDefault();
    // Check if the movie is already in favorites
    const isFavorite = addFavorite.some((item) => item.imdbID === movie.imdbID);
    if (isFavorite) {
      toast.error("Movie is already in favorites!");
      return;
    }
    // If not, add the movie to favorites
    let newAddFavorite = [...addFavorite, movie];
    setAddFavorite(newAddFavorite);
    toast.success("Movie added to favorites!");
  };
  
  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    getMovie();
    setSearchTerm("");
  };

  const handleRemoveFavorite = (evt, movie) => {
    evt.preventDefault();
    const newAddFavorite = addFavorite.filter((item) => item.imdbID !== movie.imdbID);
    setAddFavorite(newAddFavorite);
    toast.success("Movie removed from favorites!");
  }

  // Example API URL
// https://www.omdbapi.com/?s=${searchTerm}&apikey=YOUR_API_KEY_HERE
 const url = `https://www.omdbapi.com/?s=${searchTerm}&apikey=YOUR_API_KEY_HERE`;


  const getMovie = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setSearchResults(data.Search || []);
  };

  useEffect(() => {
    getMovie();
  }, []);
  return (
    <>
      <Toaster position="top-center" reverseOrder={false} />
      <MovieNavbar
        handleSearchSubmit={handleSearchSubmit}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      ></MovieNavbar>

      <Outlet
        context={{
          searchTerm,
          handleSearchChange,
          handleSearchSubmit,
          searchResults,
          handleAddFavorite,
          addFavorite,
          handleRemoveFavorite
        }}
      ></Outlet>

      <MovieFooter></MovieFooter>
    </>
  );
}

export default App;
