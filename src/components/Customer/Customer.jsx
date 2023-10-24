import React from 'react';
import { Link } from 'react-router-dom';
import './Customer.css'

function Customer({ customerData }) {
  return (
    <div className="customer-container">
      <h2 className="customer-title">Detalles del Cliente</h2>
      <p><strong>Username:</strong> {customerData.username}</p>
      <p><strong>Nombre:</strong> {customerData.name}</p>
      <p><strong>Dirección:</strong> {customerData.address}</p>
      <p><strong>Fecha de Nacimiento:</strong> {customerData.birthdate}</p>
      <p><strong>Correo Electrónico:</strong> {customerData.email}</p>
      <p><strong>Cuentas:</strong></p>
      <ul className="customer-accounts">
        {customerData.accounts.map((account, index) => (
          <li key={index} className="customer-list-item">
            <Link to={`/customers/${customerData._id}/accounts/${account}`}>{account}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}


export default Customer;
