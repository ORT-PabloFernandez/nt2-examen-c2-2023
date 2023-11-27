import CustomerList from "./CustomerList";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const CustomerPage = (props) => {
  const [customers, setCustomers] = useState([]);
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    fetch(
      "https://analyticsbackendort.azurewebsites.net/api/customers?pageSize=10&page=2"
    )
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    fetch("https://analyticsbackendort.azurewebsites.net/api/accounts")
      .then((response) => response.json())
      .then((data) => {
        setAccounts(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <CustomerList Customers={customers} Accounts={accounts} />
      <Link to={`/`}>Go Back</Link>
    </div>
  );
};

export default CustomerPage;
