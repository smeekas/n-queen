import { useState } from "react";
import "./Menu.css";
function Menu(props) {
  // const [range,setRange]=useState(50);
  const rangeHandler=(event)=>{
    props.setDelay(event.target.value)
    // console.log(event.target.value)
  }
  return (
    <div className="menu">
      <div className="algorithm">
        <button className="algoBtn">Brute Force</button>
        <button className="algoBtn">Backtracking</button>
      </div>
      <div className="delay">
            <input step="5" onChange={rangeHandler} defaultValue="100" min="100" max="1500" type="range"/>
            <div className="rangeDisplay">{props.delay} ms</div>
          </div>
    </div>
  );
}
export default Menu;
