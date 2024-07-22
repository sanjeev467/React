import "./App.css";
import Item from "./components/Item";
import Cart from "./components/Cart";

function App() {
  const items = [
    { id: 1, name: "mango", price: 10 },
    { id: 2, name: "peach", price: 40 },
    { id: 3, name: "orange", price: 70 },
    { id: 4, name: "apple", price: 110 },
    { id: 4, name: "Guava", price: 60 },
    { id: 4, name: "Pneapple", price: 110 },
  ];
  return (
    <div className="container">
      <div className="items">
        {items.map((item) => (
          <Item key={item.id} {...item} />
        ))}
      </div>
      <div className="cart">
        <Cart />
      </div>
    </div>
  );
}

export default App;
