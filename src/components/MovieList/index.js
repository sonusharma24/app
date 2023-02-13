import React from "react";
import { useSelector } from "react-redux";
import MovieCard from "../MovieCards/index";
import "../../components/MovieList/style.scss";
import { Link } from "react-router-dom";

const MovieList = () => {
  const movieArr = useSelector((state) => state.movie.movies);
  const seriesArr = useSelector((state) => state.movie.series);
  let renderMovies = "";
  renderMovies =
    movieArr.Response === "True" ? (
      movieArr.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movie-error">
        <h3>{movieArr.Error}</h3>
      </div>
    );

  let renderSeries = "";
  renderSeries =
    seriesArr.Response === "True" ? (
      seriesArr.Search.map((series, index) => {
        return <MovieCard key={index} data={series} />;
      })
    ) : (
      <div className="movie-error">
        <h3>{movieArr.Error}</h3>
      </div>
    );

  return (
    <div className="list-wrapper">
      <div className="movie-list">
        <Link to={"/allmovies"}>
          <h2>All Movies</h2>
        </Link>
        <div className="movies-container">{renderMovies}</div>
      </div>
      <div className="series-list">
        <Link to={"/allseries"}>
          <h2>All Series</h2>
        </Link>
        <div className="series-container">{renderSeries}</div>
      </div>
    </div>
  );
};

export default MovieList;
