import "./Cell.css";
import queen from "../assets/queen.png";
function Cell(props) {
  return (
    <div className={` cell ${props.bool ? "black" : "white"}`}>
      {props.queen && <img className="queen" src={queen} />}
    </div>
  );
}
export default Cell;
