import queen from '../../assets/queen.png'
function QueenCell(props){
    return (
        <div className={` cell ${props.bool ? "black" : "white"}`}>
          {<img className="queen" src={queen} />}
        </div>
      );
}
export default QueenCell;