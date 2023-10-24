import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Customer from './Customer'; // Importa el componente Customer

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
      {customerData ? (
        // Renderiza el componente Customer con los datos del cliente
        <Customer customerData={customerData} />
      ) : (
        <p>Cargando datos del cliente...</p>
      )}
    </div>
  );
}

export default CustomerDetail;
