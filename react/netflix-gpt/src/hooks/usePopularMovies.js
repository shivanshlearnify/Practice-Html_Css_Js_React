import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import {  addPopularMovies } from "../utils/moviesSlice";

const usePopularMovies = () => {
  const dispatch = useDispatch();
  const getPopularMovies = async () => {
    const url = "https://api.themoviedb.org/3/movie/popular?page=2";

    try {
      const response = await fetch(url, API_OPTION);
      const data = await response.json();
      dispatch(addPopularMovies(data?.results));
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getPopularMovies();
  }, []);
};

export default usePopularMovies;
