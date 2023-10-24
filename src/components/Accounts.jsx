//https://analyticsbackendort.azurewebsites.net/api/accounts?pageSize=10&page=2
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Accounts = (props) => {
    const {id} = useParams();
    const [account, setAccount] = useState({});

    useEffect(() => {
        fetch("https://analyticsbackendort.azurewebsites.net/api/accounts/")
        .then(response => response.json())
        .then(data => 
            setAccount(data.find(account => account.account_id === id)),
        )
        .catch(error => console.log(error));

    }, [])
    return (
        <>
        <div>
            <h2>Cuenta del cliente</h2>
             <h3>{account.limit}</h3>
             <h3>{account.products})
                </h3>   
             </div> 
        </>
    );
};

export default Accounts;