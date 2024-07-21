import "./App.css";
import Cart from "./components/Cart";
import Products from "./components/Product";
import products from "./products.json";

function App() {
  return (
    <div className="App">
      <Cart />
      <div className="products">
        {products.map((product) => (
          <Products {...product} />
        ))}
      </div>
    </div>
  );
}

export default App;
