import React,{ createContext, useState } from "react";
// import uuid from "uuidv4";

export const TaskListContext = createContext();

const TaskListContextProvider =(props)=>{

    const [tasks, setTasks] =useState([
        {title: "Shower", id:1},
        {title: "Walk doggie", id:2},
        {title: "Make lunch", id:3}

    ])

    return(
// value will have all the data from this state  
        <TaskListContext.Provider value={{tasks}}>
            {/* all the components that will be wrapped in the provider */}
          {props.children}
            </TaskListContext.Provider>
    )
};

export default TaskListContextProvider