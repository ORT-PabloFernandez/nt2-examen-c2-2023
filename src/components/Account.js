import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Account = () => {
  const params = useParams();
  const [account, setAccount] = useState({});
  const [products, setProducts] = useState([]);

  const getAccount = async () => {
    const resp = await axios.get(
      `http://tp2-analytics.azurewebsites.net/api/accounts/${params.accountId}`
    );
    console.log(resp.data);
    setAccount(resp.data);
    setProducts(resp.data.products);
  };

  useEffect(() => {
    getAccount();
  }, []);

  return (
    <div className="App-header">
      <h4>Account information</h4>
      Limit : {account.limit}
      <hr></hr>
      <h5>Products :</h5>
      <ul style={{ listStyleType: "none" }}>
        {products.map((p, index) => {
          return (
            <>
              <li>{p}</li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Account;
