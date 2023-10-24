import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function AccountDetail() {
  const { id } = useParams();
  const [accountData, setAccountData] = useState(null);

  useEffect(() => {
    // Realiza una solicitud GET a la API para obtener los datos de la cuenta
    axios
      .get(`https://analyticsbackendort.azurewebsites.net/api/accounts/${id}`)
      .then((response) => {
        setAccountData(response.data);
      })
      .catch((error) => {
        console.error('Error fetching account data:', error);
      });
  }, [id]);
  

  return (
    <div>
      <h2>Detalles de la Cuenta</h2>
      {accountData ? (
        <div>
          <p><strong>Límite:</strong> {accountData.limit}</p>
          <p><strong>Productos:</strong> {accountData.products.join(', ')}</p>
        </div>
      ) : (
        <p>Cargando datos de la cuenta...</p>
      )}
    </div>
  );
}

export default AccountDetail;
