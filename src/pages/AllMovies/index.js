import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncAllMovies } from "../../store/AllMoviesAndSeries/allMoviesAndSeriesSlice";
import "./style.scss";
import AllMoviesAndSeriesCard from "../../components/allMoviesAndSeriesCards/index";
import Spinner from "../../components/Spinner/Spinner";

const AllMovies = () => {
  const dispatch = useDispatch();
  const allMoviesAndSeriesData = useSelector(
    (state) => state.allData.allMovies
  );
  const isLoading = useSelector((state) => state.allData.isLoading);
  console.log(allMoviesAndSeriesData.Search);

  let renderAllData = "";
  renderAllData =
    allMoviesAndSeriesData.Response === "True" ? (
      allMoviesAndSeriesData.Search.map((allData, index) => {
        return <AllMoviesAndSeriesCard key={index} data={allData} />;
      })
    ) : (
      <div className="movie-error">
        <h3>{allMoviesAndSeriesData.Error}</h3>
      </div>
    );

  useEffect(() => {
    dispatch(fetchAsyncAllMovies());
  }, [dispatch]);

  // take input from search
  const inputHandler = (e) => {
    console.log(e.target.value);
  };

  return (
    <div
      className="allmovies-warapper"
      style={{ marginTop: "100px", color: "white" }}
    >
      <div className="search-warapper">
        <input type="text" onChange={inputHandler} />
      </div>
      {isLoading ? (
        <div className="allmovies-container">{renderAllData}</div>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default AllMovies;
