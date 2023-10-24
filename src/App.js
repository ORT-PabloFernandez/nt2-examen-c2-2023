import './App.css';
import CustomerAccount from "./components/Customer/CustomerAccount";
import CustomerPage from "./components/Customer/CustomerPage";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<h1>Home</h1>} />
        <Route path="/customers" element = {<CustomerPage />} />
        <Route path="/customers/:id" element = {<CustomerAccount />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
