/* Tenemos que crear un componente Account que muestre detalles de la cuenta, limit y products . 
Para esto deberías convertir en un link el numero de cuenta en el componente Customer, 
para que haciendo clic en ese link se redirija a una pagina con la información de la cuenta. */

import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Accounts() {
  const { id } = useParams();
  const [account, setAccount] = useState([]);

  useEffect(() => {
    const urlApiAccounts =
      "http://tp2-analytics.azurewebsites.net/api/accounts/" + id;
    fetch(urlApiAccounts)
      .then((response) => response.json())
      .then((data) => setAccount(data));
  }, []);

  return (
    <div>
      <h3>Numero de cuenta: {account.account_id}</h3>
      <h3>Limite: {account.limit}</h3>
      {/* {account.products.map((p) => {
        return <h3>{p.toString}</h3>;
      })} */}
    </div>
  );
}
