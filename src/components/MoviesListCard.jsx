/* import context */
import { useMovies } from '../src/context/MoviesContext';

export default function MoviesListCard() {
/* destructoring values from context */
  const { movies } = useMovies();

  movies.map

  return (
    <div className="card text-start">
      <img className="card-img-top" src={cover_image} />
      <div>Here will go the movie details</div>
    </div>
  )
}