import { createContext, useContext, useState, useEffect } from 'react'

const MoviesContext = createContext();
const movieListAPI = import.meta.env.VITE_MOVIE_LIST_API

function MoviesProvider({ children }) {
  /* qui quello che vogliamo condividere */
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(movieListAPI)
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.log(err))
  }, []);

  return (
    <MoviesContext.Provider
      value={{ movies }}>
      {children}
    </MoviesContext.Provider>
  )
}

function useMovies() {
  const context = useContext(MoviesContext);
  if(!context) {
    console.log('loading');    
  }
  return context;
}

export { MoviesProvider, useMovies };