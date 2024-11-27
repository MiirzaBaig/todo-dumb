import React from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, toggleComplete, deleteTask, setTasks }) => {
  const onDragEnd = (result) => {
    const { destination, source } = result;

    if (!destination) return;

    const updatedTasks = Array.from(tasks);
    const [removed] = updatedTasks.splice(source.index, 1);
    updatedTasks.splice(destination.index, 0, removed);

    setTasks(updatedTasks);  // Update the task order in the state
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Droppable droppableId="tasks" type="task">
        {(provided) => (
          <ul
            {...provided.droppableProps}
            ref={provided.innerRef}
            style={{ padding: 0 }}
          >
            {tasks.map((task, index) => (
              <Draggable key={task.id} draggableId={task.id} index={index}>
                {(provided) => (
                  <TaskItem
                    task={task}
                    toggleComplete={toggleComplete}
                    deleteTask={deleteTask}
                    provided={provided}
                    index={index}
                  />
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
};

export default TaskList;
