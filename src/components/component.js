import { useContext, useState } from "react";
import useInterval from "./hook";
import { IdleContext, IdleDispatchContext } from "../context/RootContext";

//WIP
const Incrementer = ({ level, index }) => {
    const context = useContext(IdleContext)
    const dispatch = useContext(IdleDispatchContext)
    function handleAddToCount(levelId) {
      dispatch({
        type: 'addCount',
        id: levelId
      });
    }
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
    let {name, count, counter} = context[index]
    return (
      <div>
        <p>{name}: {count} Counters: {counter}</p>
        <button >Add to Level 1</button>
        {/* <button onClick={() => createInterval()}>Add Counter</button> */}
      </div>
    );
  }

export default Incrementer