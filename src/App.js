import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerPage from "./Components/CustomersPage";
import Account from "./Components/Account";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/CustomersPage" element={<CustomerPage />} />
        <Route path="/Account/:id" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
