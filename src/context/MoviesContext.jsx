import { createContext } from "react";
import { useState, useEffect } from 'react'

const MoviesContext = createContext();
const movieListAPI = import.meta.env.VITE_MOVIE_LIST_API

function MoviesProvider({ children }) {
  /* qui quello che vogliamo condividere */
  const [movies, setMovies] = useState([]);
  fetch(movieListAPI)
    .then(res => res.json())
    .then(data => {
      setMovies(...movies, data);
      return movies;
    })

  return (
    <MoviesProvider
      value={{
        /* qui i valori da condividere */
        movies
      }}>

    </MoviesProvider>
  )
}

function useMovies() {
  const context = useContext(MoviesContext);
  return context;
}

export { MoviesProvider, useMovies };