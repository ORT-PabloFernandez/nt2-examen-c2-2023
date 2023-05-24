import Customer from "./Customer";

export default function CustomersList(props) {
  return (
    <ul>
      {props.Customers.map((customer) => {
        return (
          <div>
            <br></br>
            <Customer
              id={customer._id}
              username={customer.username}
              name={customer.name}
              address={customer.address}
              birthdate={customer.birthdate}
              email={customer.email}
              accounts={customer.accounts}
            />
            <br></br>
          </div>
        );
      })}
    </ul>
  );
}
