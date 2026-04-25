import { createContext, useContext, useState, useEffect } from 'react'

const MoviesContext = createContext();

function MoviesProvider({ children }) {

  /* Movies list state and setter */
  const [movies, setMovies] = useState([]);
  /* Movie details state and setter */
  const [details, setDetails] = useState({});
  /* Loader state and setter */
  const [loading, setLoading] = useState(true);

  const movieListAPI = import.meta.env.VITE_MOVIES_LIST_API
  /* Movies list fetch */
  useEffect(() => {
    fetch(movieListAPI)
      .then(res => res.json())
      .then(data => setMovies(data))
      .catch(err => console.log(err))
  }, []);


  return (
    <MoviesContext.Provider
      value={{ movies, details, setDetails, loading, setLoading }}>
      {children}
    </MoviesContext.Provider>
  )
}

function useMovies() {
  const context = useContext(MoviesContext);
  if (!context) {
    console.log('loading');
  }
  return context;
}

export { MoviesProvider, useMovies };