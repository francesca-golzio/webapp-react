

/* import context */
import { useMovies } from "../context/MoviesContext";

export default function MoviesListCard(movie) {
  /* destructoring values from context */
  const { movies } = useMovies();

  return (
    movies.map(movie => {
      const { id, title, genre, image, created_at, updated_at } = movie;
      return (
        <div className="card col-sm-12 col-md-4 col-lg-3 m-3 px-0" key={id + (Date.toString)}>
          <img className="card-img-top" src={image} />
          <div className="card-body">
            <div className="card-title">{title}</div>
          </div>
        </div>
      )
    })
  )
}