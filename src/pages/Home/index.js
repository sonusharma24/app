import React, { useEffect } from "react";
import MovieList from "../../components/MovieList/index";
import "../../components/MovieList/style.scss";
import {
  fetchAsyncMovies,
  fetchAsyncSeries,
} from "../../store/movieSlice/MovieSlice";
import { useDispatch, useSelector } from "react-redux";
import Spinner from "../../components/Spinner/Spinner";

const Home = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.movie.loading);

  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncSeries());
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img"></div>
      {!loading && <Spinner />}
      {loading && <MovieList />}
    </div>
  );
};

export default Home;
