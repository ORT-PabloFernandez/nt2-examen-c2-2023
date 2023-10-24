import "./Customer.css";
import Customer from "./Customer";

export default function CustomerList(props){
    return (
       <ul className="customer-list">
            {props.Customers.map(customer => {
                return (
                    <Customer 
                        Id = {customer._id}
                        UserName = {customer.username}
                        Name = {customer.name}
                        adress = {customer.adress}
                        birthdate = {customer.birthdate}
                        email = {customer.email}   
                        Accounts  = {customer.accounts}                   
                    />
                );
            })}
       </ul> 
    );
}