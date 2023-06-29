import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ViewMovie() {
  const [movie, setMovie] = useState({
    moviesName: "",
    moviesGenre: "",
    moviesRating: "",
  });

  const { id} = useParams();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const result = await axios.get(`http://localhost:6969/movie/${id}`);
    setMovie(result.data);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Movie Details</h2>

          <div className="card">
            <div className="card-header">
              Details of Movie ID : {movie.id}
              <ul className="list-group list-group-flush">
                <li className="list-group-item m-2">
                  <b>Movie Name: </b>
                  {movie.moviesName}
                </li>
                <li className="list-group-item m-2">
                  <b>Movie Genre: </b>
                  {movie.moviesGenre}
                </li>
                <li className="list-group-item m-2">
                  <b>Movie Rating: </b>
                  {movie.moviesRating}
                </li>
              </ul>
            </div>
          </div>
          <Link className="btn btn-primary my-2" to={"/"}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
