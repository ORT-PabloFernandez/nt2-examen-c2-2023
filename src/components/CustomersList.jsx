import Customer from "./Customer";

const CustomersList = (props) => {
  return (
    <ul>
      {props.Customers.map((customer) => {
        return (
          <Customer
            Id={customer._id}
            UserName={customer.username}
            Name={customer.name}
            Address={customer.address}
            BirthDate={customer.birthdate}
            Email={customer.email}
            Accounts={customer.accounts}
          />
        );
      })}
    </ul>
  );
};

export default CustomersList;
