import logo from './logo.svg';
import './App.css';
import { useContext, useReducer, useState } from 'react';
import Incrementer from './components/component'
import useInterval from './components/hook';
import { RootContext } from './context/RootContext';


function App() {
  const [tasks, dispatch] = useReducer(tasksReducer, initialTasks);
  const context = useContext(RootContext)


  return (
    <div className="App">
      <header className="App-header">
        {context.levels.map((level) => (
          <Incrementer title={'One'} count={level}/>
        ))}
      </header>
    </div>
  );
}

export default App;