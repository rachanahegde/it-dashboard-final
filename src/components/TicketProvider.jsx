import { TicketContext } from "../contexts/TicketContext";
import initialTickets from "../data/tickets.json";
import { useState } from "react";

// Create ticket provider component
export const TicketProvider = ({ children }) => {
  const [tickets, setTickets] = useState(initialTickets);

  // Update tickets
  const updateTicket = (id, updatedData) => {
    setTickets((tickets) =>
      tickets.map((ticket) =>
        ticket.id === id ? { ...ticket, ...updatedData } : ticket
      )
    );
  };

  // Add new support ticket
  const addTicket = (newTicket) => {
    setTickets((tickets) => [...tickets, newTicket]);
  };

  // I.e. to add new ticket you can do: addTicket({ id: 3, issueType: 'New software request' });

  return (
    <TicketContext.Provider value={{ tickets, updateTicket, addTicket }}>
      {children}
    </TicketContext.Provider>
  );
};
