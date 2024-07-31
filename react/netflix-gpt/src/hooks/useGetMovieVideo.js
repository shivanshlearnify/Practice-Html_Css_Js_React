import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constant";
import { addMovieTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const useGetMovieVideo = (movieId) => {
    const dispatch = useDispatch();
    const getMovieVideos = async () => {
      const url = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US'`;
      try {
        const response = await fetch(url, API_OPTION);
        const data = await response.json();
        const filterData = data?.results.filter(
          (data) => data.type === "Trailer"
        );
        const trailer = filterData.length
          ? filterData[0]
          : data?.results[0];
        dispatch(addMovieTrailer(trailer));
      } catch (error) {
        console.log(error);
      }
    };
    useEffect(() => {
      getMovieVideos();
    }, []);
  };
  
  export default useGetMovieVideo;
  