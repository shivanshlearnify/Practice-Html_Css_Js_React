import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: { nowPlayingMovies: null, movietrailer: null },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addMovieTrailer: (state, action) => {
      state.movietrailer = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addMovieTrailer } = movieSlice.actions;

export default movieSlice.reducer;
