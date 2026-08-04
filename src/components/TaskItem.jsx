import { useTaskContext } from "../context/TaskContext";

const TaskItem = ({ task }) => {
  const { toggleTask, deleteTask } = useTaskContext();

  return (
    <li className={`task-item ${task.completed ? "task-item--done" : ""}`}>
      <label className="task-item__label">
        <input
          type="checkbox"
          className="task-item__checkbox"
          checked={task.completed}
          onChange={() => toggleTask(task.id)}
        />
        <span className="task-item__text">{task.text}</span>
      </label>

      <button
        className="task-item__delete"
        onClick={() => deleteTask(task.id)}
        aria-label={`Delete task: ${task.text}`}
      >
        ✕
      </button>
    </li>
  );
};

export default TaskItem;
