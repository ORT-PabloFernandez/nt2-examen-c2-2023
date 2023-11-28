import { useParams } from "react-router-dom";
import {useState, useEffect} from "react";

const UserDetails = (props)=>{
    const {id} = useParams();
    const [customer, setUser] = useState({});

    useEffect(()=> {
        fetch(`https://analyticsbackendort.azurewebsites.net/api/customers?`)
        .then(response => response.json())
        .then(data => 
         setUser(data.find(customer => customer._id===id))
        ) 
        .catch(error=> console.log(error));
     }, []);
    return (
        <>
        <h3>{customer.name}</h3>
        <h3>{customer.username}</h3>
        </>
    );
};

export default UserDetails;