import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apikey, url } from "../../common/api/movieApi";

export const fetchAsyncAllMovies = createAsyncThunk(
  "allMovies/fetchAsyncAllSeries",
  async () => {
    const search = "superman";
    try {
      const fetchAllData = await fetch(
        `${url}?apiKey=${apikey}&s=${search}&type=movie`
      );

      const data = await fetchAllData.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);
export const fetchAsyncAllSeries = createAsyncThunk(
  "allSeries/fetchAsyncAllSeries",
  async () => {
    const search = "superman";
    try {
      const fetchAllData = await fetch(
        `${url}?apiKey=${apikey}&s=${search}&type=series`
      );

      const data = await fetchAllData.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  allMovies: {},
  allSeries: {},
  isLoading: false,
};

const allMoviesAndSeriesSlice = createSlice({
  name: "allMoviesAndSeries",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncAllMovies.pending, (state) => {
        state.isLoading = false;
        console.log("pending");
      })
      .addCase(fetchAsyncAllMovies.fulfilled, (state, action) => {
        console.log("fullfilled");
        return { ...state, isLoading: true, allMovies: action.payload };
      })
      .addCase(fetchAsyncAllMovies.rejected, (state) => {
        state.isLoading = false;
        console.log("rejeted");
      });

    builder
      .addCase(fetchAsyncAllSeries.pending, (state) => {
        state.isLoading = false;
        console.log("pending");
      })
      .addCase(fetchAsyncAllSeries.fulfilled, (state, action) => {
        console.log("fullfilled");
        return { ...state, isLoading: true, allSeries: action.payload };
      })
      .addCase(fetchAsyncAllSeries.rejected, (state) => {
        state.isLoading = false;
        console.log("rejeted");
      });
  },
});

export const allMoviesAndSeriesAction = allMoviesAndSeriesSlice.actions;
export default allMoviesAndSeriesSlice.reducer;
