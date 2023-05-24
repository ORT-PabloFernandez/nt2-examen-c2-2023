import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Customer = ({ customers, accounts }) => {
  const { id } = useParams();
  const customer = customers.find((c) => c._id === id);

  return (
    <div>
      <h1>Detalles del Customer</h1>
      {customer && (
        <div>
          <h2>Username: {customer.username}</h2>
          <h2>Name: {customer.name}</h2>
          <h2>Address: {customer.address}</h2>
          <h2>Birthdate: {customer.birthdate}</h2>
          <h2>Email: {customer.email}</h2>
          
          <ul>
            {customer.accounts.map((accountId) => {
              const account = accounts.find((acc) => acc.account_id === accountId);
              return (
                <li key={accountId}>
                  <Link to={`/accounts/${accountId}`}>
                    Account ID: {accountId} 
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Customer;