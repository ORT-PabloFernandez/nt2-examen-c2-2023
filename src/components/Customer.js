import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Customer = () => {
  const params = useParams();
  const [customer, setCustomer] = useState({});
  const [accounts, setAccounts] = useState([]);
  const [limitFlag, setLimitFlag] = useState(false);

  const getCustomer = async () => {
    const resp = await axios.get(
      `http://tp2-analytics.azurewebsites.net/api/customers/${params.id}`
    );
    console.log(resp.data);
    setCustomer(resp.data);
    setAccounts(resp.data.accounts);

    for (const a of resp.data.accounts) {
      const accResp = await axios.get(
        `http://tp2-analytics.azurewebsites.net/api/accounts/${a}`
      );
      let account = accResp.data;
      if (account.limit < 10000) {
        setLimitFlag(true);
        break;
      }
    }
  };

  useEffect(() => {
    getCustomer();
  }, []);
  return (
    <div
      style={{ flex: "column", justifyContent: "center", alignItems: "center" }}
      className="App-header"
    >
      <h4>Customer information</h4>
      {limitFlag && <h6 style={{ color: "red" }}>Account below 10000 limit</h6>}
      <ul style={{ listStyleType: "none" }}>
        <li>User name : {customer.username}</li>
        <li>Name : {customer.name}</li>
        <li>Address : {customer.address}</li>
        <li>Birthdate : {customer.birthdate}</li>
        <li>Email : {customer.email}</li>
      </ul>
      <h4>Accounts</h4>
      {
        <ul style={{ listStyleType: "none" }}>
          {accounts.map((c, index) => {
            return (
              <>
                <Link to={`/account/${c}`}>
                  <li>{c}</li>
                </Link>
              </>
            );
          })}
        </ul>
      }
    </div>
  );
};

export default Customer;
