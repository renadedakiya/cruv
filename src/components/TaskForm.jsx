import {
  useState,
  useEffect,
  useRef,
} from "react";

import Button from "./Button";

function TaskForm({
  tasks,
  addTask,
  editId,
  updateTask,
}) {
  const [taskName, setTaskName] =
    useState("");

  // Uncontrolled Input
  const noteRef = useRef();

  useEffect(() => {
    if (editId) {
      const task = tasks.find(
        (t) => t.id === editId
      );

      if (task) {
        setTimeout(() => {
          setTaskName(task.taskName);
        }, 0);

        noteRef.current.value =
          task.note;
      }
    }
  }, [editId, tasks]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const note =
      noteRef.current.value;

    if (!taskName.trim()) {
      alert("Task cannot be empty");
      return;
    }

    if (editId) {
      updateTask(
        editId,
        taskName,
        note
      );
    } else {
      addTask(taskName, note);
    }

    setTaskName("");
    noteRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter Task"
        value={taskName}
        onChange={(e) =>
          setTaskName(
            e.target.value
          )
        }
      />

      <input
        type="text"
        placeholder="Note (useRef)"
        ref={noteRef}
      />

      <Button
        text={
          editId
            ? "Update Task"
            : "Add Task"
        }
        type="submit"
      />
    </form>
  );
}

export default TaskForm;