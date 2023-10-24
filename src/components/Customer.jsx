import React from 'react';

const Customer = ({props}) => {
  return (
    <div>
      <h2>Username: {props.username}</h2>
      <p>Name: {props.name}</p>
      <p>Addres: {props.address}</p>
      <p>Birthdate: {props.birthdate}</p>
      <p>Email: {props.email}</p>
      <ul>
        {props.accounts.map((account, index) => (
          <li key={index}>{account}</li>
        ))}
      </ul>
    </div>
  );
};



export default Customer;
