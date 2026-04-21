import { useEffect } from "react";
import { useParams } from "react-router-dom";

export default function MovieDetails() {
  /* Destructure the dynamic id parameter from the URL usinguseParams() */
  const { id } = useParams();


  useEffect(() => {
    /* Here will go the logic to fetch movie details based on the id */
  }, []);

  return (
    <div>
      <h1>Movie Details</h1>
      <p>This is the movie number {id} details page.</p>
    </div>
  )
}