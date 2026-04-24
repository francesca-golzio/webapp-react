import { useMovies } from "../context/MoviesContext";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieReviewCardDeck from "../components/MovieReviewCardDeck";

export default function MovieDetails() {
  /* Destructure the dynamic id parameter from the URL usinguseParams() */
  const { id } = useParams();
  /* destructure data from context */
  const { details, setDetails } = useMovies();

  /* Movies details fetch */
  const movieDetailsAPI = (import.meta.env.VITE_MOVIE_DETAIL_API) // + /{id}

  useEffect(() => {
    fetch(movieDetailsAPI + '/' + id)
      .then(res => res.json())
      .then(data => setDetails(data))
      .catch(err => console.error())
      .finally(() => { console.log('loading') }  /* setLoading(false) */ );
  }, [id]);

/*   if (loading) { // @todo ⚠️
    console.log('loading');
    return <p>Loading</p>
  } */

  /* Destructuring datas about the book */
  let { title, director, genre, release_year, abstract, image, reviews = [] } = details;

  return (
    <div key={id + title}>

{/* Movie details card // @todo ⚠️ */}
      <section>
        <div className="container-fluid p-5 bg-warning">
          <h1>{title}</h1>
          <p>{director}</p>
          <p>{genre}</p>
          <p>{release_year}</p>
          <p>{abstract}</p>
          <p>{image}</p>
        </div>
      </section>

      <MovieReviewCardDeck />

    </div>
  )
}