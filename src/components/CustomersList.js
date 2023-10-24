import Customer from "./Customer";

const CustomersList = (props) => {
  return (
    <ul className="customers">
      {props.Customers.map((customer) =>    {
        return (
          <Customer
            Username={customer.username}
            Name={customer.name}
            Adress={customer.adress}
            Birth={customer.birthdate}
            Email={customer.email}
            Accounts={customer.accounts}
          />
        );
      })}
    </ul>
  );
};

export default CustomersList;