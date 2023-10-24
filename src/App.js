import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home"
import CustomersPage from "./components/CustomersPage"
import Account from "./components/Account"
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/customers" element={<CustomersPage/>} />
        <Route path="/customers/accounts/:id" element={<Account />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;
