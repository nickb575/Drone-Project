import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';  

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Nicholas Briggs{counter}
        </p>
        <button onClick={()=>{setCounter(counter + 1)}}> add to counter </button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
