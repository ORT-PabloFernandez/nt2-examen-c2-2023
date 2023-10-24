import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Account = () => {
  const { accounts } = useParams();
  const [account, setAccount] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadAccount = async () => {
      try {
        const response = await fetch(`https://analyticsbackendort.azurewebsites.net/api/accounts`);
        if (!response.ok) {
          throw new Error();
        }
        const data = await response.json();
        const selectedAccount = data.find((acc) => acc.account_id == accounts);
        if (!selectedAccount) {
          setError("La cuenta no se encontró.");
        } else {
          setAccount(selectedAccount);
        }
      } catch (error) {
        setError("Ocurrió un error al cargar la cuenta.");
        console.log(error);
      }
    };

    loadAccount();
  }, [account]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!account) {
    return <div>Cargando...</div>;
  }

  const accountLimit = account.limit;
  return (
    <>
      <h3>{account.limit}</h3>
      {accountLimit < 10000 ? <p style={{color:"red"}}>Account Limit es menor que 10,000</p> : null}
      {account.products.map((product, productIndex) => (
        <li key={productIndex}>{product}</li>
      ))}
    </>
  );
};

export default Account;
