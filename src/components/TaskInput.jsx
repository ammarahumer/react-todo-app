import { useState } from "react";
import { useTaskContext } from "../context/TaskContext";

const TaskInput = () => {
  const [text, setText] = useState("");
  const { addTask } = useTaskContext();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prevent adding empty or whitespace-only tasks
    if (text.trim() === "") return;

    addTask(text);
    setText("");
  };

  return (
    <form className="task-input" onSubmit={handleSubmit}>
      <input
        type="text"
        className="task-input__field"
        placeholder="What do you need to do?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        aria-label="New task"
      />
      <button type="submit" className="task-input__button">
        Add Task
      </button>
    </form>
  );
};

export default TaskInput;
