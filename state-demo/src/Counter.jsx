import { useState } from "react";
export default function Counter() {
  const [count, setCount] = useState(0);
  const increaseCount = () => {
    // setting state with an updater function
    // this is the correct way to update the state when state depend on the old versions
    // this is a call back format
    // the fun (currCOunt) => currCOunt + 1, need to have a single parameter which represents the
    // the current value of piece of state in this ex piece of state is count ehich is set to 0,  const [count, setCount] = useState(0);
    // the value of currCount will be filled by react automatically whichever the piece of state is like count is 0
    setCount((currCount) => currCount + 1);
  };
  return (
    <div>
      <p>count = {count}</p>
      <button onClick={increaseCount}>+1</button>
    </div>
  );
}
