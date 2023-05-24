import "./CustomersList.css";
import Customer from "./Customer.js";

const CustomersList = (props) => {
  // Iterar por los usuarios
  return (
    <ul className="users-list">
      {props.Customers.map((cust) =>    {
        return (
          <Customer
            Username={cust.username}
            Name={cust.name}
            Adress={cust.adress}
            Birth={cust.birthdate}
            Email={cust.email}
            Accounts={cust.accounts}
          />
        );
      })}
    </ul>
  );
};

export default CustomersList;