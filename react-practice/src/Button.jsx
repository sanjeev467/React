import { useState } from "react";

export default function Button() {
  const [display, setDisplay] = useState("");
  const handleButton = () => {
    setDisplay((prevState) => {
      return "hello!";
    });
  };
  return (
    <div>
      <h2>{display}</h2>
      <button onClick={handleButton}>Say Hello!!</button>
    </div>
  );
}
