import { Link } from "react-router-dom";
import Limit from "./Limit";

export default function Customer(props) {
  return (
    <li>
      <div>
        <div>
          <h2>Customer id : {props.id}</h2>
        </div>
        <div>
          <h2>Username: {props.username}</h2>
        </div>
        <div>
          <h2>Name: {props.name}</h2>
        </div>
        <div>
          <h2>Address: {props.address}</h2>
        </div>
        <div>
          <h2>Mail: {props.email}</h2>
        </div>
        <div>
          <h2>Birthdate{props.birthdate}</h2>
        </div>
        <h2> COSTUMER ACCOUNTS: </h2>
        {props.accounts.map((account) => {
          <Limit Account={account} />;
          return (
            <Link to={`/Account/${account}`}>
              <h2>{account}</h2>
            </Link>
          );
        })}
      </div>
    </li>
  );
}
