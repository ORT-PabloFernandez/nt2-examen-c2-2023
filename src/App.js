import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Customers from "./components/Customers";
import Customer from "./components/Customer";
import Accounts from "./components/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Customers/" element={<Customers></Customers>} />
        <Route path="/Customer/" element={<Customer />} />
        <Route path="/Customer/:id" element={<Customer />} />
        <Route path="Accounts/:id" element={<Accounts />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
