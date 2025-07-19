import React from "react";
import MovieSearch from "./MovieSearch";
import MovieCard from "./MovieCard";
import { useOutletContext } from "react-router-dom";

function Home() {
  const {searchTerm, handleSearchChange, handleSearchSubmit,searchResults,handleAddFavorite} = useOutletContext();
  return (
    <>
      <MovieSearch
        handleSearchSubmit={handleSearchSubmit}
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
      ></MovieSearch>

      <MovieCard searchResults={searchResults} searchTerm={searchTerm} handleAddFavorite={handleAddFavorite}></MovieCard>
    </>
  );
}

export default Home;
