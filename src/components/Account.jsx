import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Account = (props) => {
  const { _id } = useParams();
  const [account, setAccount] = useState({});

  useEffect(() => {
    fetch("https://analyticsbackendort.azurewebsites.net/api/accounts")
      .then((response) => response.json())
      .then((data) =>
        setAccount(data.find((account) => account.account_id === _id))
      )
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <p>{account.limit}</p>
      <p>
        {account.products.map((products) => {
          return <p>{products}</p>;
        })}
      </p>
    </div>
  );
};

export default Account;
