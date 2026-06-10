import { use, useState } from "react";
import Ticket from "../Ticket/Ticket";
import TaskStatus from "../TaskStatus/TaskStatus";
import ResolvedTask from "../ResolvedTask/ResolvedTask";

const CustomerTickets = ({
  ticketsPromise,
  handleTicketsClick,
  addToTaskStatusTickets,
  handleCompleteTask,
  taskTitles,
  cardDisabled,
}) => {
  const loadTickets = use(ticketsPromise);
  const [updateTasksList, setUpdateTasksList] = useState([]);
  const [removeTitles, setRemoveTitles] = useState([]);
  const removeTaskList = (title) => {
    setRemoveTitles((prev) => [...prev, title]);
    const updateTask = updateTasksList.filter(
      (ticket) => ticket.title !== title,
    );
    setUpdateTasksList(updateTask);
  };
  const tickets = loadTickets.filter(
    (ticket) => !removeTitles.includes(ticket.title),
  );

  // const updateTickets = tickets.filter(ticket => ticket.title !== taskTitles);

  // console.log(updateTickets);

  return (
    <div className="flex flex-col md:flex-row gap-2 max-w-[95%] mx-auto">
      <div className=" basis-9/12">
        <h2 className="text-2xl pb-4">Customer Tickets</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {tickets.map((ticket) => (
            <Ticket
              key={ticket.id}
              ticket={ticket}
              handleTicketsClick={handleTicketsClick}
              cardDisabled={cardDisabled}
            ></Ticket>
          ))}
        </div>
      </div>
      <div className=" basis-3/12">
        <h2 className="text-xl lg:text-2xl pb-4">Task Status</h2>
        <div className="flex flex-col gap-3">
          <p className="text-xs">Select a ticket to add to Task Status</p>
          {addToTaskStatusTickets.map((task) => (
            <TaskStatus
              key={task.id}
              task={task}
              handleCompleteTask={handleCompleteTask}
              removeTaskList={removeTaskList}
            ></TaskStatus>
          ))}

          <ResolvedTask taskTitles={taskTitles}></ResolvedTask>
        </div>
      </div>
    </div>
  );
};

export default CustomerTickets;
