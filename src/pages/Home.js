import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

export default function Home() {
  const [movies, setMovies] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    loadMovies();
  }, []);

  const loadMovies = async () => {
    const result = await axios.get("http://localhost:6969/movies");
    setMovies(result.data);
  };

  const deleteMovies = async (id) => {
    await axios.delete(`http://localhost:6969/movie/${id}`);
    loadMovies();
  };

  return (
    <div className="container">
      <div className="py-4">
        <table className="table border shadow">
          <thead>
            <tr>
              <th scope="col">Movie Id</th>
              <th scope="col">Movie Name</th>
              <th scope="col">Movie Genre</th>
              <th scope="col">Movie Rating</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {movies.map((movie, index) => (
              <tr>
                <th scope="row" key={index}>
                  {index + 1}
                </th>
                <td>{movie.moviesName}</td>
                <td>{movie.moviesGenre}</td>
                <td>{movie.moviesRating}</td>
                <td>
                  <Link
                    className="btn btn-primary mx-2"
                    to={`/viewmovie/${movie.id}`}
                  >
                    View
                  </Link>
                  <Link
                    className="btn btn-outline-primary mx-2"
                    to={`/editmovie/${movie.id}`}
                  >
                    Edit
                  </Link>
                  <button
                    className="btn btn-danger mx-2"
                    onClick={() => deleteMovies(movie.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
