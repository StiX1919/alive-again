import logo from './logo.svg';
import './App.css';
import { useContext, useState } from 'react';
import Incrementer from './components/component'
import useInterval from './components/hook';
import { RootContext } from './context/RootContext';


function App() {
  const context = useContext(RootContext)
  
  const [levelOne, setOne] = useState({
    count: 0,
    counter: 0
  })
  const [levelTwo, setTwo] = useState({
    count: 0,
    counter: 0
  })

  const addToCount = (level) => {
    const newState = {...level}
    newState.count++
    return newState
  }


  return (
    <div className="App">
      <header className="App-header">
        <Incrementer title={'One'}/>
        <Incrementer title={'Two'}/>
        <Incrementer title={'Three'}/>
      </header>
    </div>
  );
}

export default App;