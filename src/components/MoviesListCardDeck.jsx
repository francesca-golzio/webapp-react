/* import context */
import { useMovies } from "../context/MoviesContext";
/* import components */
//import MoviesListCard from "./MoviesListCard";

export default function MoviesListCardDeck() {

  /* destructoring values from context */
  const { movies } = useMovies();

  return (
    <div className="container" key='card_deck'>
      <div className="row justify-content-evenly my-3">
        {
          /* cycle inside the movies array */
          movies.map(movie => {
            const { id, title, genre, image, created_at, updated_at } = movie;
            return (
              <div className="card col-sm-12 col-md-4 col-lg-3 m-3 px-0" key={id}>
                <img className="card-img-top" src={image} />
                <div className="card-body">
                  <div className="card-title">{title}</div>
                  <div></div>
                  {/* {updated_at ? <div>{updated_at}</div> : <div>{created_at}</div>} */}
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}