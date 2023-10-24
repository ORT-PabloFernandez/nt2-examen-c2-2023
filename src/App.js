import "./App.css";
import CustomerPage from "./components/CustomerPage";
import Account from "./components/Account";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CustomerPage />} />
        <Route path="/customers" element={<CustomerPage />} />
        <Route path="/customers/account/:accountnumber" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
