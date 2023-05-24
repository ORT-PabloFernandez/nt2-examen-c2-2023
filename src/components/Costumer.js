import React from "react";
import { Link } from "react-router-dom";

const Costumer = (props) => {
  return (
    <div>
      <h1>{props.username}</h1>
      <h2>{props.name}</h2>
      <h3>{props.adress}</h3>
      <h4>{props.birthdate}</h4>
      <h5>{props.email}</h5>

      <ul>
        {props.accounts.map((account) => {
          return (
            <li>
              <Link to={`/accounts/${account}`}>Account id: {account}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Costumer;
