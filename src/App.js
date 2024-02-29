import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import TestComponent from './components/component';
import useInterval from './components/hook';


function App() {
  const [count, setCount] = useState(0)
  const [bounce, setBounce] = useState(0)
  useInterval(() => {
    setCount(count + bounce);
  }, 1000);


  const updateBounce = (currCount, level) => {
    // make reusable for multiple levels of incrementation
    if (currCount >= 10) {
      setCount(currCount - 10)
      setBounce(bounce + 1)
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Idle game practice/ideas</h2>
        <p>Count: {count}</p>
        <p>Bounce: {bounce}</p>
        <TestComponent num={count}/>
        <button onClick={() => setCount(count + 1)}>Click This to count</button>
        <button onClick={() => updateBounce(count)}>Click This to bounce</button>
        
      </header>
    </div>
  );
}

export default App;