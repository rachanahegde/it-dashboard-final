import { useContext, useState, useEffect } from "react";
import { TicketContext } from "../contexts/TicketContext";

// Ideally, this would be more foolproof because eventually, we could run out of 6 digit random number combinations
function generateRandomId() {
  // Generate a random number that is 6 digits long
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export const TicketForm = () => {
  // Get access to addTicket function
  const { tickets, addTicket } = useContext(TicketContext);

  // To indicate to user that form data is being submitted
  const [loading, setLoading] = useState(false);

  // To indicate to user that form data was submitted successfully
  const [success, setSuccess] = useState(false);

  // Store form values
  const [formData, setFormData] = useState({
    user: "",
    issueType: "",
    description: "",
    file: null,
  });

  // Handle changes for text, dropdown, and textarea fields
  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handle file input separately
  function handleFileChange(e) {
    setFormData((prev) => ({
      ...prev,
      file: e.target.files[0], // Store the selected file object
    }));
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent page reload
    setLoading(true); // Add loading state to show "Submitting..." message
    setSuccess(false); // Reset success state

    // Generate unique id per ticket
    let newId;
    do {
      newId = generateRandomId();
    } while (tickets.some((ticket) => ticket.id === newId));

    // Get current time and date
    let date_time = new Date().toLocaleString();

    let newTicket = {
      ...formData,
      id: newId,
      status: "Open",
      created: date_time,
    };

    // Use setTimeout to delay addTicket()
    setTimeout(() => {
      // Add new support ticket
      addTicket(newTicket);

      // Reset form fields
      setFormData({
        user: "",
        issueType: "",
        description: "",
        file: null,
      });

      setLoading(false); // Reset loading state that shows Submitting..
      setSuccess(true); // Show success message
      setTimeout(() => setSuccess(false), 4000); // Message disappears
    }, 2000);
  }

  // Check if tickets were updated by logging to console
  useEffect(() => {
    console.log("Tickets updated:", tickets);
  }, [tickets]);

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="w-xs md:w-2xl ml-8 bg-white text-lg font-semibold flex flex-col space-y-4 md:space-y-5 font-montserrat md:items-center"
      >
        {/* User text input */}
        <div className="pl-5 pt-5">
          <label className="">
            User:
            <input
              className="ml-4 w-[220px] md:w-2xs md:ml-20 px-2 border rounded"
              type="text"
              name="user"
              value={formData.user}
              onChange={handleChange}
            />
          </label>
        </div>

        {/* Issue type dropdown */}
        <div className="pl-5">
          <label>
            Issue Type:
            <select
              className="ml-2 w-[170px] md:ml-7 md:w-2xs px-2 border rounded"
              name="issueType"
              value={formData.issueType}
              onChange={handleChange}
            >
              <option value="">Select an issue</option>
              <option value="bug">Bug</option>
              <option value="feature">Feature Request</option>
              <option value="other">Other</option>
            </select>
          </label>
        </div>

        {/* Description textarea */}
        <div className="pl-5 flex flex-col space-y-2">
          <label className="">Description:</label>
          <textarea
            className="px-2 py-1 border rounded w-[280px] md:w-[420px]"
            name="description"
            value={formData.description}
            onChange={handleChange}
          />
        </div>

        {/* File input */}
        <div className="pl-5 flex flex-col space-y-2">
          <label>File:</label>
          <input
            className="px-2 border rounded w-[280px] md:w-[420px]"
            type="file"
            name="file"
            onChange={handleFileChange}
          />
        </div>

        {/* Submit button */}
        <button
          className="rounded-md px-3 py-1 text-sm md:text-lg bg-light-blue text-black hover:bg-medium-blue w-4xs md:w-[200px] block mx-auto mt-3 mb-4"
          type="submit"
          disabled={loading}
        >
          {loading ? "Submitting..." : "Submit Request"}
        </button>
      </form>

      {success && (
        <div className="text-light-green text-xl font-semibold mt-4">
          <p>Ticket submitted successfully! </p>
        </div>
      )}
    </>
  );
};
