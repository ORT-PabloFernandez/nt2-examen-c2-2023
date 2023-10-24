import { useEffect } from "react";
import { useState } from "react";
import CustomersList from "./CustomersList";

const CustomerPage= ()=>{
    const [customers, setCustomers] = useState([]);

    useEffect(()=>{
        fetch("https://analyticsbackendort.azurewebsites.net/api/customers?pageSize=10&page=2")
        .then(response => response.json())
        .then(data=>{
            setCustomers(data);
        })
        .catch(error => console.log(error))
    }, []);
    
    return(
        <CustomersList Customers= {customers} />
    )
}

export default CustomerPage;