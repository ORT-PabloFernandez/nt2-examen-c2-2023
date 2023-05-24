import Home from "./components/Home";
import Customer from "./components/Customer";
import Account from "./components/Account";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<Customer />} />
        <Route path="/account/:accountId" element={<Account />} />
      </Routes>
    </BrowserRouter>
    //http://tp2-analytics.azurewebsites.net/api/customers
    // con id se referencia un customer con /
    //http://tp2-analytics.azurewebsites.net/api/accounts
    //account id se referencia una cuenta con/
  );
}

export default App;
