import MoviesListCard from "./MoviesListCard";

export default function MoviesListCardDeck() {

  return (
    <>
      <div className="container">
        <div className="row">
          Here will be feched, cycled and returned as a card the details from each movie on the list
          <div className="col-sm-6 col-md-4 col-lg-3 p-4">
            <MoviesListCard />
          </div>
        </div>
      </div>
    </>
  )
}