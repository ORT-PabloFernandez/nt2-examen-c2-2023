import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CustomerList() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    axios.get('https://analyticsbackendort.azurewebsites.net/api/customers/')
      .then((response) => {
        setCustomers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching customer data:', error);
      });
  }, []);

  const customersWithoutLowLimit = customers.filter((customer) => !customerHasLowLimit(customer));
  const customersWithLowLimit = customers.filter((customer) => customerHasLowLimit(customer));

  return (
    <div>
      <h2>Lista de clientes</h2>
      <ul>
        {customersWithoutLowLimit.map((customer) => (
          <li key={customer._id}>
            <Link to={`/customers/${customer._id}`}>{customer.name}</Link>
          </li>
        ))}
      </ul>

      <h2>Lista de clientes con limite menor a 10.000</h2>
      <ul>
        {customersWithLowLimit.map((customer) => (
          <li key={customer._id}>
            <Link to={`/customers/${customer._id}`}>{customer.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function customerHasLowLimit(customer) {
  return customer.accounts.some((account) => account.limit < 10000);
}

export default CustomerList;
