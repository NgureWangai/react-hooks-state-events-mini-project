import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { CATEGORIES, TASKS } from "../data";

function App() {
  const [tasks, setTasks] = useState(TASKS);
  const [categories] = useState(CATEGORIES);
  const [selectedCategoryButton, setSelectedCategoryButton] = useState('All');
  
  function addNewItemToList(newItem) {
    setTasks([...tasks, newItem]);
  }

  function deleteItem(deletedItem) {
    setTasks(tasks.filter(item => item.text !== deletedItem));
  }
 
  const displayedTasks = tasks.filter(item => {
    if (selectedCategoryButton === 'All') return true;
    return selectedCategoryButton === item.category;
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={categories}
        selectedButton={selectedCategoryButton}
        setSelectedButton={setSelectedCategoryButton} 
      />
      <NewTaskForm
        onTaskFormSubmit={addNewItemToList}
        categories={categories}
      />
      <TaskList 
        deleteItem={deleteItem}
        tasks={displayedTasks} 
      />
    </div>
  );
}

export default App;
