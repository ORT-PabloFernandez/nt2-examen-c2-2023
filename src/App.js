import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CustomerPage from './components/customers/CustomersPage';
import Account from './components/customers/account/Account';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/customers' element= {<CustomerPage />} />
        <Route path='/customers/account/:id' element= {<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
