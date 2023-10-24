import "../App.css";
import Customer from "./Customer";

export default function CustomerList(props) {
  return (
    <div className="App">
      <h1>Listado Customers</h1>

      <ul>
        {props.Customers.map((customer) => {
          return (
            <Customer
              id={customer._id}
              username={customer.username}
              name={customer.name}
              address={customer.address}
              birthdate={customer.birthdate}
              email={customer.email}
              accounts={customer.accounts}
            />
          );
        })}
      </ul>
    </div>
  );
}
