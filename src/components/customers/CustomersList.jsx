import Customer from "./Customer";


const CustomersList = (props) =>{
    return(
        <ul>
            {props.Customers.map( customer =>{

                return(
                    <Customer
                        Username = {customer.username}
                        Name = {customer.name}
                        Address ={customer.addres}
                        Birthdate = {customer.birthdate}
                        Email = {customer.email}
                        Accounts = {customer.accounts}
                        
                    />
                )

            }
            )}
        </ul>
    )
}

export default CustomersList;