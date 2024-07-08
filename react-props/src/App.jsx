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
import ShoppingList from "./ShoppingList";
import PropertyList from "./PropertyList";
import Clicker from "./Clicker";
import Form from "./Form";

// ----------------for shoppongList----------------
// we have to give an unique identity to the each element in the
// li in shopping list component as it need it, it is called Key
// we will hardcode here to give its key
// const data = [
//   { id: 1, item: "eggs", quantity: "4", completed: false },
//   { id: 2, item: "Peach", quantity: "6", completed: true },
//   { id: 3, item: "Olives", quantity: "11", completed: true },
//   { id: 4, item: "Oranges", quantity: "9", completed: false },
// ];
// ----------------for shoppongList----------------

// ------------------for propertis----------------

// const properties = [
//   { id: 129031, name: "Manali", rating: 4.9, price: 150 },
//   { id: 129032, name: "Marine Drive", rating: 4.99, price: 250 },
//   { id: 129033, name: "Lone Mountain", rating: 4.8, price: 300 },
//   { id: 129034, name: "Goa", rating: 4.7, price: 120 },
//   { id: 129035, name: "Malaysia", rating: 4.6, price: 140 },
//   { id: 129036, name: "Thailand", rating: 4.9, price: 96 },
// ];

// ------------------for propertis----------------
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

    // <div>
    //   <ColorList colors={["pink", "peach", "orange", "yellow"]} />
    // </div>

    // -----------for ShoppingList----------

    // <div>
    //   <ShoppingList items={data} />
    // </div>

    // -----------for ShoppingList----------

    // ------------------for propertis----------------

    // <div>
    //   <PropertyList properties={properties} />
    // </div>

    // ------------------for propertis----------------

    //------------------Clicker-------------------------
    // ----------------React Events-----------------

    // <div>
    //   <Clicker />
    // </div>
    //------------------Clicker-------------------------

    //---------------Form----------------

    <div>
      <Form />
    </div>
    //---------------Form----------------
  );
}

export default App;
