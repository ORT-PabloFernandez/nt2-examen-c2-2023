import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './page/home';
import Customer from './page/customer';
import Account from './page/account';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/customer/:id" element={<Customer />} />
        <Route path="/account/:id" element={<Account />} />
      </Routes>
    </BrowserRouter> 
  );
}

export default App;