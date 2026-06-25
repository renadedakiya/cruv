import TaskItem from "./TaskItem";

function TaskList({
  tasks,
  deleteTask,
  editTask,
}) {
  return (
    <div>
      {tasks.length === 0 ? (
        <h3>No Tasks Found</h3>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={
              deleteTask
            }
            editTask={editTask}
          />
        ))
      )}
    </div>
  );
}

export default TaskList;