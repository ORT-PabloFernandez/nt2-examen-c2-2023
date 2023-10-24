import Customer from "./Customer";

const Customers = (props) => {
    return (
       <ul>
       
            {props.Customers.map(customer => {
                return (
                    <Customer 
                        id = {customer._id}
                        username = {customer.username}
                        name = {customer.name}     
                        adress = {customer.adress}     
                        birthdate = {customer.birthdate}   
                        email = {customer.email}       
                        account = {customer.accounts}      
                    />
                );
            })}
       </ul> 
    )
       
   
}

export default Customers;