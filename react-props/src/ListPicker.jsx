export default function ListPicker({ values }) {
  const randIndx = Math.floor(Math.random() * values.length);
  const randElm = values[randIndx];
  return (
    // for array
    // <div>
    //   <p>The Values are: {values}</p>
    //   <p>Random Element is: {randElm}</p>
    // </div>

    //for objects

    <div>
      <p>The Values are: {values[a]}</p>
    </div>
  );
}
