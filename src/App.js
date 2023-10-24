import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerPage from "./components/CustomerPage";
import Account from "./components/Accounts/Accounts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Clientes</h1>} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/accounts/:id" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
