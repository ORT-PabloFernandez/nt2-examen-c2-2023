import { Link } from 'react-router-dom';
const Customer = ({ customers }) => {
  return (
    <div>
      <ul className="users-list">
        {customers.map((customer, index) => (
          <div key={index}>
            <h4>Username: {customer.username}</h4>
            <p>Name: {customer.name}</p>
            <p>Address: {customer.address}</p>
            <p>Birthdate: {customer.birthdate}</p>
            <p>Email: {customer.email}</p>
            <h4>Accounts:</h4>
            <ul>
              {customer.accounts.map((account, accountIndex) => (
                <li key={accountIndex}>
                  <Link to={`/accounts/${account}`}>{account}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Customer;
