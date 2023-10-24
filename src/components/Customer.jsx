import React from "react";
import { Link } from "react-router-dom";
import "./Customer.css";

function Customer(props) {
  return (
    <li>
      <div>
        <div className="customer-box">
          <p>Usuario: {props.username}</p>
          <p>Nombre: {props.name}</p>
          <p>Dirección: {props.address}</p>
          <p>Fecha de Nacimiento: {props.birthdate}</p>
          <p>Email: {props.email}</p>
          <p>Cuenta: </p>
          <ul>
            {props.accounts.map((account) => {
              return (
                <button>
                  <Link to={`/customers/account/${account}`}>{account}</Link>
                </button>
              );
            })}
          </ul>
        </div>
      </div>
    </li>
  );
}

export default Customer;
