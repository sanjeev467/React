import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Greeter from "./Greeter";
import Die from "./Die";
import ListPicker from "./ListPicker";
import DoubleDice from "./DoubleDice";
import Heading from "./Heading";
import ColorList from "./ColorList";

function App() {
  const [count, setCount] = useState(0);

  return (
    // <div>
    //   <Greeter person="Tony" />
    //   <Greeter person="Pal" />
    //   <Greeter person="Happy" />
    //   <Greeter person="Sanjeev" />
    // </div>

    // we can have multiple props
    // separate them with space

    // <div>
    //   <Greeter person="Tony" from="Stark" />
    //   <Greeter person="Pal" from="The Mechanic" />
    //   <Greeter person="Happy" from="Boy" />
    //   <Greeter person="Sanjeev" from="Pandey" />
    // </div>

    // we can also have integers as props
    // <>
    //   <Die numSides={20} />
    //   <Die numSides={10} />
    //   <Die numSides={5} />
    // </>
    // we use {} this braces around the no beacuse it is how it evaluates as javascript
    // if we write the no inside "" dbl quotes is will treat the no  as string

    // Passing Array

    // <>
    //   <ListPicker values={[1, 2, 3]} />
    // </>

    // passing Object

    // <>
    //   <ListPicker values={{ a: 1, b: 2 }} />
    // </>

    // DoubleDice

    // <DoubleDice />

    // Heading Component to style Components dynamically
    // <div>
    //   <Heading color="magenta" text="Welcome" />
    // </div>

    // ColorList ---> rendering arrays with map

    <div>
      <ColorList colors={["pink", "peach", "orange", "yellow"]} />
    </div>
  );
}

export default App;
