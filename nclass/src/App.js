import "./App.css";
import Board from "./Components/Board";
import Menu from "./Components/Menu/Menu";
import { useState } from "react";
function App() {
  let n = 4;

  const [algo, setAlgo] = useState(true);
  const algoHandler = (back) => {
    setAlgo(back);
  };
  return (
    <div className="App">
      <Board n={n} algo={algo} />
      <Menu current={algo} algoHandler={algoHandler} />
    </div>
  );
}

export default App;
