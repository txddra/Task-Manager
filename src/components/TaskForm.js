import React from 'react'

const TaskForm = () => {
    return (
        <form className ="form">
            <input
            type="text"
            className="task-input"
            placeholder= "Add new task"
            />
            <div className = "buttons">
                <button
                type="submit"
                className="btn add-task-btn">Add Task</button>
                <button
                className="btn clear-btn">Clear Task</button>
            </div>
        </form>
            
    
    )
}

export default TaskForm
