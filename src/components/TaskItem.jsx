import Button from "./Button";

function TaskItem({
  task,
  deleteTask,
  editTask,
}) {
  return (
    <div className="task-card">
      <h3>{task.taskName}</h3>

      <p>{task.note}</p>

      <Button
        text="Edit"
        onClick={() =>
          editTask(task.id)
        }
      />

      <Button
        text="Delete"
        onClick={() =>
          deleteTask(task.id)
        }
      />
    </div>
  );
}

export default TaskItem;