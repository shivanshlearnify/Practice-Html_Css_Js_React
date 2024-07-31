import { useEffect, useState } from "react";
import useCustomEffect from "./hooks/useCustomEffect";
import UseMemoAndCallbackHook from "./components/UseMemoAndCallbackHook"

function App() {
  // const [count, setCount] = useState(0);
  // const [count1, setCount1] = useState(0);

  // useEffect(()=>{
  //   console.log("called effect", count);
  // },[count1])

  // console.log("rendered");

  // const handleI = () => {
  //   setCount(count + 1);
  // };
  // const handleD = () => {
  //   setCount(count - 1);
  // };

  return (
    <>
      {/* <h1>Counter : {count}</h1>
      
      <button onClick={handleI}>Increment</button>
      <button onClick={handleD}>Decrement</button> */}
      <UseMemoAndCallbackHook/>
    </>
  );
}

export default App;
