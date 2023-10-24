
import { useState } from "react";
import { Link } from "react-router-dom";

const Account = (props) => {
    const [accounts, setAccounts] = useState([]);
    const [accountToFind, setAccountToFind] = useState(null);

    useEffect(()=>{

        fetch('https://analyticsbackendort.azurewebsites.net/api/accounts')
        .then(response => response.json())
        .then(data=> {
            setAccounts(data);
        })
        .catch(error => console.log(error));
    }, []);

     useEffect(() => {
    if (accounts.length > 0) {
      // Buscar la cuenta en el array de cuentas
      const foundAccount = accounts.find(account => account._id === accountId);
      setAccountToFind(foundAccount);
    }
  }, [accounts, accountId]);

  if (!accountToFind) {
    return <p>Cuenta no encontrada.</p>;
  }

  return (
    <div>
      <h3>Detalles de la cuenta</h3>
      <p>Nombre: {accountToFind.name}</p>
      <p>Límite: {accountToFind.limit}</p>
      {/* Otros detalles de la cuenta */}
    </div>
  );
    return (
    <li>
      <div>
        <Link to={`/accounts/${props.account_id}`}>
          <div>
            
          <h3>{props.Limit}</h3>
          <h3>{props.Products.join(', ')}</h3>
          
          
        

          </div>
        </Link>
      </div>
    </li>
  );
};

export default Account;