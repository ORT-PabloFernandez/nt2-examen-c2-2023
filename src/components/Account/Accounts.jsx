import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

const Account = (props) => {
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
    <div>
      <div>
        <ul key={account._id}>
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

export default Account;
