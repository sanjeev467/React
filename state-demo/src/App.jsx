import "./App.css";
import Counter from "./Counter";
import Dumbo from "./Dumbo";
import ScoreKeeper from "./ScoreKeeper";
import EmojiClicker from "./EmojiClicker";
import ScoreKeeperGame from "./ScoreKeeperGame";

function App() {
  return (
    //-------------Counter------------------
    // <>
    //   <h1>state demo</h1>

    //   <Counter />
    // </>

    // ----------------counter---------------

    //----------------Dumbo------------------

    // <>
    //   <h1>state demo</h1>
    //   <Dumbo />
    // </>

    //----------------Dumbo------------------

    //--------------scorKeeper---------------
    // <>
    //   <ScoreKeeper />
    // </>
    //--------------scorKeeper---------------

    //------------EmojiClicker---------------

    // <>
    //   <EmojiClicker />
    // </>

    //------------EmojiClicker---------------

    //----------ScoreKeeperGame---------------

    <ScoreKeeperGame numPlayers={5} target={3} />

    //----------ScoreKeeperGame---------------
  );
}

export default App;
