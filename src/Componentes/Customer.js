import axios from "axios";
import React, {useEffect, useState }  from "react";
import {useParams} from "react-router-dom";

const Customer =() => {
    const params = useParams();
    const [customer, setcustomers,setaccount] = useState([]);
    const[limitFlag,setLimitFlag] = useState(false);

    const getCustomer =async () => {
        const resp = await axios.get(
            `https://tp2-analytics.azurewebsites.net/api/customers/${params.id}`
        );
        console.log(resp.data);
        setcustomers(resp.data);
        setaccount(resp.data.account);

        for(const a of resp.data.account){
            const resp = await axios.get(
                `http://tp2.analytics.azurewebsite.net/api/accounts/${a}`
            );
            let account = resp.data;
    
            if(account.limit <10000){
                setLimitFlag(true);
                break;
            }
        }
    }

    useEffect(()=>{
        getCustomer();
    });   

    return(
        <div className="App-header">
            {limitFlag && (
                <h1 style={{color: "red"}}>
                    Cliente con credito menor a 10000
                </h1> 
            ) };
            <h4>{customer.username}</h4>;
            <h5>{customer.name}</h5>;
            <h6>{customer.address}</h6>;
            <h7>{customer.email}</h7>
            <h8>Account</h8>
            <ul>
                 {customer.account.map((a,index)=>{
                    return (
                       <>
                   <li>(a)</li>
                   </>
                   )
                 } )}
            </ul>
</div>
    );
}

export default Customer;