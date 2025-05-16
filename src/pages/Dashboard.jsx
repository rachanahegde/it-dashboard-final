import { useContext } from "react";
import { Ticket } from "../components/Ticket";
import { TicketContext } from "../contexts/TicketContext";
import { TaskContext } from "../contexts/TaskContext";
import { Task } from "../components/Task";
import { Update } from "../components/Update";
import updateData from "../data/updates.json";

export default function Dashboard() {
  // Get tickets data (destructure since context is an object)
  const { tickets } = useContext(TicketContext);

  // Filter to get the tickets with open status
  let openTickets = tickets.filter((ticket) => ticket.status === "Open");

  // Get tasks data
  const { tasks } = useContext(TaskContext);

  // Filter to get pending tasks (check if task.completed is false)
  let pendingTasks = tasks.filter((task) => task.completed === false);

  return (
    <div className="lg:pl-8 pt-6 bg-light-grey w-full">
      <h1 className="text-xl md:text-2xl font-red-hat mt-16 w-xs mx-auto lg:w-full lg:mt-0">
        Welcome back! Please view open tickets, pending tasks and updates below.
      </h1>
      {/* Top half of dashboard */}
      {/* Tickets Section */}
      <div className="mt-8 bg-white shadow-md rounded-md w-xs mx-auto lg:mx-0 lg:w-[1120px] font-montserrat">
        <h1 className="text-lg font-semibold py-6 text-center">
          Open Tickets: {openTickets.length}
        </h1>
        {/* Set up grid columns */}
        <div className="grid grid-cols-3 text-md font-semibold text-center py-4 items-center">
          <p className=""> Issue</p>
          <p className=""> Status</p>
          <p className=""> Created</p>
        </div>

        {/* Grid rows */}
        <div className="space-y-4 pb-6 w-2xs lg:w-full max-w-5xl mx-auto">
          {/* Display staff members by looping through array using map */}
          {tickets.map((ticket) => (
            <Ticket
              key={ticket.id}
              issue={ticket.issue}
              status={ticket.status}
              created={ticket.created}
              styles={
                "grid grid-cols-3 bg-medium-blue text-sm lg:text-md text-center px-2 lg:px-4 py-3 items-center rounded-md"
              }
            />
          ))}
        </div>
      </div>

      {/* Bottom half of dashboard */}
      <div className="flex flex-col space-y-6 lg:space-y-0 lg:flex-row pt-8 pb-10 font-montserrat">
        {/* Render the tasks components */}
        <div className=" bg-white shadow-md rounded-md w-xs mx-auto lg:mx-0 lg:w-[550px] lg:mr-5">
          <h1 className="text-lg font-semibold py-6 text-center">
            Pending Tasks: {pendingTasks.length}
          </h1>
          <div className="py-2 ml-4 lg:ml-10 flex flex-row space-x-18 lg:space-x-40 text-md text-center font-semibold">
            <p className="">Id</p>
            <p className=""> Title</p>
            <p className=""> Completed</p>
          </div>
          <div className="ml-4 lg:ml-10 mt-2 space-y-4 pb-6 pt-2 lg:pt-4 text-center">
            {/* Display pending tasks by looping through array using map */}
            {pendingTasks.map((task) => (
              <Task
                key={task.id}
                id={task.id}
                title={task.title}
                completed={task.completed}
                styles={"bg-medium-blue px-4 pt-4 rounded-md"}
              />
            ))}
          </div>
        </div>

        {/* Render the updates components */}
        <div className="bg-white shadow-md rounded-md w-xs mx-auto lg:mx-0 lg:w-[550px]">
          <h1 className="text-lg font-semibold py-6 text-center">
            Latest Updates: {updateData.length}
          </h1>
          <div className="py-2 ml-8 lg:ml-10 flex flex-row space-x-24 lg:space-x-40 text-md text-center font-semibold">
            <p className=""> Title</p>
            <p className=""> Description</p>
          </div>
          <div className="ml-4 lg:ml-10 lg:mt-2 space-y-4 pb-6 pt-4 text-center">
            {/* Display pending tasks by looping through array using map */}
            {updateData.map((update) => (
              <Update
                key={update.id}
                title={update.title}
                description={update.description}
                styles={"bg-medium-blue px-4 pt-4 rounded-md"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
