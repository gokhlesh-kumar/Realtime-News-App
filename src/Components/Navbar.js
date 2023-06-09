import React from "react";
import { Link } from "react-router-dom";
// export class Navbar extends Component {
const Navbar = (props) => {
  // render() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            MonkeyNews
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" aria-current="page" to="/">
                Home
              </Link>
              <Link className="nav-link" aria-current="page" to="/business">
                Business
              </Link>
              <Link className="nav-link" aria-current="page" to="/science">
                Science
              </Link>
              <Link
                className="nav-link"
                aria-current="page"
                to="/entertainment"
              >
                Entertainment
              </Link>
              <Link className="nav-link" aria-current="page" to="/sports">
                Sports
              </Link>
              {/* <Link className="nav-link" aria-current="page" to="/technoloy">Technology</Link> */}
              <Link className="nav-link" aria-current="page" to="/health">
                Health
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
  // }
};

export default Navbar;
