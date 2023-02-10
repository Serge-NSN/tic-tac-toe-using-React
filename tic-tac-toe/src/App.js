import './App.css';
import { useState } from 'react';

function Square({value, onSquareClick}){
  return (
    <button 
      className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}
function App() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  
  return (
    <div className="App">
      <h1 style={{color:"brown"}}>Tic-Tac-Toe Game using React</h1>
      <br />
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={handleClick}/>
        <Square value={squares[1]} />
        <Square value={squares[2]} />

      </div>
      <div className="board-row">
        <Square value={squares[3]}/>
        <Square value={squares[4]}/>
        <Square value={squares[5]}/>
      </div>
      <div className="board-row">
        <Square value={squares[6]}/>
        <Square value={squares[7]}/>
        <Square value={squares[8]}/>
      </div>

    </div>
  );
}

export default App;
