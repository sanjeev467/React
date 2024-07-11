// State Initializer Functions

import { useState } from "react";
function generateGameBoard() {
  console.log("Making the initial board");
  return Array(5000); // this will return array of 5000 elements
}

export default function Dumbo() {
  // so now i can now pass the function generateGameBoard as a initial value to the useState like
  const [board, setBoard] = useState(generateGameBoard());
  // here board which is initial value has been set to the function generateGameBoard
  // now here in useState(generateGameBoard()) if we use generateGameBoard() this fun with brackest this will run everytime when my component renders
  // so to avoid this we use only fun name as initializer which is generateGameBoard dont use () and will run only once

  return (
    <div>
      <button onClick={() => setBoard("Hello!!")}>
        click me to change state
      </button>
    </div>
  );
}
