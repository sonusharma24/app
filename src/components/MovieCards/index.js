import React from "react";
import "../../components/MovieCards/style.scss";
import { Link } from "react-router-dom";

const MovieCard = ({ data }) => {
  return (
    <div className="card-item">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-top">
          <img src={data.Poster} alt="img" />
        </div>
        <div className="card-bottom">
          <div className="card-info">
            <h4>{data.Title}</h4>
            <p>{data.Year}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
