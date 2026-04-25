import { useState } from "react";

export default function MovieAddReview() {

  const [vote, setVote] = useState(5);

  function handleVote(e) {
    setVote(e.target.value);
  }


  return (
    <>
      <section id="review_form_section">
        <div className="container mf-0 " id="review_form_container">
          <form className="row g-3" id="review_form">

            <div className="d-flex gap-4">

              <div className="input-group mb-2" id="username_field">
                <span className="input-group-text"><i className="bi bi-person-circle" id="usernameLabel"></i></span>
                <input type="text" className="form-control" placeholder="Your username here" aria-label="Username" />
              </div>

              <div className="input-group mb-2" id="review_vote_field">
                <div htmlFor="vote" className="d-flex m-0 justify-content-evenly" id="voteLabel">
                  Share your thoughts!
                  <i className="bi bi-stars"></i>
                  <output htmlFor="vote" id="voteValue" aria-hidden="true">  {vote}</output>
                </div>
                <input type="range" className="form-range" min="0" max="10" value={vote} id="vote" onChange={handleVote} />
              </div>

            </div>

            <div className="input-group">
              <span className="input-group-text" id="reviewLabel"><i className="bi bi-chat-heart-fill"></i></span>
              <textarea className="form-control" placeholder="Your opinion here" aria-label="Review text" id="review_field"></textarea>
              <span className="btn btn-warning" type="submit"><i className="bi-send-plus"></i></span>
            </div>

          </form>
        </div >
      </section >
    </>
  )
}