//conditionals

// Method 1 to create separate variable and put the result into it using ternary operator

// export default function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;
//   const result = num1 === num2 ? "You Win" : "You Lose";
//   return (
//     <div>
//       <h2>{result}</h2>
//       <p>Num 1: {num1}</p>
//       <p>Num 2: {num2}</p>
//     </div>
//   );
// }

// Method 2 to directly use ternary operator in the return statement

// export default function DoubleDice() {
//   const num1 = Math.floor(Math.random() * 3) + 1;
//   const num2 = Math.floor(Math.random() * 3) + 1;

//   return (
//     <div>
//       <h2>{num1 === num2 ? "You Win" : "You Lose"}</h2>
//       <p>Num 1: {num1}</p>
//       <p>Num 2: {num2}</p>
//     </div>
//   );
// }

// Method 3 not to write a conditional in separate element like h2 we can do following

export default function DoubleDice() {
  const num1 = Math.floor(Math.random() * 3) + 1;
  const num2 = Math.floor(Math.random() * 3) + 1;

  return (
    <div>
      {num1 === num2 ? <h2>"You Win"</h2> : null}
      <p>Num 1: {num1}</p>
      <p>Num 2: {num2}</p>
    </div>
  );
}
