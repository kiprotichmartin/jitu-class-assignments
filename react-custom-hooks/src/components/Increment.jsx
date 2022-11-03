// import { useEffect } from "react";
import useAddOrMinus from "./useAddOrMinus";

export default function AddOne() {

  const [countUp] = useAddOrMinus(1);

  return (
    <div>
      <h1>Your positive count is: {countUp}</h1>
    </div>
  );
}
