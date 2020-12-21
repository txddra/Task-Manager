import React, {useContext} from 'react';
import { TaskListContext } from "../context/TaskListContext";

const TaskForm = () => {

    const {addTask} = useContext(TaskListContext);

    const [title, setTitle] = useState("")

    const handleChange= (e)=>{

        setTitle(e.target.value)
    };

    const handleSubmit =(e)=>{
        e.preventDefault()
    }
    return (
        <form 
        onSubmit ={handleSubmit}
            className ="form">
            <input
            onChange= {handleChange}
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
