import './App.css';
import { useReducer } from 'react';
import Incrementer from './components/component'

export default function App() {
  const [levels, dispatch] = useReducer(tasksReducer, idleLevels);
  function handleAddToCount(levelId) {
    dispatch({
      type: 'addCount',
      id: levelId
    });
  }

  // function handleDeleteTask(taskId) {
  //   dispatch({
  //     type: 'deleted',
  //     id: taskId
  //   });
  // }

  return (
    <div className="App">
      <header className="App-header">
        {levels.map(({ count, counter, name}, i) => (
          <Incrementer key={i} id={i} count={count} counter={counter} name={name} addToCount={handleAddToCount}/>
        ))}
      </header>
    </div>
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
    // case 'changed': {
    //   return tasks.map(t => {
    //     if (t.id === action.task.id) {
    //       return action.task;
    //     } else {
    //       return t;
    //     }
    //   });
    // }
    // case 'deleted': {
    //   return tasks.filter(t => t.id !== action.id);
    // }


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
