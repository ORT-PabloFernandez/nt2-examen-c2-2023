import CustomersList from "./CustomersList";
import { useState, useEffect } from "react";

export default function CustomersPage(props) {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const apiCustomers =
      "http://tp2-analytics.azurewebsites.net/api/customers?pageSize=20&page=1";

    fetch(apiCustomers)
      .then((response) => response.json())
      .then((data) => setCustomers(data));
      
}, []);



return (
    <div>
    <CustomersList Customers={customers} />
  </div>
  );
}