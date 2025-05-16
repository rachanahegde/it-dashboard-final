import { createContext, useState } from "react";
import initialTasks from "../data/todos.json";

// Create task context object
export const TaskContext = createContext();

// Create task provider component

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState(initialTasks);

  // Update tasks

  // Add new task

  return (
    <TaskContext.Provider value={{ tasks }}>{children}</TaskContext.Provider>
  );
};
