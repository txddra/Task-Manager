import React, {useContext} from 'react';
import {TaskListContext} from '../context/TaskListContext'


const Task = ({task}) => {

    const {removeTask} = useContext(TaskListContext)

    return (
        <li className = "list-item">
            <span> {task.title}</span>
            {/* //buttons will add and delete */}
            <button
            onClick ={()=>removeTask(task.id)} 
            className ="btn-delete task-btn"><i className="fas fa-trash-alt"></i> </button>
            <button className ="btn-edit task-btn"><i className="fas fa-pen"></i> </button>
        </li>
            
        
    )
}

export default Task
