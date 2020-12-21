import React from 'react';
import TaskList from './components/TaskList';
import TaskListContextProvider from './context/TaskListContext';
import TaskForm from "./components/TaskForm"
import "./App.css"
// import TaskList from './'

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
        <div className ="app-wrapper">
          <div className = "main">
            <TaskForm />
<TaskList />

          </div>
        </div>
    </div>

    </TaskListContextProvider>
        
  );
}

export default App;
