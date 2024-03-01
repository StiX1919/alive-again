import { useState } from "react";
import useInterval from "./hook";

//WIP
const Incrementer = ({title}) => {
    const [levelOne, setOne] = useState({
        count: 0,
        counter: 0
      })
    useInterval((level) => {
        // make reusable for multiple levels of incrementation
        // setCount(count + bounce);
    }, 1000);

    return (
      <div>
        <p>Level One: {levelOne.count}</p>
        <button onClick={() => setOne(addToCount(levelOne))}>Add to Level 1</button>
        <button onClick={() => createInterval()} />
      </div>
    );
  }

export default Incrementer