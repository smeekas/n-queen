function EmptyCell(props) {
  // let r = Math.random() * 255;
  // let g = Math.random() * 255;
  // let b = Math.random() * 255;
  // style={{ backgroundColor: `rgb(${r},${g},${b})` }}
  return (
    <div
      
      className={` cell ${props.bool ? "black" : "white"}`}
    ></div>
  );
}
export default EmptyCell;
