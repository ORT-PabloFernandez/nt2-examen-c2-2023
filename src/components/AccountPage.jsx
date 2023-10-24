import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ListaProductos from "./listaProductos";

const AccountPage = () =>{
    const { account_id } = useParams();
    const [cuenta,setAccount] = useState([]);
    useEffect(()=>{
        const handleGetAccount = async () =>{
            const requestOptions = {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              };
              try{
                const response = await fetch("https://analyticsbackendort.azurewebsites.net/api/accounts?pageSize=1000&page=1",requestOptions);
    
                if (response.ok){
                    const accounts = await response.json();
                    const account = accounts.find((account)=> account.account_id === account_id);
                    console.log(account_id)
                    console.log(account?.account_id) //me encuentra un objeto account pero ese objeto no tiene la propedad account_id?
                    setAccount(account)
                }
              }catch (error){
                console.log("error al buscar",error)
              }
            }
        handleGetAccount();
        },[]);
        return(
            <div>
                <div>{account_id}</div>
                <div>{cuenta.limit}</div>
                <ListaProductos ListaProductos = {cuenta.products}/>
            </div>
        )
}
export default AccountPage;