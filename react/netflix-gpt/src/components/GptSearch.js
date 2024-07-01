import { LOGIN_BG } from "../utils/constant";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={LOGIN_BG}
          alt="bg-Img"
        />
      </div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};
export default GptSearch;
