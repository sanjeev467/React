// ----------------React Events-----------------
// we call the events inline in react
function handleClick() {
  console.log("Clicked");
}

export default function Clicker() {
  return (
    <div>
      <p>click the button</p>

      <button onClick={handleClick}>Click Me!!</button>
      {/* and we pass the function in the onClick */}
    </div>
  );
}
