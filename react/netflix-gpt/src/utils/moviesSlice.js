import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    movietrailer: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movietrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addPopularMovies, addMovieTrailer } =
  movieSlice.actions;

export default movieSlice.reducer;
