import React, { useContext } from "react";
import { TaskListContext } from '../context/TaskListContext';

const TaskList= ()=>{

    const {tasks} =useContext(TaskList);
    return <div>
            <ul className ="list">
            {tasks.map((task)=>{
                return 
            })}
   

            </ul>
        </div>
    
        }

export default TaskList;