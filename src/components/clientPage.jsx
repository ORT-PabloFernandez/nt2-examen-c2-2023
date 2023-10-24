import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import ListaClientes from "./listaClientes";


const ClientesPage = () =>{

    const [dataClientes,setClientes] = useState([]);

    useEffect(()=>{
    const handleGetClientes = async () =>{
        const requestOptions = {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          };
          try{
            const response = await fetch("https://analyticsbackendort.azurewebsites.net/api/customers?pageSize=100&page=1",requestOptions);

            if (response.ok){
                const dataClientes = await response.json()
                setClientes(dataClientes);
                console.log(dataClientes);
            }
          }catch{
            console.log("error al cargar datos")
          }
        }
    handleGetClientes();
    },[]);

    return(
        <div>
            <ListaClientes ListaClientes = {dataClientes}/>
        </div>
    )
}
export default ClientesPage;