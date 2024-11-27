import { useState } from 'react'
import "./TodoApp.css";


function App() {
  const [task, setTask] = useState(""); // To store the current input
  const [tasks, setTasks] = useState([]); // To store the list of tasks

  const addTask = () => {
    if (task.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, { text: task, completed: false }]);
    setTask(""); // Clear input
  };
  const toggleComplete = (index) => {
    const updatedTasks = tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    );
    setTasks(updatedTasks);
  };
  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index); // Remove task at the specified index
    setTasks(updatedTasks);
  };

  

 
  return (
    <div className='container'>
      <h1>To-Do List</h1>
      <div className="input-container"></div>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              textDecoration: t.completed ? "line-through" : "none",
              cursor: "pointer"

            }}
          >
            <span onClick={() => toggleComplete(index)}>{t.text}</span>
            <button onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
   );  
            
            
  }

// function App() {
//   const [task, setTask] = useState(""); // To store the current input
//   const [tasks, setTasks] = useState([]); // To store the list of tasks 
//   const addTask = (){
//     if(task.trim() === "") return; // Prevent empty tasks
//     setTask([...tasks, {text: task, completed: false}]);
//     setTask(""); 
//   }
// }


export default App
