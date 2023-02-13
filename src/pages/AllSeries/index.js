import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAsyncAllSeries } from "../../store/AllMoviesAndSeries/allMoviesAndSeriesSlice";
import "./style.scss";
import AllMoviesAndSeriesCard from "../../components/allMoviesAndSeriesCards/index";
import Spinner from "../../components/Spinner/Spinner";

const AllSeries = () => {
  const dispatch = useDispatch();
  const allSeriesData = useSelector((state) => state.allData.allSeries);
  const isLoading = useSelector((state) => state.allData.isLoading);
  console.log(allSeriesData.Search);

  let renderAllData = "";
  renderAllData =
    allSeriesData.Response === "True" ? (
      allSeriesData.Search.map((allData, index) => {
        return <AllMoviesAndSeriesCard key={index} data={allData} />;
      })
    ) : (
      <div className="movie-error">
        <h3>{allSeriesData.Error}</h3>
      </div>
    );

  useEffect(() => {
    dispatch(fetchAsyncAllSeries());
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

export default AllSeries;
