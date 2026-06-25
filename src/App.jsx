import { useState, useEffect } from "react";
import "./App.css";

import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";

function App() {
  const [tasks, setTasks] = useState(() => {
    return JSON.parse(localStorage.getItem("tasks")) || [
      {
        id: 1,
        taskName: "Sample Task",
        note: "This is a sample note",          
      },
      {
        id: 2,
        taskName: "Another Task",
        note: "This is another sample note",
      }
    ];
  });
  const [editId, setEditId] = useState(null);

  // Save data
  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  // Add Task
  const addTask = (taskName, note) => {
    const newTask = {
      id: Date.now(),
      taskName,
      note,
    };

    setTasks([...tasks, newTask]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks(
      tasks.filter((task) => task.id !== id)
    );
  };

  // Edit Task
  const editTask = (id) => {
    setEditId(id);
  };

  // Update Task
  const updateTask = (id, newTask, newNote) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              taskName: newTask,
              note: newNote,
            }
          : task
      )
    );

    setEditId(null);
  };

  return (
    <div className="container">
      <h1>Task Manager CRUD App</h1>

      <TaskForm
        tasks={tasks}
        addTask={addTask}
        editId={editId}
        updateTask={updateTask}
      />

      <TaskList
        tasks={tasks}
        deleteTask={deleteTask}
        editTask={editTask}
      />
    </div>
  );
}

export default App;