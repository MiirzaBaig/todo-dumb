import { useState } from 'react'

function App() {
  const [task, setTask] = useState(""); // To store the current input
  const [tasks, setTasks] = useState([]); // To store the list of tasks

  const addTask = () => {
    if (task.trim() === "") return; // Prevent empty tasks
    setTasks([...tasks, { text: task, completed: false }]);
    setTask(""); // Clear input
  };
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>To-Do List</h1>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task"
      />
      <button onClick={addTask}>Add Task</button>

      <ul>
        {tasks.map((t, index) => (
          <li key={index}>{t.text}</li>
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
