const TaskItem = ({ task, index, toggleComplete, deleteTask }) => {
  return (
    <li
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        textDecoration: task.completed ? "line-through" : "none",
      }}
    >
      <span onClick={() => toggleComplete(index)} style={{ cursor: "pointer" }}>
        {task.text}
      </span>
      <button onClick={() => deleteTask(index)} style={{ marginLeft: "10px" }}>
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
  