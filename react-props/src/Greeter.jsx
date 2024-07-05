// export default function Greeter(props) {
//   return <h1>Hi There!! {props.person}</h1>;
// }

// props or propeties are function arguments which we pass
// we can give any name as argument but here we gave name as props as an argument

// we can destructor the props or properties as below
// export default function Greeter({ person }) {
//   return <h1>Hi There!! {person}</h1>;
// }
// here we are destructoring person

// we can have multiple props
export default function Greeter({ person, from }) {
  return (
    <>
      <h1>Hi There!! {person}</h1>
      <h2>from {from}</h2>
    </>
  );
}
