import { useCallback, useMemo, useState } from "react";

const UseMemoAndCallbackHook = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const sqrt = () => {
    console.log("expensive calculation....",counter2);
    return counter * counter;
  };
//   const squareddvalueuseMemo = useMemo(sqrt, [counter]);
  const squareddvalueuseCallback = useCallback(sqrt, [counter]);
  return (
    <div>
      <h3>UseMemo And UseCallback Hook</h3>
      <h5>Question 1 : What is useMemo Hook in react</h5>
      {/*
        - It is a hook used to memoize the result of a function and cache it, recalculating 
        it only if the dependencies change.
        - It return a memomized value
    */}
      <h2>Counter: {counter}</h2>
      {/* <h2>Squared Counter: {squareddvalueuseMemo}</h2> */}
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      <h2>Counter 2 : {counter2}</h2>
      <button onClick={() => setCounter2(counter2 - 1)}>decrement</button>

      <h5>When should we useMemo hook</h5>
      {/* 
        - When computing a value is expensive or time-consuming.
        - When you want to prevent unnecessary re-computation of values across re-renders.
    */}
      <h5>Question 3: How does useMemo differ from useState?</h5>
      {/* 
      useMemo memoizes a computed value and returns the cached value without causing re-renders,
      while useState manages state and triggers re-renders when the state changes.
    */}
      <h5>
        Question 4: What is useCallback in React? How is it diffrent from
        useMemo ?
      </h5>
      {/* 
        It is hook used to memoize a provided callback function, returning the memoized version
        of the function.
    */}
      <h2>square counter : {squareddvalueuseCallback()}</h2>

      <h5>
        Question 5: What happens when you use useCallback with empty
        dependencies?
      </h5>
      {/* 
        It will return the same memoized function on every render, which might be useful 
        for performance optimization.
    */}
    <h5>Question 6: When should u not use useCallback or useMemo?</h5>
      {/* 
        - Event Handlers or Inline Functions
        - Excessive Memory Consumption
        - Garbage Collection Concerns
      */}
   

    </div>
  );
};

export default UseMemoAndCallbackHook;
