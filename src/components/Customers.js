/* Necesitamos conectar el proyecto de React con el backend, mostrar un listado de los customers (no te preocupes por el diseño estético) */

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Customers() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    const urlApiCustomers =
      "http://tp2-analytics.azurewebsites.net/api/customers";
    fetch(urlApiCustomers)
      .then((response) => response.json())
      .then((data) => setCustomers(data));
  }, []);

  let index = 0;

  return customers.map((c) => {
    index++;
    return (
      <ul>
        <div>
          <Link to={`/Customer/${c._id}`}>{index + ". " + c.name}</Link>
        </div>
      </ul>
    );
  });
}
