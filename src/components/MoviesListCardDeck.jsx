/* import context */
import { useMovies } from "../context/MoviesContext";
/* import components */
import MoviesListCard from "./MoviesListCard";

export default function MoviesListCardDeck() {

  /* destructoring values from context */
  const { movies } = useMovies();

  return (
    <div className="container" key='card_deck'>
      <div className="row justify-content-evenly my-3">
        {
          /* cycle inside the movies array */
          <MoviesListCard />
        }
      </div>
    </div>
  )
}