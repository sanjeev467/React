import { useState } from "react";

export default function UpdateCount() {
  const [count, setCount] = useState(0);

  const handleButton = () => {
    setCount((prevCount) => {
      return prevCount + 1;
    });
  };

  return (
    <div>
      <p>count: {count}</p>
      <button onClick={handleButton}>+1</button>
    </div>
  );
}
