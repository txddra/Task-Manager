import React from 'react';
import TaskList from './components/TaskList';
import TaskListContextProvider from './context/TaskListContext'
import "./App.css"
// import TaskList from './'

function App() {
  return (
    <TaskListContextProvider>
      <div className="container">
<TaskList />
    </div>

    </TaskListContextProvider>
        
  );
}

export default App;
