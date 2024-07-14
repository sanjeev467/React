import "./App.css";
import Button from "@mui/material/Button";

function App() {
  return (
    <>
      <Button variant="contained" onClick={() => alert("hii")}>
        contained
      </Button>
      <Button variant="text">Contained</Button>
      <Button variant="outlined">Contained</Button>
    </>
  );
}

export default App;
