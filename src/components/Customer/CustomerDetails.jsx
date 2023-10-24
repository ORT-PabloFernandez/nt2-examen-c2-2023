import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';

function CustomerDetail() {
  const { id } = useParams();
  const [customerData, setCustomerData] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener los datos del cliente
    axios
      .get(`https://analyticsbackendort.azurewebsites.net/api/customers/${id}`)
      .then((response) => {
        setCustomerData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching customer data:', error);
      });
  }, [id]);

  return (
    <div>
      <h2>Detalles del Cliente</h2>
      {customerData ? (
        <div>
          <p><strong>Username:</strong> {customerData.username}</p>
          <p><strong>Nombre:</strong> {customerData.name}</p>
          <p><strong>Dirección:</strong> {customerData.address}</p>
          <p><strong>Fecha de Nacimiento:</strong> {customerData.birthdate}</p>
          <p><strong>Correo Electrónico:</strong> {customerData.email}</p>
          <p><strong>Cuentas:</strong></p>
          <ul>
            {customerData.accounts.map((account, index) => (
              <li key={index}>
                <Link to={`/customers/${id}/accounts/${account}`}>
                  {account}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Cargando datos del cliente...</p>
      )}
    </div>
  );
}

export default CustomerDetail;
