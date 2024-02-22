import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TestComponent from './components/component';


function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Kick butts
        </p>
        <p>{count}</p>
        <TestComponent num={count}/>
        <button onClick={() => setCount(count)}>Click This to count</button>
      </header>
    </div>
  );
}

export default App;
