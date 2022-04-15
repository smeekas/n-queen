import { useState } from "react";
import "./Menu.css";
function Menu(props) {
  const [range, setRange] = useState(50);
  const rangeHandler = (event) => {
    setRange(event.target.value);
  };

  const backHandler = () => {
    props.algoHandler(true);
  };
  const bruteHandler = () => {
    props.algoHandler(false);
  };
  return (
    <div className="menu">
      <div className="algorithm">
        <button onClick={bruteHandler} className={`algoBtn ${!props.current?"algoBtnClicked":""}`}>
          Brute Force
        </button>
        <button onClick={backHandler} className={`algoBtn ${props.current?"algoBtnClicked":""}`}>
          Backtracking
        </button>
      </div>
      <div className="delay">
        <input
          step="5"
          onChange={rangeHandler}
          defaultValue="50"
          min="10"
          max="100"
          type="range"
        />
        <div className="rangeDisplay">{range} ms</div>
      </div>
    </div>
  );
}
export default Menu;
