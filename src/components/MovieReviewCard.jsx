import { useState, useEffect } from "react"; 
/* get movie id from URL */
import { useParams } from "react-router-dom";

export default function MovieReviewCard() {
  /* Destructure the dynamic id parameter from the URL usinguseParams() */
  const { id } = useParams();
  /* Movie details state and setter */
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);

  /* Movies details fetch */
  const movieDetailsAPI = (import.meta.env.VITE_MOVIE_DETAIL_API) // + /{id}

  useEffect(() => {
    fetch(movieDetailsAPI + '/' + id)
      .then(res => res.json())
      .then(data => setDetails(data))
      .catch(err => console.error())
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    console.log('loading');
    return <p>Loading</p>
  }

  /* Destructuring datas about the book */
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