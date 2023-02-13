import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieAction } from "../../store/movieSlice/MovieSlice";
import "./style.scss";
import { FaStar } from "react-icons/fa";
import { FaThumbsUp } from "react-icons/fa";
import { MdMovie } from "react-icons/md";
import { FaRegCalendarCheck } from "react-icons/fa";
import { fetchAsyncMoviesAndShowsDetails } from "../../store/movieSlice/MovieSlice";
import Spinner from "../../components/Spinner/Spinner";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const dispatch = useDispatch();

  const loading = useSelector((state) => state.movie.loading);
  const movieAndShowDetails = useSelector(
    (state) => state.movie.moviesAndShowsDetails
  );
  useEffect(() => {
    dispatch(fetchAsyncMoviesAndShowsDetails(imdbID));
    return () => {
      dispatch(movieAction.removeSelectedMovieOrShow());
    };
  }, [dispatch, imdbID]);

  return (
    <div className="movie-section">
      {!loading && <Spinner />}
      {loading && (
        <>
          <div className="section-left">
            <div className="movie-title">
              <h3>{movieAndShowDetails.Title}</h3>
            </div>
            <div className="movie-rating">
              <span>
                IMDB Rating
                <FaStar color="yellow" /> : {movieAndShowDetails.imdbRating}
              </span>
              <span>
                IMDB Votes <FaThumbsUp color="white" /> :{" "}
                {movieAndShowDetails.imdbVotes}
              </span>
              <span>
                Runtime <MdMovie color="#F8F0E3" /> :{" "}
                {movieAndShowDetails.Runtime}
              </span>
              <span>
                Year <FaRegCalendarCheck color="#FFE5B4" />:{" "}
                {movieAndShowDetails.Year}
              </span>
            </div>
            <div className="movie-plot">
              <p>{movieAndShowDetails.Plot}</p>
            </div>
            <div className="movie-info">
              <div>
                <span>Director :</span>
                <span>{movieAndShowDetails.Director}</span>
              </div>
              <div>
                <span>Stars :</span>
                <span>{movieAndShowDetails.Actors}</span>
              </div>
              <div>
                <span>Generes :</span>
                <span>{movieAndShowDetails.Genre}</span>
              </div>
              <div>
                <span>Language :</span>
                <span>{movieAndShowDetails.Language}</span>
              </div>
              <div>
                <span>Awards :</span>
                <span>{movieAndShowDetails.Awards}</span>
              </div>
            </div>
          </div>
          <div className="section-right">
            <img
              src={movieAndShowDetails.Poster}
              alt={movieAndShowDetails.Title}
            />
          </div>
        </>
      )}
    </div>
  );
};

export default MovieDetails;
