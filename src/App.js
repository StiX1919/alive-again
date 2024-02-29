import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
// import TestComponent from './components/component'
import useInterval from './components/hook';


function App() {
  //one state? Maybe component 
  
  const [levelOne, setOne] = useState({
    count: 0,
    counter: 0
  })
  const [levelTwo, setTwo] = useState({
    count: 0,
    counter: 0
  })
  const [levelThree, setThree] = useState({
    count: 0,
    counter: 0
  })
  const [bounce, setBounce] = useState(0)

  const addToCount = (level) => {
    const newState = {...level}
    newState.count++
    return newState
  }
  useInterval((level) => {
    // make reusable for multiple levels of incrementation
    setCount(count + bounce);
  }, 1000);

  const createInterval = () => {
    
  }


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h2>Idle game practice/ideas</h2>
        <p>Level One: {levelOne.count}</p>
        <button onClick={() => setOne(addToCount(levelOne))}>Add to Level 1</button>
        <button onClick={() => createInterval()} />
        <p>Level Two: {levelTwo.count}</p>
        <button onClick={() => setTwo(addToCount(levelTwo))}>Add to Level 2</button>
        <button onClick={() => createInterval()} />
        
      </header>
    </div>
  );
}

export default App;