import { BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerList from './components/Customer/CustomerList';
import CustomerDetails from './components/Customer/CustomerDetails';
import AccountDetail from './components/Account/AccountDetail'; 


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/customers" element={<CustomerList />} />
        <Route path="/customers/:id" element={<CustomerDetails />} />
        <Route path="/customers/:customerId/accounts/:accountId" element={<AccountDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
