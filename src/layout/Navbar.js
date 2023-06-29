import React from "react";
import { Link } from "react-router-dom";

export default function () {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            MovieApp
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* WORK IN PROGRESS!!!! */}

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search Movie Name"
              aria-label="Search"
            />
            <button className="btn btn-warning" type="submit">
              Search
            </button>
          </form>

          {/* WORK IN PROGRESS!!!! */}
          <Link className="btn btn-outline-light" to="/addmovie">
            Add Movie
          </Link>
        </div>
      </nav>
    </div>
  );
}
