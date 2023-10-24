import Customers from './Customers'
import { useState, useEffect } from 'react'

const CustomerPage = (props) => {
    const [customers, setCustomers] = useState([]);

    useEffect(()=>{

        fetch('https://analyticsbackendort.azurewebsites.net/api/customers')
        .then(response => response.json())
        .then(data=> {
            setCustomers(data);
        })
        .catch(error => console.log(error));
    }, []);

  return(
    <div>
        <Customers Customers = {customers} />
    </div>
  )

    

    
}
export default CustomerPage;