import { useState } from "react";
import { Link } from "react-router-dom";

const Customer = (props) => {
  return (
    <li>
      <div>
        <Link to={`/customers/${props.Id}`}>
          <div>
            
          <h3>{props.Username}</h3>
          <h3>{props.Name}</h3>
          <h3>{props.Address}</h3>
          <h3>{props.Birthdate}</h3>
          <h3>{props.Email}</h3>
          <ul>
        {props.Accounts.map((account_id) => (
          <li key={account_id}>
            <Link to={`/account/${account_id}`}>Account {account_id}</Link>
          </li>
        ))}
      </ul>

          </div>
        </Link>
      </div>
    </li>
  );
};

export default Customer;