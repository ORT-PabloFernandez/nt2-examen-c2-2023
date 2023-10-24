import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ListaAccounts from "./clientAccounts";

const DetallesCliente = () =>{
    const { id } = useParams();
    const [cliente,setCliente] = useState([]);
    useEffect(()=>{
        const handleGetCliente = async () =>{
            const requestOptions = {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                },
              };
              try{
                const response = await fetch("https://analyticsbackendort.azurewebsites.net/api/customers?pageSize=100&page=1",requestOptions);
    
                if (response.ok){
                    const clientes = await response.json();
                    const cliente = clientes.find((cliente)=> cliente._id === id);
                    setCliente(cliente)
                }
              }catch (error){
                console.log("error al buscar",error)
              }
            }
        handleGetCliente();
        },[]);
    return(
        <div> 
            <p>{cliente.username}</p>
            <p>{cliente.name}</p>
            <p>{cliente.adress}</p>
            <p>{cliente.birthdate}</p>
            <p>{cliente.email}</p>
            <ListaAccounts ListaAccounts = {cliente.accounts}/>
        </div>
    )
}
export default DetallesCliente;