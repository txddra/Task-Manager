import React,{ createContext, useState } from "react";
// import uuid from "uuidv4";

export const TaskListContext = createContext();

const TaskListContextProvider =(props)=>{

    const [tasks, setTasks] =useState([
        {task: "Shower", id:1},
        {task: "Walk doggie", id:2},
        {task: "Make lunch", id:3}

    ])

    return(

        <TaskListContext.Provider value={{tasks}}>
          {props.children}
            </TaskListContext.Provider>
    )
};

export default TaskListContextProvider