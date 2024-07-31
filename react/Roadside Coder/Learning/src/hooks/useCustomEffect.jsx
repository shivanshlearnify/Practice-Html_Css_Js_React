import { useRef } from "react";

const useCustomEffect = (effectCB, dependcies) => {
  const isFirstRender = useRef(true);
  const prevDeps = useRef([]);

  // First Render
  if (isFirstRender.current) {
    isFirstRender.current = false;
    effectCB();
    return;
  }

  // Dependency change and dependency array

  const depsChange = dependcies
    ? JSON.stringify(dependcies) != JSON.stringify(prevDeps.current)
    : true;

  if (depsChange) {
    effectCB();
  }
  prevDeps.current = dependcies || [];
};

export default useCustomEffect;
