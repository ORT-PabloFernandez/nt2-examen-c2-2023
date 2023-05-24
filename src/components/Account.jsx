import { useParams } from "react-router-dom";

const Account = ({ accounts }) => {
  const { accountId } = useParams();
  const account = accounts.find((acc) => acc.account_id === parseInt(accountId));

  return (
    <div>
      <h1>Detalles de la cuenta</h1>
      {account && (
        <div>
          <h2>Account ID: {account.account_id}</h2>
          <h2>Limit: {account.limit}</h2>

          <h2>Productos:</h2>
          <ul>
        {account.products.map((product, index) => (
          <li key={index}>{product}</li>
        ))}
      </ul>
          
          
        </div>
      )}
    </div>
  );
};

export default Account;