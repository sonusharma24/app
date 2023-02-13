import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apikey, url } from "../../common/api/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    try {
      const movieText = "batman";
      const response = await fetch(
        `${url}?apikey=${apikey}&s=${movieText}&type=movie`
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAsyncSeries = createAsyncThunk(
  "series/fetchAsyncSeries",
  async () => {
    try {
      const seriesText = "harry";
      const response = await fetch(
        `${url}?apikey=${apikey}&s=${seriesText}&type=series`
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchAsyncMoviesAndShowsDetails = createAsyncThunk(
  "movies/fetchAsyncMoviesAndShowsDetails",
  async (id) => {
    try {
      const response = await fetch(
        `${url}?apikey=${apikey}&i=${id}&plot=short`
      );
      const data = await response.json();
      console.log(data);
      return data;
    } catch (error) {
      console.log(error);
    }
  }
);

const initialState = {
  movies: {},
  series: {},
  moviesAndShowsDetails: {},
  loading: false,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state) => {
      state.moviesAndShowsDetails = {};
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAsyncMovies.pending, (state) => {
        state.loading = false;
        console.log("pending");
      })
      .addCase(fetchAsyncMovies.fulfilled, (state, action) => {
        return { ...state, loading: true, movies: action.payload };
      })
      .addCase(fetchAsyncMovies.rejected, (state) => {
        state.loading = true;
        console.log("rejected");
      });

    builder
      .addCase(fetchAsyncSeries.pending, (state) => {
        console.log("pending");
        state.loading = false;
      })
      .addCase(fetchAsyncSeries.fulfilled, (state, action) => {
        return { ...state, loading: true, series: action.payload };
      })
      .addCase(fetchAsyncSeries.rejected, (state) => {
        state.loading = true;
        console.log("rejected");
      });

    builder
      .addCase(fetchAsyncMoviesAndShowsDetails.pending, (state) => {
        state.loading = false;
        console.log("pending");
      })

      .addCase(fetchAsyncMoviesAndShowsDetails.fulfilled, (state, action) => {
        return {
          ...state,
          loading: true,
          moviesAndShowsDetails: action.payload,
        };
      })
      .addCase(fetchAsyncMoviesAndShowsDetails.rejected, (state) => {
        state.loading = true;
        console.log("rejected");
      });
  },
});

export const movieAction = movieSlice.actions;

export default movieSlice.reducer;
