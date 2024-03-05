import { useState } from "react";
import useInterval from "./hook";

//WIP
const Incrementer = ({title, count}) => {
    const [data, setData] = useState({
        count: 0,
        counter: 0
    })
    const createInterval = () => {
        if(data.count > 50) {
            setData({
                count: data.count - 50,
                counter: data.counter + 1
            })
        }
    }
    useInterval(() => {
        data.counter > 0 && setData({ ...data, count: (data.count + data.counter) });
    }, 1000);

    return (
      <div>
        <p>Level {title}: {count} Counters: {data.counter}</p>
        <button onClick={() => setData({...data, count: data.count + 1})}>Add to Level 1</button>
        <button onClick={() => createInterval()}>Add Counter</button>
      </div>
    );
  }

export default Incrementer