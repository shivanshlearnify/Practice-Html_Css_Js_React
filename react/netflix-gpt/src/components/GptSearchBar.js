import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";

const GptSearchBar = () => {
    const lan = useSelector(store=>store.configLang.lang)
  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[lan].gptSearchPlaceholder}
        />
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg">
          {lang[lan].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
