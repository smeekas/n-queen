import './App.css';
import Board from "./Components/Board";
import Menu from './Components/Menu/Menu';
import { queenStore } from './store/mobx';

function App() {
  let n=4;
  return (
    
   
    <div className="App">
       <Board n={n} store={queenStore} />
       <Menu/>
    </div>
    
  );
}

export default App;
