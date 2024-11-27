import TaskItem from "./TaskItem";
// Grouped task by category
const TaskList = ({ tasks, toggleComplete, deleteTask }) => {
  const groupedTasks = tasks.reduce((groups, task) => {
    groups[task.category] = groups[task.category] || [];
    groups[task.category].push(task);
    return groups;
  }, {});

  return (
    <div>
      {Object.keys(groupedTasks).map((category, index) => (
        <div key={index}>
          <h3>{category}</h3>
          <ul>
            {groupedTasks[category].map((task, i) => (
              <TaskItem
                key={i}
                task={task}
                index={tasks.indexOf(task)} // Pass the correct index
                toggleComplete={toggleComplete}
                deleteTask={deleteTask}
              />
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TaskList;