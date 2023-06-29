import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function AddMovie() {
  let navigate = useNavigate();

  const [movie, setMovie] = useState({
    moviesName: "",
    moviesGenre: "",
    moviesRating: "",
  });

  const { moviesName, moviesGenre, moviesRating } = movie;

  const onInputChange = (e) => {
    setMovie({ ...movie, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:6969/movie", movie);
    navigate("/");
  };

  return (
    <div className="container my-5">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Add New Movie</h2>
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="moviesName" className="form-label">
                Movie Name
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Movie Name"
                name="moviesName"
                value={moviesName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="moviesGenre" className="form-label">
                Movie Genre
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Movie Genre"
                name="moviesGenre"
                value={moviesGenre}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="moviesRating" className="form-label">
                Movie Rating
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Movie Rating"
                name="moviesRating"
                value={moviesRating}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <button className="btn btn-success" type="submit">
              Submit
            </button>
            <Link className="btn btn-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}
