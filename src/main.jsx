import { StrictMode } from "react";
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
// Import context providers to manage state across the application
import { TicketProvider } from "./components/TicketProvider.jsx";
import { TaskProvider } from "./contexts/TaskContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <TicketProvider>
      <TaskProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TaskProvider>
    </TicketProvider>
  </StrictMode>
);
