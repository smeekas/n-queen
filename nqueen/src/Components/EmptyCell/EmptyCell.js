function EmptyCell(props){
    return (
        <div className={` cell ${props.bool ? "black" : "white"}`}>
          
        </div>
      );
}
export default EmptyCell;