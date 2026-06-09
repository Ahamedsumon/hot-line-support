import { useState } from "react";
import "./App.css";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import { toast, ToastContainer } from "react-toastify";
const fetchTickets = async () => {
  const res = await fetch("/ticketData.json");
  return res.json();
};
const ticketsPromise = fetchTickets();

function App() {
  const [addToTaskStatusTickets, setaddToTaskStatusTickets] = useState([]);
  const [resolvedCount, setResolvedCount] = useState(0);
  const [taskTitles, setTaskTitles] = useState([]);
  const [cardDisabled, setCardDisabled] = useState(false);
  const handleTicketsClick = (ticket) => {
    const newTicket = [...addToTaskStatusTickets, ticket];
    setaddToTaskStatusTickets(newTicket);

    toast("Ticket added to the task status");
    setCardDisabled(true);
  };
  const handleCompleteTask = (taskTitle) => {
    const addNewTitle = [...taskTitles, taskTitle];
    const updateTickets = addToTaskStatusTickets.filter(
      (task) => task.title !== taskTitle,
    );
    setaddToTaskStatusTickets(updateTickets);
    setTaskTitles(addNewTitle);
    setResolvedCount((prev) => prev + 1);
    toast("Task Successfully Completed!!");
    console.log("Task completed");
  };
  return (
    <>
      <Header></Header>
      <Hero
        addToTaskStatusTickets={addToTaskStatusTickets}
        resolvedCount={resolvedCount}
      ></Hero>
      <CustomerTickets
        ticketsPromise={ticketsPromise}
        handleTicketsClick={handleTicketsClick}
        addToTaskStatusTickets={addToTaskStatusTickets}
        handleCompleteTask={handleCompleteTask}
        taskTitles={taskTitles}
        cardDisabled={cardDisabled}
      ></CustomerTickets>
      <ToastContainer />
    </>
  );
}

export default App;
