import {useParams} from 'react-router-dom';
import {useState, useEffect} from 'react';
 
const CustomerAccount = (props) => {
    const {account_id} = useParams();
    const [customer, setCustomer] = useState({});

    useEffect(()=>{
       fetch("https://analyticsbackendort.azurewebsites.net/api/accounts")
            .then(response => response.json())
            .then(data => 
                    setCustomer(data.find(customer => customer.accounts === account_id))
            )
            .catch(error => console.log(error));
    }, []);


    const limitMenor = (props) =>{
        if(props < 10000){
            return(
                <menor>{customer.limit}</menor>
            )
        } else return <mayor>{customer.limit}</mayor>;
        
    }

    return (
        <>  
            <h1>Informacion de la cuenta</h1>
            <h2>Limit: {limitMenor(customer.limit)}</h2>
            <h2>Products: {customer.products?.map((p)=>{
                return(
                    <h3>---------------{p}</h3>
                )
            })}</h2>      
        </>
    );

  

};

export default CustomerAccount;