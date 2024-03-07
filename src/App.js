import './App.css';
import { useReducer } from 'react';
import Incrementer from './components/component'
import { IdleContext, IdleDispatchContext } from './context/RootContext';

export default function App() {
  const [levels, dispatch] = useReducer(tasksReducer, idleLevels);


  // function handleDeleteTask(taskId) {
  //   dispatch({
  //     type: 'deleted',
  //     id: taskId
  //   });
  // }

  return (
    <IdleContext.Provider value={levels}>
      <IdleDispatchContext.Provider value={dispatch}>
        <div className="App">
          <header className="App-header">
            {levels.map((level, i) => (
              <Incrementer level={level} index={i}/>
            ))}
          </header>
        </div>
      </IdleDispatchContext.Provider>
    </IdleContext.Provider>
  );
}

function tasksReducer(levels, action) {
  switch (action.type) {
    case 'addCount': {
      return levels.reduce((array, level, i) => {
        console.log('1', level.count)
        if(action.id === i) {
          level.count = 1
        }
        console.log('2', level.count)
        array.push(level)
        return array
      }, []);
    }
    default: {
      throw Error('Unknown action: ' + action.type);
    }
  }
}

const idleLevels = [
  { count: 1, counter: 0, name: 'butts' },
  { count: 0, counter: 0, name: 'big butts' },
  { count: 10, counter: 0, name: 'huge butts' },
];
