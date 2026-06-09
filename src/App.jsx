import "./App.css";
import CustomerTickets from "./components/CustomerTickets/CustomerTickets";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
const fetchTickets = async () => {
  const res = await fetch("/ticketData.json");
  return res.json();
};
const ticketsPromise = fetchTickets();

function App() {
  return (
    <>
      <Header></Header>
      <Hero></Hero>
      <CustomerTickets ticketsPromise={ticketsPromise}></CustomerTickets>
    </>
  );
}

export default App;
