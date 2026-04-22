import MoviesListCardDeck from "../components/MoviesListCardDeck";

export default function MoviesHome() {

  return (
    <>
      {/* Jumbotron */}
      <div className="container-fluid p-5 bg-warning">
        <h2 className="display-5 fw-bold">Welcome to Movies Reviews!</h2>
        <p className="fs-4 text-muted">
          This is a simple React app to review movies. You can find the list of movies below in the page and click on each movie to see its details and reviews. On the movie details page you can also add your own review.
        </p>
        <h3>What are you waiting for? <br />Go and share the <i className="bi bi-heart-fill"></i> for movies!</h3>
      </div>
      <MoviesListCardDeck />
    </>
  )
}