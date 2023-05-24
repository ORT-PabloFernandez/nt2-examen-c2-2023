import React, { useEffect, useState } from 'react';
import ListaCustomers from './components/ListaCustomers';
import Customer from './components/Customer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Account from './components/Account';

function App() {
  const [customers, setCustomers] = useState([]);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch('http://tp2-analytics.azurewebsites.net/api/customers')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.error('Error fetching customers:', error));
      
      fetch('http://tp2-analytics.azurewebsites.net/api/accounts')
      .then(response => response.json())
      .then(data => setAccounts(data))
      .catch(error => console.error('Error fetching customers:', error));
  }, []);

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<ListaCustomers customers={customers}/>}/>
      <Route path="/customer/:id" element={<Customer customers={customers} accounts={accounts}/>}/>
      <Route path="/accounts/:accountId" element={<Account accounts={accounts} />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
