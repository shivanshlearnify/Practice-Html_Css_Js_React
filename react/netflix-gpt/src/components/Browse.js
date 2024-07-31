import { useSelector } from "react-redux";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import GptSearch from "./GptSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const showSearch = useSelector((store) => store.gptSearch.showGPTSearch);
  useNowPlayingMovies();
  usePopularMovies();
  return (
    <div className="">
      <Header />
      {showSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

    </div>
  );
};

export default Browse;
