import "./App.css";
import Board from "./Components/Board";
import Menu from "./Components/Menu/Menu";
import { useState } from "react";
function App() {
  let n = 4;
  const [delay, setDelay] = useState(100);

  return (
    <div className="App">
      <Board n={n}  delay={delay}/>
      <Menu delay={delay}  setDelay={setDelay}/>
    </div>
  );
}

export default App;
