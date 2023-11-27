import { Link } from "react-router-dom";
import "../Estilos/Customer.css";

const Customer = (props) => {
  return (
    <div className="card p-3">
      <ul key={props._id}>
        <li>
          <strong>_id:</strong> {props._id}
        </li>
        <li>
          <strong>username:</strong> {props.username}
        </li>
        <li>
          <strong>name:</strong> {props.name}
        </li>
        <li>
          <strong>address:</strong> {props.address}
        </li>
        <li>
          <strong>birthdate:</strong> {props.birthdate}
        </li>
        <li>
          <strong>email:</strong> {props.email}
        </li>
        <li>
          <strong>accounts:</strong>
          <ol>
            {props.accounts.map((account) => {
              return (
                <li className="mb-2">
                  <Link
                    to={`/accounts/${account._id}`}
                    className={
                      account.limit < 10000 ? "account-below-10000" : ""
                    }
                  >
                    Cuenta {account.account_id}{" "}
                    {account.limit < 10000
                      ? "(el limite es inferior a 10000)"
                      : ""}
                  </Link>
                </li>
              );
            })}
          </ol>
        </li>
      </ul>
    </div>
  );
};

export default Customer;
