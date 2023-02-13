import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";

const AllMoviesAndSeriesCard = ({ data }) => {
  return (
    <div className="card-container">
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-top_container">
          <img src={data.Poster} alt="" />
        </div>
        <div className="card-bottom_container">
          <h4>{data.Title}</h4>
          <p>Year : {data.Year}</p>
        </div>
      </Link>
    </div>
  );
};

export default AllMoviesAndSeriesCard;
