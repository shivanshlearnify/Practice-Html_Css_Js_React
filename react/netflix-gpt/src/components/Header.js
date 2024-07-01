import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO, SUPPORTED_LANGUAGES } from "../utils/constant";
import { toggleGPTSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showSearch = useSelector((store) => store.gptSearch.showGPTSearch);

  const user = useSelector((store) => store.user);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.]
      })
      .catch((error) => {
        // An error happened.
        navigate("/error");
      });
  };

  const handleGPT = () => {
    dispatch(toggleGPTSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //Unsbscribe when component unmount
    return () => unSubscribe();
  }, []);

  return (
    <div className="absolute w-full bg-gradient-to-b from-black px-8 py-2 z-10 flex justify-between">
      <img className="w-44" src={LOGO} alt="Logo" />
      {user && (
        <div className="flex p-2 gap-2">
          {showSearch && (
            <select
              className="p-2 m-2 bg-gray-900 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.identifier} value={lang.identifier}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}

          <button
            onClick={handleGPT}
            className="py-2 px-4 m-2 text-white bg-purple-600 rounded-md"
          >
            {showSearch ? "Homepage" : "GPT-Search"}
          </button>
          <img
            className="w-12 h-12 rounded-lg"
            src={user?.photoURL}
            alt="avtar"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (SignOut)
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
