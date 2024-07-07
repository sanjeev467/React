// export default function ColorList({ colors }) {
//   const lis = colors.map((color) => <li>{color}</li>);

//   return (
//     <div>
//       <p>Color List</p>
//       <ul>{lis}</ul>
//     </div>
//   );
// }

// another way to directly map inside the return statement

export default function ColorList({ colors }) {
  return (
    <div>
      <p>Color List</p>
      <ul>
        {colors.map((color) => (
          <li>{color}</li>
        ))}
      </ul>
    </div>
  );
}
