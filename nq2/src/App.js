import './App.css';
import Board from "./Components/Board";
import Menu from './Components/Menu/Menu';

function App() {
  let n=4;
  return (
    
   
    <div className="App">
       <Board n={n} />
       <Menu/>
    </div>
    
  );
}

export default App;
