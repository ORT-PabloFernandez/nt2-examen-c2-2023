import CustomersList from "./CustomersList";
import { useState, useEffect } from "react";

const CustomerPage = (props) => {
  const [customers, setCustomers] = useState([]);

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

  return (
    <div>
      <CustomersList Customers={customers} />
    </div>
  );
};

export default CustomerPage;
