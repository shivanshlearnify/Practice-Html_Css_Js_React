import { useSelector } from "react-redux";
import lang from "../utils/languageConstant";
import { useRef } from "react";
import OpenAi from "../utils/OpenAi";

const GptSearchBar = () => {
  const lan = useSelector((store) => store.configLang.lang);
  const searchText = useRef(null);

  const handleGPTSearch = async () => {
    console.log(searchText.current.value);
    const gptQuery =
    "Act as a Movie Recommendation system and suggest some movies for the query : " +
    searchText.current.value +
    ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";
    console.log(gptQuery);
    const gptResult = await OpenAi.chat.completions.create({
      messages: [{ role: "system", content: gptQuery }],
      model: "gpt-3.5-turbo-1106",
    });

    console.log(gptResult.choices[0]);
  };
  return (
    <div className="pt-[15%] flex justify-center">
      <form
        className="w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          className=" p-4 m-4 col-span-9"
          placeholder={lang[lan].gptSearchPlaceholder}
        />
        <button
          className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg"
          onClick={handleGPTSearch}
        >
          {lang[lan].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
