import useAddOrMinus from "./useAddOrMinus";

export default function MinusOne() {
  const [countDown] = useAddOrMinus(-1);

  return (
    <div>
      <h1>Your negative count is: {countDown}</h1>
    </div>
  );
}