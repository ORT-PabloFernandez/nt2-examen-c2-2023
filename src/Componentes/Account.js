import axios from "axios";
import React, {useEffect, useState }  from "react";


const Account =() => {
const [setAccount] = useState([]);
const [products ,setProducts] = useState([]);

const getAccount =async () => {
    const resp = await axios.get(
        `https://tp2-analytics.azurewebsites.net/api/accounts`
       );
    console.log(resp.data);
    setAccount(resp.data);
    setProducts(resp.data.products);
};

useEffect(()=>{
    getAccount();
});   

return (
    <div className="App-header">
        <h4>limit : {Account.limit}</h4>
        <hr></hr>
        <h4>Products</h4>
        <ul>
            {products.map((p,index)=>{
                return(
                    <>
                        <li>{p}</li>
                    </>
                )
                })};
        </ul>
    </div>
);
} 
export default Account;