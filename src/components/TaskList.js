import React from "react";
import Task from "./Task";

function TaskList({ tasks, deleteItem }) {
  return (
    <div className="tasks">
      {/* display a list of tasks using Task component */}
      {tasks.map((task, index) => (
        <Task 
          deleteItem={deleteItem}
          key={index}
          text={task.text}
          category={task.category}
        />
      ))}
    </div>
  );
}

export default TaskList;


