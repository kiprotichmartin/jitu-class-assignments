/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

export default function useAddOrMinus(initialState) {
  const [state, setState] = useState(0);

  const changeStateVar = () => {
    initialState > 0 ? setState(state + 1) : setState(state - 1);
  };

  // let plusOne =()=> setState(state + 1);
  // let minusOne=() => setState(state - 1);

  useEffect(() => {
    const interval = setInterval(() => {
      // plusOne();
      // minusOne();
      changeStateVar();
    }, 1000);

    return () => clearInterval(interval); // cleanup return method
  });

  return [state];
}
