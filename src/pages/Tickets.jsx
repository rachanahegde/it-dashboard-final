import { useContext } from "react";
import { Ticket } from "../components/Ticket";
import { TicketContext } from "../contexts/TicketContext";

export default function Tickets() {
  const { tickets } = useContext(TicketContext);

  return (
    <div className="pt-6 bg-light-grey w-full h-screen pb-10">
      <h1 className="text-xl font-bold pl-22 lg:pl-0 w-full max-w-5xl mx-auto font-red-hat">
        List of Tickets
      </h1>

      <div className="mt-8 pt-4 bg-white shadow-md rounded-md w-xs md:w-2xl lg:w-full lg:max-w-5xl mx-auto font-montserrat">
        {/* Set up grid columns */}
        <div className="grid grid-cols-3 text-md md:text-lg font-semibold text-center py-3 md:py-4 items-center">
          <p className=""> Issue</p>
          <p className=""> Status</p>
          <p className=""> Created</p>
        </div>

        {/* Grid rows */}
        <div className="space-y-4 mt-2 pb-6 w-2xs md:w-xl lg:w-full lg:max-w-4xl mx-auto">
          {/* Display staff members by looping through array using map */}
          {tickets.map((ticket) => (
            <Ticket
              key={ticket.id}
              issue={ticket.issue}
              status={ticket.status}
              created={ticket.created}
              styles={
                "grid grid-cols-3 md:text-md bg-medium-blue text-center px-4 py-3 items-center rounded-md text-xs"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}
