/* import context */
import { useMovies } from "../context/MoviesContext";
/* import hooks */
import { useState } from "react";
import { useParams } from "react-router-dom";
/* import components  */
import Loader from "../components/Loader";

export default function MovieAddReview() {
  /* Destructure from context */
  const { loading, setLoading } = useMovies();

  /* Destructure the dynamic id parameter from the URL usinguseParams() */
  const { id } = useParams();

  /* initial form data */
  const initialFormData = {
    movie_id: id,
    name: '',
    vote: 5,
    text: ''
  };
  /* new review state and setter */
  const [formData, setFormData] = useState(initialFormData);

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    /* AJAX call in order to save it inside the database */
    const moviesAPI = (import.meta.env.VITE_MOVIES_API) // + /{id} + '/reviews'

    fetch(moviesAPI + '/' + id + '/review', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(data => {
        setFormData(data);
      })
      .catch(err => console.error('Error saving review', err))
      .finally(() => setLoading(false));
  }

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <>
      <section id="review_form_section">
        <div className="container mf-0 " id="review_form_container">
          <form className="row g-3" id="review_form" onSubmit={handleSubmit}>

            <div className="d-flex gap-4">

              <div className="input-group mb-2" id="username_field">
                <span className="input-group-text">
                  <i className="bi bi-person-circle" id="usernameLabel"></i>
                </span>
                {/* (user) name */}
                <input
                  type="text"
                  className="form-control"
                  placeholder="Your username here"
                  aria-label="Username"
                  name="name"
                  value={formData.name}
                  onChange={handleChange} />
              </div>

              <div className="input-group mb-2" id="review_vote_field">
                <div htmlFor="vote" className="d-flex m-0 justify-content-evenly" id="voteLabel">
                  Share your thoughts! <i className="bi bi-stars"></i>
                  <output htmlFor="vote" id="voteValue" aria-hidden="true">  {formData.vote}</output>
                </div>
                <input
                  type="range"
                  className="form-range"
                  min="0"
                  max="10"
                  name="vote"
                  value={formData.vote} id="vote"
                  onChange={handleChange} />
              </div>

            </div>

            <div className="input-group">
              <span className="input-group-text" id="reviewLabel">
                <i className="bi bi-chat-heart-fill"></i>
              </span>
              {/* review text */}
              <textarea
                className="form-control"
                placeholder="Your opinion here"
                aria-label="Review text"
                id="review_field"
                name="text"
                value={formData.text}
                onChange={handleChange}>
              </textarea>
              {/* submit button */}
              <button className="btn btn-warning" type="submit">
                <i className="bi-send-plus"></i>
              </button>
            </div>

          </form>

          <div className="form_alert">
            {(loading) ? <Loader /> : null}
          </div>
        </div >
      </section >
    </>
  )
}