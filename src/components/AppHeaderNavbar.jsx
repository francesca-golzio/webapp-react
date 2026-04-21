export default function AppHeaderNavbar() {

  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">Movies Reviews</a>
          <button className="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="collapsibleNavId">
            <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <a className="nav-link active" href="#" aria-current="page"><i className="bi bi-house-fill"></i> Home
                  <span className="visually-hidden">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#"><i className="bi bi-person-fill-lock"></i> Admin</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>      
    </div>
  )
}