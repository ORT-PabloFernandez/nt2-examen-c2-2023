import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../Estilos/Customer.css";

const Customer = (props) => {
  const { id } = useParams();
  const [account, setAccount] = useState([]);

  useEffect(() => {
    fetch(`https://analyticsbackendort.azurewebsites.net/api/accounts/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setAccount(data);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="container">
      <div className="card">
        <ul key={account._id} className="card-body">
          <li>
            <strong>limit:</strong> {account.limit}
          </li>
          <li>
            <strong>products:</strong> {JSON.stringify(account.products)}
          </li>
        </ul>
        <Link to={`/customers`}>Go Back</Link>
      </div>
    </div>
  );
};

export default Customer;
