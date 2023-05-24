/* Una vez realizado el punto anterior necesitamos crear un componente llamado Customer que muestre los siguientes datos del cliente:
"username", "name", "address", "birthdate", "email", "accounts" No te preocupes por el diseño estético, pero si por la "prolijidad" */
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Customer() {
  const { id } = useParams();
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    const urlApiCustomers =
      "http://tp2-analytics.azurewebsites.net/api/customers/" + id;
    fetch(urlApiCustomers)
      .then((response) => response.json())
      .then((data) => setCustomer(data));
  }, []);

  return (
    <div>
      <h3>Nombre de Usuario: {customer.username}</h3>
      <h3>Nombre Completo: {customer.name}</h3>
      <h3>Direccion: {customer.address}</h3>
      <h3>Fecha de Nacimiento: {customer.birthdate}</h3>
      <h3>Email: {customer.email}</h3>
      <h3>
        Numero de cuentas
        {/* {customer.accounts.map((a) => {
          return <h3>{a}</h3>;
        })} */}
      </h3>
    </div>
  );
}
