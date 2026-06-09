import { use } from "react";
import Ticket from "../Ticket/Ticket";

const CustomerTickets = ({ ticketsPromise }) => {
  const tickets = use(ticketsPromise);

  return (
    <div className="flex flex-col md:flex-row gap-2 max-w-[95%] mx-auto">
      <div className=" basis-9/12">
        <h2 className="text-2xl pb-4">Customer Tickets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {tickets.map((ticket) => (
            <Ticket key={ticket.id} ticket={ticket}></Ticket>
          ))}
        </div>
      </div>
      <div className=" basis-3/12">
        <h2 className="text-xl lg:text-2xl pb-2">Task Status</h2>
      </div>
    </div>
  );
};

export default CustomerTickets;
