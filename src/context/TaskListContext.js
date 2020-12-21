import React,{ createContext, useState } from "react";

export const TaskListContext = createContext();

const TaskListContextProvider =()=>{

    const [tasks, setTasks] =useState("")

    return <div>Task List Context</div>
};

export default TaskListContextProvider