import './App.css';
import { useState } from 'react';

function Square(){
  const [value, setValue] = useState(null);
  function handleClick(){
    setValue('O');
  }
  return (
    <button 
      className="square"
      onClick={handleClick}
    >
      {value}
    </button>
  );
}
function App() {
  return (
    <div className="App">
      <h1 style={{color:"brown"}}>Tic-Tac-Toe Game using React</h1>
      <br />
      <div className="board-row">
        <Square />
        <Square />
        <Square />

      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>
      <div className="board-row">
        <Square />
        <Square />
        <Square />
      </div>

    </div>
  );
}

export default App;
