import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import Account from "./Account";

const CustomerDetails = () => {
  const { id } = useParams();
  const [customer, setCustomer] = useState(null); 

  useEffect(() => {
    fetch("https://analyticsbackendort.azurewebsites.net/api/customers")
      .then((response) => response.json())
      .then((data) => {
        const selectedCustomer = data.find((customer) => customer._id === id);
        if (selectedCustomer) {
          setCustomer(selectedCustomer);
        }
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!customer) {
    return <p>El cliente no se encuentra o el ID es inválido.</p>;
  }

  return (
    <div>
     
     <h3>{customer.username}</h3>
      <p>{customer.name}</p>
      <p>{customer.address}</p>
      <p>{customer.birthdate}</p>
      <p>{customer.email}</p>
      <ul>
        {customer.Accounts.map((account_id) => (
          <li key={account_id}>
            <Link to={`/account/${account_id}`}>Account {account_id}</Link>
          </li>
        ))}
      </ul>


         
    
    </div>
  );
};

export default CustomerDetails;