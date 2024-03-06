import './App.css';
import { useReducer } from 'react';
import Incrementer from './components/component'

export default function App() {
  const [levels, dispatch] = useReducer(tasksReducer, idleLevels);

  return (
    <div className="App">
      <header className="App-header">
        {levels.map(({ count, counter, name}) => (
          <Incrementer count={count} counter={counter} name={name}/>
        ))}
      </header>
    </div>
  );
}

function tasksReducer(tasks, action) {
  switch (action.type) {
    case 'added': {
      return [...tasks, {
        id: action.id,
        text: action.text,
        done: false
      }];
    }
    case 'changed': {
      return tasks.map(t => {
        if (t.id === action.task.id) {
          return action.task;
        } else {
          return t;
        }
      });
    }
    case 'deleted': {
      return tasks.filter(t => t.id !== action.id);
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
