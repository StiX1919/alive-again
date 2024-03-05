import { createContext } from "react";


export const RootContext = createContext({
    levels: [1,0,10],
    incrementors: []
})

export const TasksContext = createContext(null);
export const TasksDispatchContext = createContext(null);