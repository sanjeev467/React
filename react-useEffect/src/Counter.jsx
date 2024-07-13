import { useState, useEffect } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(
    function myEffect() {
      console.log("Myeffect was called");
    },
    [count] // whaen i added count here this means function myeffect only be called when count will change
  );

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+1</button>
      <p>name {name}</p>
      <input type="text" value={name} onChange={handleChange} />
    </div>
  );
}
