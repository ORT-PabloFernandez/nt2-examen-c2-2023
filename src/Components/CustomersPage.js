import { useState, useEffect } from "react";
import CustomersList from "./CustomersList";

export default function CustomersPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    /* const urlApiCustomers =
      "https://tp2-analytics.azurewebsites.net/api/customers?pageSize=20&page=1"; */
    const urlApiCustomers =
      "https://tp2-analytics.azurewebsites.net/api/customers";
    fetch(urlApiCustomers)
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  return (
    <div>
      <h2>************* COSTUMERS LIST ****************</h2>
      <CustomersList Customers={customers} />
    </div>
  );
}
