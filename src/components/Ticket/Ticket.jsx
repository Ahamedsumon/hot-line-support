import { GoDotFill } from "react-icons/go";
import { IoCalendarNumberOutline } from "react-icons/io5";
const Ticket = ({ ticket }) => {
  console.log(ticket);
  const { title, status, description, id, priority, customer, createdAt } =
    ticket;
  return (
    <div className="bg-white p-2 rounded-md shadow">
      <div className="flex justify-between items-center">
        <h2 className="text-[#001931] text-xl font-medium">{title}</h2>
        <p className="bg-[#B9F8CF] px-2 rounded-full flex items-center text-[#0B5E06] text-sm">
          <span className="text-[#02A53B]">
            <GoDotFill />
          </span>{" "}
          {status}
        </p>
      </div>
      <p className="py-2 text-[#627382]">{description}</p>
      <div className="flex justify-between items-center">
        <div className="flex gap-2">
          <p className="text-[#627382]">{id}</p>
          <p className="text-[#F83044]">{priority}</p>
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
