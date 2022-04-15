import { useState } from "react";
import "./Menu.css";
function Menu() {
  const [range,setRange]=useState(50);
  const rangeHandler=(event)=>{
    setRange(event.target.value)
    // console.log(event.target.value)
  }
  return (
    <div className="menu">
      <div className="algorithm">
        <button className="algoBtn">Brute Force</button>
        <button className="algoBtn">Backtracking</button>
      </div>
      <div className="delay">
            <input step="5" onChange={rangeHandler} defaultValue="50" min="10" max="100" type="range"/>
            <div className="rangeDisplay">{range} ms</div>
          </div>
    </div>
  );
}
export default Menu;
