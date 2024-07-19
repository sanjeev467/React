import "./App.css";
import Item from "./components/Item";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Item name="MacBook" price={100000} />
      <Item name="Pixel" price={80000} />
      <Cart />
    </>
  );
}

export default App;
