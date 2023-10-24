import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

const Account= (props) =>{
    const {id} = useParams();
    const [account, setAccount] = useState([]);
    
    useEffect(()=>{
        fetch("https://analyticsbackendort.azurewebsites.net/api/accounts")
        .then(respose => respose.json())
        .then(data => 
            setAccount(data.find(account => account.account_id === id)))
        .catch(error => console.log(error))
    },[])
    return(
        <div>
            <h1>{account.limit}</h1>
            <h4>{account.products.map(products =>{
                return(
                    <h5>{products}</h5> 
                )
            })}</h4>
            {/* <h1>{account.products.map(products =>{
                return(
                    <h2>{products}</h2>
                )
            })}
            </h1>             */}
        </div>
        
    )
} 

export default Account