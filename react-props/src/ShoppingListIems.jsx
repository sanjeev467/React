// this component will have the jon of rendering
// single item or a single li in which items is stored

function ShoppingListItems({ item, quantity, completed }) {
  const styles = {
    color: completed ? "grey" : "red",
    textDecoration: completed ? "line-through" : "none",
  };
  return (
    <li style={styles}>
      {item} - {quantity}
    </li>
  );
}
export default ShoppingListItems;
