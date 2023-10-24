import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const ListaAccounts = (props) =>{
        const [limite,setLimite] = useState([]);
        useEffect(()=>{
            const handleCheckLimite = async () =>{
                const requestOptions = {
                    method: "GET",
                    headers: {
                      "Content-Type": "application/json",
                    },
                  };
                  try{
                    const response = await fetch("https://analyticsbackendort.azurewebsites.net/api/accounts?pageSize=200&page=1",requestOptions);
        
                    if (response.ok){
                        const accounts = await response.json();
                        var i;
                        var limitebajo
                        while(limitebajo == false && i<Object.keys(props).length-1){
                            var limite = accounts.find((account)=> account.account_id === props[i]).limit
                            if (limite<10000){
                                var limitebajo = true;
                                setLimite(" Limite menor a 10.000") //solo aparece con la cuenta si el limite es menor a 10000
                            }
                        }   
                    }
                  }catch (error){
                    console.log("error al buscar",error)
                  }
                }
            handleCheckLimite();
            },[]);

    return(
    <ul>
        {props.ListaAccounts?.map(account => {
            return(
                <div>
                    <Link to = {`/account/${account}`}> {account}, {limite} </Link>
                </div>
            )
        })}
    </ul>
)}
export default ListaAccounts;