import { useState, useEffect } from "react"; 
/* get params (eg., movie id) from URL */
import { useParams } from "react-router-dom";

import { useMovies } from "../context/MoviesContext";

export default function MovieReviewCard() {
  /* Destructure the dynamic id parameter from the URL usinguseParams() */
  const { id } = useParams();
  const { details } = useMovies();


  /* const [loading, setLoading] = useState(true); */ // @todo ⚠️
  /* if (loading) { // @todo ⚠️
    console.log('loading');
    return <p>Loading</p>
  } */

  /* Destructuring details about the book */
  let { title, director, genre, release_year, abstract, image, reviews = [] } = details;

  return(
    <>
      {
        reviews?.map((review) => {
          const { movie_id, name, vote, text } = review;
          return (

            <div className="card text-start w100 m-4" key={movie_id + name}>
              <div className="card-header">Review by <span>{name}</span></div>
              <div className="card-body">
                <p className="card-text text-right">{vote}</p>
                <p className="card-text">{text}</p>
              </div>
            </div >
          )
        })
      }
    </>
  )
}