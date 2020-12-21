import React from 'react'

const Task = () => {
    return (
        <li className = "list-item">
            <span> Task Title</span>
            {/* //buttons will add and delete */}
            <button className ="btn-delete task-btn"><i className="fas fa-trash-alt"></i> </button>
            <button className ="btn-delete task-btn"><i className="fas fa-pen"></i> </button>
        </li>
            
        
    )
}

export default Task
