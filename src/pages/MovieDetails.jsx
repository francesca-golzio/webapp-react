import { useEffect } from "react";
import { useParams } from "react-router-dom";
/* Import components */
import MovieReviewCardDeck from "../components/MovieReviewCardDeck";

export default function MovieDetails() {
  /* Destructure the dynamic id parameter from the URL usinguseParams() */
  const { id } = useParams();


  useEffect(() => {
    /* Here will go the logic to fetch movie details based on the id */
  }, []);

  return (
    <div>
      <section>
        <div className="container-fluid p-5 bg-warning">
          <h1>Movie {id} Details</h1>
          <p>Here will go all the movie details, but the reviews</p>
        </div>
      </section>
      <MovieReviewCardDeck />
    </div>
  )
}