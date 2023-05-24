import React, { useState, useEffect } from 'react';
import {  Link  } from 'react-router-dom';

const ListaCustomers = ({ customers }) => {
  return (
    <div>
      <h1>Lista de Customers</h1>
      <ul>
        {customers.map((customer) => (
          <li key={customer._id}>
            <Link to={`/customer/${customer._id}`}>{customer.username}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default ListaCustomers;