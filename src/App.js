//import logo from "./logo.svg";
import "./App.css";
import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import CustomerPage from "./components/Customer/CustomerPage";
import Account from "./components/Account/Accounts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="container">
              <div className="card">
                <div className="card-body">
                  <h1>Home</h1> <Link to="/customers">Customers</Link>
                </div>
              </div>
            </div>
          }
        />
        <Route path="/Customers" element={<CustomerPage />} />
        <Route path="/Accounts/:id" element={<Account />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
