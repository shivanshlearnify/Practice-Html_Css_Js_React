import { useSelector } from "react-redux";
import useGetMovieVideo from "../hooks/useGetMovieVideo";

const VideoBackground = ({ movieId }) => {
  const trailer = useSelector((store) => store.movies?.movietrailer);
  useGetMovieVideo(movieId);
  return (
    <div className="w-screen">
      <iframe
        className="w-screen aspect-video"
        src={`https://www.youtube.com/embed/${trailer?.key}?&autoplay=1&mute=1`}

        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
