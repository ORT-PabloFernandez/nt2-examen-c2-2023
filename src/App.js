import logo from "./logo.svg";
import "./App.css";
import Customers from "./componentes/Customers";
import CustomerPage from "./componentes/CustomerPage";
import Customer from "./componentes/Customer";
import CustomerDetails from "./componentes/CustomerDetails";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Account from "./componentes/Account"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/customerpage" element={<CustomerPage />} />
        <Route path="/customers/:id" element={<CustomerDetails />} />
        <Route path="/account/:id" element={<Account />} />
      

      </Routes>
    </BrowserRouter>
  );
}

export default App;
