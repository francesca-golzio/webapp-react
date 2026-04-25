import { useEffect } from "react";
/* import context */
import { useMovies } from "../context/MoviesContext";
/* import loader */
import Loader from "../components/Loader";

export default function MovieReviewCard() {

  /* Destructure from context */
  const { details, loading, setLoading } = useMovies();

  /* Check if details are available */
  useEffect(() => {
    if (!details) setLoading(true);
    else setLoading(false);
  }, [details])

  /* ❌ IF it is not then the loading=true; we show the loader */
  if (loading || !details) return <Loader />;

  /* ✅ IF it is, then loading=false; we show the content 👇 */

  /* Destructuring details about the book */
  let { reviews = [] } = details;

  return (
    <>
      {/* Cycle on the reviews and print those ones referring to the current book */}
      {reviews?.map((review) => {
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
      })}
    </>
  )
}