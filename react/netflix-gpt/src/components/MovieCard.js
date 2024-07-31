import { IMG_CDN_URL } from "../utils/constant";

const MovieCard = ({ movies }) => {
  const { poster_path } = movies;
  return (
    <div className="w-48 pr-4">
      <img src={IMG_CDN_URL + poster_path} alt="Movie card" />
    </div>
  );
};

export default MovieCard;
