import { useState, useEffect } from "react";
import CustomersList from "./CustomersList";

const Customers = (props) => {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    fetch("https://analyticsbackendort.azurewebsites.net/api/customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomers(data);
      })
      .catch((error) => console.log("Error al cargar datos", error));
  }, []);

  return (
    <div>
      <CustomersList Customers={customers} />
    </div>
  );
};

export default Customers;
