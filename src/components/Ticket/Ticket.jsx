import { GoDotFill } from "react-icons/go";
import { IoCalendarNumberOutline } from "react-icons/io5";
const Ticket = ({ ticket, handleTicketsClick, cardDisabled }) => {
  const { title, status, description, id, priority, customer, createdAt } =
    ticket;
  return (
    <div
      onClick={() => handleTicketsClick(ticket)}
      className="bg-white p-2 rounded-md shadow"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-[#001931] text-xl font-medium">{title}</h2>
        <p
          className={`px-2 rounded-full flex items-center  text-sm ${status === "Open" ? "bg-[#B9F8CF] text[#0B5E06]" : "bg-[#F8F3B9] text-[#9C7700]"}`}
        >
          <span
            className={`${status === "Open" ? "text-[#02A53B]" : "text[#FEBB0C]"} text-xl`}
          >
            <GoDotFill />
          </span>{" "}
          {status}
        </p>
      </div>
      <p className="py-2 text-[#627382]">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <p className="text-[#627382]">{id}</p>
          <p
            className={`${priority === "HIGH PRIORITY" ? "text-[#F83044]" : "text-yellow-400"}`}
          >
            {priority}
          </p>
        </div>
        <div className="flex md:flex-col lg:flex-row gap-2 text-[#627382]">
          <p>{customer}</p>
          <p className="flex items-center gap-1">
            <span>
              <IoCalendarNumberOutline />
            </span>{" "}
            {createdAt}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Ticket;
