import { configureStore } from "@reduxjs/toolkit";
import movieReducer from "./movieSlice/MovieSlice";
import allMoviesAndSeriesReducer from "../store/AllMoviesAndSeries/allMoviesAndSeriesSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    allData: allMoviesAndSeriesReducer,
  },
});
