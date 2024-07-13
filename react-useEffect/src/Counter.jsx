import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const increment = () => {
    setCount((prevCount) => setCount(prevCount + 1));
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
}
