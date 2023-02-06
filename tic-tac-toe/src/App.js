import './App.css';

function Square({ value }){
  function handleClick(){
    console.log('clicked!');
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
        <Square value="X"/>
        <Square value="O"/>
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
