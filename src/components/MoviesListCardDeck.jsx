/* import context */
import { useMovies } from '../src/context/MoviesContext';
/* import components */
import MoviesListCard from "./MoviesListCard";

export default function MoviesListCardDeck() {

  /* destructoring values from context */
  const { movies } = useMovies();

  return (
    <>
      <div className="container">
        <div className="row">
          {
            /* Here the details from each movie on the list will be cycled and returned as a movie card */
            function printMovieCards(movies) {

              /* cycle inside the movies array */
              movies.map(movie => {

                return (
                  /* return and print a list of movie cards */
                  <div className="col-sm-6 col-md-4 col-lg-3 p-4">
                    <MoviesListCard />
                  </div>
                )
              })
            }



          }
        </div>
      </div>
    </>
  )
}