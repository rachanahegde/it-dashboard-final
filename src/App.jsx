import { Routes, Route } from "react-router-dom";
import "./index.css";
// Import components
import Navbar from "./components/Navbar";
// Import pages
import Dashboard from "./pages/Dashboard";
import Staff from "./pages/Staff";
import SubmitRequests from "./pages/SubmitRequests";
import Tickets from "./pages/Tickets";
import Todos from "./pages/Todos";

function App() {
  return (
    // Using flexbox to make sure the navigation is in a sidebar to the left of the main body of content
    <div className="flex min-h-screen">
      {/* Navbar Component */}
      <Navbar />
      <div className="flex-1">
        {/* Routes */}
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/requests" element={<SubmitRequests />} />
          <Route path="/tickets" element={<Tickets />} />
          <Route path="/todos" element={<Todos />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
