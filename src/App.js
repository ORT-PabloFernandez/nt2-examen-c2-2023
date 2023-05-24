import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CustomersPage from "./components/CustomersPage";
import Account from "./components/Account";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/customersPage" element={<CustomersPage />} />
      <Route path="/customersPage/accountDetails/:id" element={<Account/>} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
