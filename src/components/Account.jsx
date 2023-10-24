import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Account = () => {
  const [account, setAccount] = useState(null);
  const { accountnumber } = useParams();

  useEffect(() => {
    fetch(`https://analyticsbackendort.azurewebsites.net/api/accounts`)
      .then((response) => response.json())
      .then((data) => {
        const foundAccount = data.find(
          (account) => account.account_id == accountnumber
        );
        if (foundAccount) {
          setAccount(foundAccount);
        } else {
          setAccount(null);
        }
      })
      .catch((error) => console.error("Error al cargar datos", error));
  }, [accountnumber]);

  return (
    <div>
      {account ? (
        <div>
          <h1>Limit: {account.limit}</h1>
          <h1>Products: {account.products}</h1>
        </div>
      ) : (
        <p>
          No se encontró ninguna cuenta con el número de cuenta especificado.
        </p>
      )}
    </div>
  );
};

export default Account;
