import CustomerList from "./CustomerList";
import { useState, useEffect } from "react";

const CustomerPage = (props) => {
  const [customers, setCustomer] = useState([]);

  useEffect(() => {
    fetch("https://analyticsbackendort.azurewebsites.net/api/Customers")
      .then((response) => response.json())
      .then((data) => {
        setCustomer(data);
        console.log(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <CustomerList Customers={customers} />
    </div>
  );
};

export default CustomerPage;
