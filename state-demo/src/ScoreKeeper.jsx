import { useState } from "react";
export default function ScoreKeeper() {
  const [scores, setScores] = useState({ p1score: 0, p2score: 0 });
  // we created a object for scores like scores = {p1score : 0, p2score:0};

  function increaseP1Score() {
    // in case of objects or array we use spread operator yo change the state
    // spread opr cretaes a new copy of the array or object thatswhy

    const newScore = { ...scores, p1score: scores.p1score + 1 };

    setScores((oldScores) => {
      //No, oldScores is not a copy of the scores object.
      //Instead, oldScores is the previous state value of scores passed as an argument to the function inside the state setter (setScores).
      //oldScores represents the state value of scores just before the update happens.
      //It is the exact state that was present before the state update function (setScores) was called.
      //oldScores is the state value of scores before the update.
      //For example, if scores was { p1score: 0, p2score: 0 }, then oldScores will be { p1score: 0, p2score: 0 }.
      return { ...oldScores, p1score: oldScores.p1score + 1 };
    });
  }

  function increaseP2Score() {
    setScores((oldScores) => {
      return { ...oldScores, p2score: oldScores.p2score + 1 };
    });
  }
  return (
    <div>
      <p>player 1: {scores.p1score}</p>
      <p>player 2: {scores.p2score} </p>

      <button onClick={increaseP1Score}>+1 Player 1</button>
      <button onClick={increaseP2Score}>+1 Player 2</button>
    </div>
  );
}
