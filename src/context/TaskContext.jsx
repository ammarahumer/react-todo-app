import { createContext, useContext, useEffect, useState } from "react";

// Create the context that will hold all task-related data and functions
const TaskContext = createContext();

// Custom hook for easy access to the context in any component
export const useTaskContext = () => useContext(TaskContext);

const STORAGE_KEY = "react-todo-app-tasks";

export const TaskProvider = ({ children }) => {
  // Initialize state from Local Storage (if any tasks were saved previously)
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem(STORAGE_KEY);
    return savedTasks ? JSON.parse(savedTasks) : [];
  });

  // Whenever tasks change, persist them to Local Storage
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]);

  // Add a new task
  const addTask = (text) => {
    const newTask = {
      id: Date.now(),
      text: text.trim(),
      completed: false,
    };
    setTasks((prevTasks) => [newTask, ...prevTasks]);
  };

  // Delete a task by id
  const deleteTask = (id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  };

  // Toggle a task's completed status
  const toggleTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Derived counts used across the UI
  const pendingCount = tasks.filter((task) => !task.completed).length;
  const completedCount = tasks.filter((task) => task.completed).length;

  const value = {
    tasks,
    addTask,
    deleteTask,
    toggleTask,
    pendingCount,
    completedCount,
  };

  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
