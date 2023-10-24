import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerPage from './components/CustomerPage'
import Accounts from './components/Accounts';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = { <h1>Clientes</h1> } />
        <Route path="/customers" element = { <CustomerPage /> } />
        <Route path="/customers/:id" element= {<Accounts />} />
      </Routes>
    </BrowserRouter>    
  );
}

export default App;