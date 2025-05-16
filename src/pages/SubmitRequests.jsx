import { TicketForm } from "../components/TicketForm";

export default function Requests() {
  return (
    <div className="lg:pl-8 pt-6 bg-light-grey w-full h-screen pb-10">
      <h1 className="text-xl md:text-2xl font-bold mb-10 md:mb-8 pl-22 lg:pl-0 lg:ml-8 font-red-hat">
        Submit New IT Request
      </h1>
      {/* Form for submitting new ticket */}
      <TicketForm />
    </div>
  );
}
