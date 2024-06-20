import { checkValidateData } from "../utils/validate";
import Header from "./Header";
import { useRef, useState } from "react";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    //Validate

    const message = checkValidateData(
      email.current.value,
      password.current.value
    );
    setErrorMessage(message);
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bg-Img"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bg-black p-12 w-3/12 mx-auto my-36 right-0 left-0 text-white rounded-md bg-opacity-80"
      >
        <h1 className="font-bold text-4xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full name"
            className="px-2 py-4 my-4 w-full rounded-md bg-gray-800"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email or mobile number"
          className="px-2 py-4 my-4 w-full rounded-md bg-gray-800"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="px-2 py-4  my-4 w-full rounded-md bg-gray-800"
        />
        <p className="text-red-500">{errorMessage}</p>
        <button
          className="py-2 bg-red-600 w-full my-6 rounded-md"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignIn
            ? "New to Netflix? Sign up now."
            : "Already Have Account? Sign In now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
