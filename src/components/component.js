import { useState } from "react";
import useInterval from "./hook";

//WIP
const Incrementer = ({ id, count, counter, name, addToCount}) => {
    const [data, setData] = useState({
        count: 0,
        counter: 0
    })
    // const createInterval = () => {
    //     if(data.count > 50) {
    //         setData({
    //             count: data.count - 50,
    //             counter: data.counter + 1
    //         })
    //     }
    // }
    // useInterval(() => {
    //     data.counter > 0 && setData({ ...data, count: (data.count + data.counter) });
    // }, 1000);

    return (
      <div>
        <p>{name}: {count} Counters: {counter}</p>
        <button onClick={() => addToCount(id)}>Add to Level 1</button>
        {/* <button onClick={() => createInterval()}>Add Counter</button> */}
      </div>
    );
  }

export default Incrementer