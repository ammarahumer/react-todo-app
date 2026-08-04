import { useTaskContext } from "../context/TaskContext";
import TaskItem from "./TaskItem";

const TaskList = () => {
  const { tasks } = useTaskContext();

  // Show a friendly empty state when there are no tasks yet
  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p className="empty-state__title">No tasks yet</p>
        <p className="empty-state__subtitle">
          Add your first task above to get started.
        </p>
      </div>
    );
  }

  return (
    <ul className="task-list">
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </ul>
  );
};

export default TaskList;
